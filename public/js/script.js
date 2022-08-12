const landingSection = document.querySelector('#landing');
const browseSection = document.querySelector('#browse');
const BtnLandingSection = document.querySelector('#btn');
const movieSuggestionsImages = document.querySelector('.movies-suggestions-images');
const movieSuggestionsNames = document.querySelector('.movies-suggestions-names');
const input = document.querySelector('#input');
// moviesSuggestions.style.display = 'none';

window.onload = () => {
    landingSection.style.display = 'flex';
    browseSection.style.display = 'none';
    movieSuggestionsImages.style.transform = `translateX(400%)`;
    movieSuggestionsNames.style.transform = `translateX(-400%)`;
};
BtnLandingSection.addEventListener('click', () => {
    landingSection.style.display = 'none';
    browseSection.style.display = 'block';
});

input.addEventListener('input', () => {
    if (input.value === "") {
        movieSuggestionsImages.style.transform = `translateX(-400%)`;
        movieSuggestionsNames.style.transform = `translateX(400%)`;
      } else {
        movieSuggestionsImages.style.transform = `translateX(0%)`;
        movieSuggestionsNames.style.transform = `translateX(0%)`;
      
    }
});
