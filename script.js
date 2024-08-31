const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');

async function fetchUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();

    const user = data.results[0];
    const name = `${user.name.first} ${user.name.last}`;
    const email = user.email;

    // To Display
    nameEl.innerText = name;
    emailEl.innerText = email;
}

// On Load
fetchUser();