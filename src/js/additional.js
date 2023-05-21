// Get the URL parameters
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);

// Get the value of the 'name' parameter
const name = params.get('name');

const uppercaseName = name.toUpperCase();

// Display the name on the page
document.getElementById('nameDisplay').textContent = uppercaseName;