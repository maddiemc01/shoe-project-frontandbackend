let createShoe = false;
let addUser = false;
let showCards = false;
let shoeForm = false;

function hide(section) {
  section.style.display = "none"
}

function show(section) {
 section.style.display = "block"
}

function toggle(section, bool) {
  bool = !bool;
  if (bool) {
    show(section)
  } else {
    hide(section)
  }
}
const askUserSection = document.querySelector("#new-or-old-user");

export function toggleNewOrOldUser() {
  toggle(askUserSection, createShoe)
}

const generalContainer = document.querySelector("#bottom-section")
const newUserContainer = document.querySelector("#new-user-form-container")

export function toggleNewUserForm() {
  hide(generalContainer)
  addUser = !addUser
  toggle(newUserContainer, addUser)
}

const cardContainer = document.querySelector("#shoe-collection")

export function toggleBottomSection(callback1, callback2) {
  showCards = !showCards
    if (showCards) {
      addUser = !addUser
      hide(newUserContainer)
      show(generalContainer)
      cardContainer.innerHTML = ""
      cardContainer.classList = "col-sm-12"
      hide(document.querySelector(`#side-column`))
      callback1(callback2)
    } else {
      hide(generalContainer)
    }
}
const formSection = document.querySelector("#side-column")

export function toggleNewShoeForm() {
  shoeForm = !shoeForm
    if (shoeForm) {
      show(formSection)
      cardContainer.classList = "col-sm-9"
    } else {
      hide(formSection)
      cardContainer.classList = "col-sm-12"
    }
}