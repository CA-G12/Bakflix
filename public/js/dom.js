const landingSection = document.querySelector('#landing');
const browseSection = document.querySelector('#browse');
const btnLandingSection = document.querySelector('#btn');
const movieSuggestionsImages = document.querySelector('.movies-suggestions-images');
const movieSuggestionsNames = document.querySelector('.movies-suggestions-names');
const searchInput = document.querySelector('input');
const searchBox = document.querySelector(`.search`);

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
  searchBox.style.visibility = `visible`;
});

// for git data from json by using fetch api function
searchInput.addEventListener('input', (e) => {
  e.preventDefault()
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
  for (let i = 0; i < 10; i++) {
    const names = data[i][`name`];
    const img = data[i][`img`];
    if (names.toLowerCase().includes(input.value.toLowerCase())) {
      console.log(input.value.split(' ').join(''));
      const movieName = document.createElement('a')
      movieName.setAttribute(`id`, data[i][`id`])
      movieName.addEventListener(`click`, (e) => {
        const id = data[i][`id`]
        fetch(`https://api.tvmaze.com/shows/${id}`, getDetails)
      })
      movieName.textContent = names
      movieSuggestionsNames.appendChild(movieName)
      const movieImage = document.createElement('img')
      movieImage.src = img;
      movieSuggestionsImages.appendChild(movieImage)
    }
  }
}

// show details function
function getDetails (data) {
  movieSuggestionsImages.style.overflow = `hidden`
  movieSuggestionsImages.textContent = ``;
  let div = document.createElement(`div`);
  div.classList.add(`result`)
  let imgDiv = document.createElement(`div`);
  let img = document.createElement(`img`);
  let container = document.createElement(`div`);
  let divPara = document.createElement(`div`);
  let heading = document.createElement(`h1`);

  img.src = data.image.medium;
  divPara.innerHTML = data.summary;
  heading.textContent = data.name;
  
  imgDiv.appendChild(img)
  div.appendChild(imgDiv);
  div.appendChild(container);
  container.appendChild(heading);
  container.appendChild(divPara);
  movieSuggestionsImages.appendChild(div)
}