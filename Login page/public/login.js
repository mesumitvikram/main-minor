
console.log("Login.js Loaded");
const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");


const token = localStorage.getItem('token');
if (token) {
    // window.location.replace('https://www.youtube.com')
}
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = {
        email: emailInput.value,
        password: passwordInput.value
    }

    if (!user?.email || !user?.password) {
        return alert('Fill out required Fields')
    }
    else if (!user?.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        return alert('Invalid Email');
    }
    else if (user?.password?.length < 8 || user?.password?.length > 16) {
        return alert("Passoword Must be  between 8 to 16 char long!")
    }

    else {

        try {
            const res = await fetch('http://localhost:5000/user/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            const data = await res.json();

            if (res.status === 401) {
                return alert(data?.error || "Something Went Wrong!")
            }
            else if (res.status === 404) {
                return alert(data?.error || "Something Went Wrong!")
            }
            if (res.status === 200) {
                localStorage.setItem("token", data.token);
                alert(data?.message || "Success!")
                emailInput.value = "";
                passwordInput.value = "";
                window.location.replace("http://192.168.76.109:5501/index.html")
                // window.location.replace("https://www.youtube.com")
                }
        }
        catch (err) {
            alert(err);
        }
    }
})