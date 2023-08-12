const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// You can also add some additional logic to remember the user's preference using local storage.
// For example:
// const darkModeEnabled = localStorage.getItem('darkModeEnabled');
// if (darkModeEnabled === 'true') {
//   body.classList.add('dark-mode');
// }
