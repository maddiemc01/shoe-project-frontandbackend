let createShoe = false;
let addUser = false;
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




})

