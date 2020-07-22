let addShoe = false;

ocument.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-shoe-btn"); // botton that shows the form for adding new shoe
  const shoeFormContainer = document.querySelector(".container"); // class container has the form for add new shoe
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addShoe = !addShoe;
    if (addShoe) {
      shoeFormContainer.style.display = "block";
    } else {
      shoeFormContainer.style.display = "none";
    }
  });
})