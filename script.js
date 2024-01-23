const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// This function will filter the fruit list based on whatever user input is in the search box.
function search(str) {
  return fruit.filter((eachFruit) =>
    eachFruit.toLocaleLowerCase().includes(str.toLocaleLowerCase())
  );
}

const searchHandler = (e) => {
  const charTyped = e.target.value;
  showSuggestions(search(charTyped), charTyped);
};

function showSuggestions(suggestionsList, inputVal) {
  // showing the dropdown menu
  suggestions.innerHTML = ""; //renewing/updating the dropdown menu everytime
  // if the list is too long we add a scrollbar
  if (suggestionsList.length >= 6) {
    suggestions.classList.add("long-ul-list");
  }

  if (inputVal === "") {
    suggestions.classList.remove("long-ul-list");
    return;
  }
  suggestionsList.forEach((eachFruit) => {
    const newLi = document.createElement("li");
    newLi.innerText = eachFruit;
    suggestions.appendChild(newLi);
  });
}

function useSuggestion(e) {
  // update the search box
  input.value = e.target.innerText;

  // empty the suggestion list after the li (fruit option) is clicked
  suggestions.innerHTML = "";
  suggestions.classList.remove("long-ul-list");
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
