// async function login() {
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   // const response = await fetch('/login', {
//   //   method: 'POST',
//   //   headers: {
//   //     'Content-Type': 'application/json',
//   //   },
//   //   body: JSON.stringify({ username, password }),
//   // });

//   // const data = await response.json();

//   // Change the Content-Type header to 'application/x-www-form-urlencoded'
//   const response = await fetch('/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: new URLSearchParams({ username, password }),
//   });



// const response = await fetch('/login', { /* ... */ });

// async function login() {
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   try {
//     // Change the Content-Type header to 'application/x-www-form-urlencoded'
//     const response = await fetch('/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams({ username, password }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     const messageElement = document.getElementById('message');
//     messageElement.textContent = data.message;

//     if (data.success) {
//       // Open a new tab or window after successful login
//       const newTab = window.open('https://www.youtube.com', '_blank');
//       if (newTab) {
//         alert('The new tab was successfully opened');
//       } else {
//         // The browser is blocking the popup
//         alert('Popup blocked! Please enable popups for this site.');
//       }
//     }
//   } catch (error) {
//     console.error('Fetch error:', error);
//   }
// }

// async function login() {
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   try {
//     // Change the Content-Type header to 'application/x-www-form-urlencoded'
//     const response = await fetch('/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams({ username, password }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     const messageElement = document.getElementById('message');
//     messageElement.textContent = data.message;

//     if (data.success) {
//       // Redirect to a new URL after successful login
//       window.location.href = 'https://www.youtube.com';
//     }
//   } catch (error) {
//     console.error('Fetch error:', error);
//   }
// }

async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    // Change the Content-Type header to 'application/x-www-form-urlencoded'
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ username, password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const messageElement = document.getElementById('message');
    messageElement.textContent = data.message;

    if (data.success) {
      // Redirect to a new URL after successful login
      window.location.href = 'https://www.youtube.com';
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
