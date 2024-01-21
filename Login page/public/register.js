console.log("Register.js loaded");
const form = document.getElementById("register-form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let fname = document.querySelector("#fname").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if (!fname || !email || !password) {
        return alert("Please Fill up all fields");
    }
    else if (password?.length < 8 || password?.length > 16) {
        return alert(`Password should be between 8 and 16 characters`);
    }
    else if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        return alert('Invalid Email Address');
    }
    else {
        console.log("Registering...");
        const res = await fetch(`http://localhost:5000/user/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname,
                email,
                password
            })
        });
        const data = await res.json();
        
        if (res.status === 409) {
            alert(data?.error)
            setTimeout(() => {
                window.location.href = 'http://localhost:5503/public/index.html'
            }, 9000);
        }
        else if (res.status === 200) {
            alert(data?.message)
            setTimeout(() => {
                window.location.href = 'http://localhost:5503/public/index.html'
            }, 9000);
        }
        else {
            alert("Something went wrong")
        }
        document.getElementById("fname").value = ""
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""



    }
})

function redirectToLoginPage() {
    window.location.href = './Login.html'
}