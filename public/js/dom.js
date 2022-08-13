const landingSection = document.querySelector('#landing');
const browseSection = document.querySelector('#browse');
const btnLandingSection = document.querySelector('#btn');
const movieSuggestionsImages = document.querySelector('.movies-suggestions-images');
const movieSuggestionsNames = document.querySelector('.movies-suggestions-names');
const searchInput = document.querySelector('#input');
const suggestionsTitle = document.querySelector('.suggestions-title');

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
  const haga= e.target.value
  if (searchInput.value === '') {
    movieSuggestionsImages.style.transform = 'translateX(-400%)';
    movieSuggestionsNames.style.transform = 'translateX(400%)';
  } else {
    movieSuggestionsImages.style.transform = 'translateX(0%)';
    movieSuggestionsNames.style.transform = 'translateX(0%)';
  }
  fetch(`/src/${haga}`, (data) => {
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
  removeDuplicates(suggestionsTitle);
  removeDuplicates(movieSuggestionsImages);
  for (let i = 0; i < data.length; i++) {
    const names = data[i].name;
    const { img } = data[i];
    if (names.toLowerCase().includes(searchInput.value.toLowerCase())) {
      createElemets(movieSuggestionsImages, 'img', img);
      createElemets(suggestionsTitle, 'a', names);
    }
  }
}
function createElemets(parent, child, content) {
  const element = document.createElement(`${child}`);
  if (child === 'img') {
    element.src = content;
  } else if (child === 'a') {
    element.href = '#';
    element.textContent = content;
  } else {
    element.textContent = content;
  }
  parent.appendChild(element);
  return element;
}
module.exports = {
  createElemets,
  removeDuplicates,
};
