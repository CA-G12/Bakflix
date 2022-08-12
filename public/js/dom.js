const landingSection = document.querySelector('#landing');
const browseSection = document.querySelector('#browse');
const BtnLandingSection = document.querySelector('#btn');
const movieSuggestionsImages = document.querySelector('.movies-suggestions-images');
const movieSuggestionsNames = document.querySelector('.movies-suggestions-names');
const searchInput = document.querySelector('input');

const input = document.querySelector('#input');
window.onload = () => {
  landingSection.style.display = 'flex';
  browseSection.style.display = 'none';
};
BtnLandingSection.addEventListener('click', () => {
  landingSection.style.display = 'none';
  browseSection.style.display = 'block';
});

window.onload = () => {
  movieSuggestionsImages.style.transform = 'translateX(400%)';
  movieSuggestionsNames.style.transform = 'translateX(-400%)';
};

searchInput.addEventListener('input', (e) => {
  const haga = e.target.value;
  if (haga.value === '') {
    movieSuggestionsImages.style.transform = 'translateX(-400%)';
    movieSuggestionsNames.style.transform = 'translateX(400%)';
  } else {
    movieSuggestionsImages.style.transform = 'translateX(0%)';
    movieSuggestionsNames.style.transform = 'translateX(0%)';
  }
  fetch(`/search/${haga}`, (data) => {
    handleDom(data);
  });
});
function removeDuplicates(mainDiv) {
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.lastChild);
  }
}

function handleDom(data) {
  removeDuplicates(movieSuggestionsNames)
  removeDuplicates(movieSuggestionsImages)
  for (let i = 0; i < data.length; i++) {
    const names = data[i][name].name;
    const img = data[i][name].img;
    if (names.toLowerCase().includes(input.value.toLowerCase())) {
      console.log(input.value.split(' ').join(''));
      const movieName = document.createElement('a')
      movieName.textContent = names
      movieSuggestionsNames.appendChild(movieName)
      const movieImage = document.createElement('img')
      movieImage.src = img;
      movieSuggestionsImages.appendChild(movieImage)
    }
  }



}
