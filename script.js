let showHeroesBtn = document.getElementById('show-heroes-btn');
let heroesContainer = document.getElementById('heroes-container');
let startFightBtn = document.getElementById('start-fight-btn');
let showWinnerDiv = document.getElementById('show-winner');

showHeroesBtn.addEventListener('click', showHeroesContainer);
startFightBtn.addEventListener('click', showWinner);

function showHeroesContainer() {
    showHeroesBtn.classList.add("d-none");
    heroesContainer.classList.add('d-flex');
    startFightBtn.classList.add('d-block');
}
function showWinner() {
  showWinnerDiv.innerHTML = epicFight.findWinner();
  startFightBtn.classList.remove("d-block");
  heroesContainer.classList.remove("d-flex");
  showWinnerDiv.classList.add("d-flex");
}