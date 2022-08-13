const landingSection = document.querySelector('#landing');
const browseSection = document.querySelector('#browse');
const btnLandingSection = document.querySelector('#btn');
const movieSuggestionsImages = document.querySelector('.movies-suggestions-images');
const movieSuggestionsNames = document.querySelector('.movies-suggestions-names');
const searchInput = document.querySelector('input');

const input = document.querySelector('#input');

// for make hidde moview image container and moview names container when the page load
window.onload = () => {
  landingSection.style.display = 'flex';
  browseSection.style.display = 'none';
  movieSuggestionsImages.style.transform = 'translateX(400%)';
  movieSuggestionsNames.style.transform = 'translateX(-400%)';
};

// for view and hidde browse section 
btnLandingSection.addEventListener('click', () => {
  landingSection.style.display = 'none';
  browseSection.style.display = 'block';
});

// for git data from json by using fetch api function
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

// for handle data in dom
function handleDom(data) {
  removeDuplicates(movieSuggestionsNames)
  removeDuplicates(movieSuggestionsImages)
  for (let i = 0; i < data.length; i++) {
    console.log(data)
    const names = data[i][`name`];
    const img = data[i][`img`];
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
