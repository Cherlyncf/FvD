// JavaScript Document
console.log("howdy");






/* code url: https://codepen.io/shooft/pen/BaOwRBq */

var optionList = document.querySelector("#view-list");
var optionGrid = document.querySelector("#view-grid");

optionList.addEventListener("change", showInList);
optionGrid.addEventListener("change", showInGrid);

function showInList() {
  /* de lijst in de HTML opzoeken */
  let deLijst = document.querySelector("ul");
  /* de class grid-view verwijderen */
  deLijst.dataset.view = "listView";
  /* dan de class list-view toevoegen */
  // deLijst.classList.add("listView");
}

function showInGrid() {
  /* de lijst in de HTML opzoeken */
  let deLijst = document.querySelector("ul");
  /* de class list-view verwijderen */
  deLijst.dataset.view = "gridView";
  /* dan de class grid-view toevoegen */
  // deLijst.classList.add("gridView");
}


/* code url: https://codepen.io/shooft/pen/bGxoWNO */
var optionAll = document.querySelector("#filter-all");
var optionPerson = document.querySelector("#filter-person");
var optionPlace = document.querySelector("#filter-place");
var optionSights = document.querySelector("#filter-sights");

optionAll.addEventListener("change", filterList);
optionPerson.addEventListener("change", filterList);
optionPlace.addEventListener("change", filterList);
optionSights.addEventListener("change", filterList);

function filterList(event){
  /* de ul opzoeken */
  let deLijst = document.querySelector("ul");
  let nieuweFilter = event.target.value;
  // verwijder de huidige class van de lijst
  deLijst.className = "listView";
  // voeg de nieuwe class toe aan de lijst
  // het event object bevat alle info van het event dat heeft plaatsgevonden
  // het target is het element dat het event heeft laten afgaan
  // in dit geval de radio button die gewijzigd is
  // de value van die radio button is de nieuwe class
  deLijst.classList.add(nieuweFilter);
}
