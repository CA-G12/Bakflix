const landingSection = document.querySelector('#landing');
const browseSection = document.querySelector('#browse');
const BtnLandingSection = document.querySelector('#btn');
window.onload = () => {
  landingSection.style.display = 'flex';
  browseSection.style.display = 'none';
}
BtnLandingSection.addEventListener('click', () => {
  landingSection.style.display = 'none';
  browseSection.style.display = 'block';
});

const searchInput = document.querySelector(`input`);

searchInput.addEventListener(`input`, (e) => {
  const haga = e.target.value;
  fetch(`/search/${haga}`, (data) => {
    handleDom(data);
  })
})

function handleDom (data) {}