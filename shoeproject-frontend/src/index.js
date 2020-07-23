let createShoe = false;
let addUser = false;
let showCards = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-shoe-btn"); // botton that shows the form for adding new shoe
  const shoeUserSection = document.querySelector("#new-or-old-user"); // class container has the form for add new shoe
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    createShoe = !createShoe;
    if (createShoe) {
      shoeUserSection.style.display = "block";
    } else {
      shoeUserSection.style.display = "none";
    }
  });
  const newUserBtn = document.querySelector("#new-user")
  const newUserContainer = document.querySelector("#new-user-form-container")
  newUserBtn.addEventListener("click", () => {
    addUser = !addUser
    if (addUser) {
      newUserContainer.style.display = "block"
    } else {
      newUserContainer.style.display = "none"
    }
  })

  const previousUserBtn = document.querySelector("#previous-user")
  const cardContainer = document.querySelector("#shoe-collection")
  cardContainer.innerHTML =
  previousUserBtn.addEventListener("click", () => {
    showCards = !showCards
    if (showCards) {
      cardContainer.style.display = "block"
    } else {
      cardContainer.style.display = "none"
    }
  })

  const submitNewUserBtn = document.querySelector("#submit-new-user")
  submitNewUserBtn.addEventListener("submit", () => {
    fetch("localhost:3000/user")

    cardContainer.style.display = "block"
    cardContainer.innerHTML = "hello"
  })



})

