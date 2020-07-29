import { fetchCreateUser, fetchCreateShoe, fetchUsers, fetchShoes, fetchDeleteShoe, fetchDeleteUser } from "./api.js"

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
document.addEventListener("DOMContentLoaded", () => {

  const addBtn = document.querySelector("#new-shoe-btn");
  const askUserSection = document.querySelector("#new-or-old-user");
  addBtn.addEventListener("click", () => {
    toggle(askUserSection, createShoe)
  });

  const newUserBtn = document.querySelector("#new-user")
  const newUserContainer = document.querySelector("#new-user-form-container")
  newUserBtn.addEventListener("click", () => {
    hide(generalContainer)
    toggle(newUserContainer, addUser)
  })

  document.querySelector(".add-user-form").addEventListener("submit", (submitevent) => {
    hide(newUserContainer)
    submitevent.preventDefault()
    const nameEl = document.querySelector("#name-input")
    const imageEl = document.querySelector("#image-input")
    let body = {
      "name": nameEl.value,
      "image_url": imageEl.value,
    }
    fetchCreateUser(show, generalContainer, addCard, body, nameEl, imageEl)
  })

  const previousUserBtn = document.querySelector("#previous-user")
  const generalContainer = document.querySelector("#bottom-section")
  const cardContainer = document.querySelector("#shoe-collection")
  cardContainer.innerHTML = ""
  previousUserBtn.addEventListener("click", () => {
    addUser = !addUser
    hide(newUserContainer)
    showCards = !showCards
    if (showCards) {
      show(generalContainer)
      cardContainer.innerHTML = ""
      cardContainer.classList = "col-sm-12"
      hide(document.querySelector(`#side-column`))
      fetchUsers(addCard)
    } else {
      hide(generalContainer)
    }
  })

  document.querySelector("#create-shoe-form").addEventListener("submit", (event) => {
    event.preventDefault()
    shoeForm = !shoeForm
    hide(document.querySelector(`#side-column`))
    cardContainer.classList = "col-sm-12"
    let form = event.target
    let body = {
      "shoe": {
        "name": form.name.value,
        "heel_height": form.heel_height.value,
        "size": form.size.value,
        "style": form.style.value,
        "color": form.color.value,
        "user_id": form.user.value
      }
    }
    fetchCreateShoe(form, body, addShoetoUser)
  })

})

  function addShoetoUser(shoe) {
    const userId = shoe.user_id
    const shoeList = document.querySelector(`#shoe-list-of-${userId}`)
    const shoeItem = document.createElement('li')
    shoeItem.innerHTML = `
    Shoe Name: ${shoe.name}
    <button id="see-shoe-${shoe.id}-details"> See Shoe Details </button>
    <button id="delete-shoe-${shoe.id}"> Delete Shoe </button>`
    shoeItem.id = `shoe-${shoe.id}`
    shoeList.append(shoeItem)

    document.querySelector(`#see-shoe-${shoe.id}-details`).addEventListener("click", () => {
      showShoeDetails(shoe)
    })
    deleteShoe(shoe, userId)
  }

function addCard(user) {
  const card = document.createElement('div');
  card.classList = "row"
  card.id= `user-card-${user.id}`
  card.innerHTML = `
    <div id="usercard-${user.id}" class="profile">
      <h1> ${user.name} </h1>
      <img src= ${user.image_url} alt="(no profile imag)"></img>
      <p> ${user.name}'s Shoes:
        <ul id="shoe-list-of-${user.id}" class="shoe-list">
        </ul>
        <button add-shoe-to-user-id="${user.id}"> Add Shoe</button>
        <button delete-user-id="${user.id}"> Delete User</button>
      </p>
    </div>

    <div id="shoe-of-${user.id}" class="details">
    </div>
  `

  const cardContainer = document.querySelector("#shoe-collection")
  cardContainer.prepend(card)

  fetchShoes(user, displayShoeList)

  let deleteUserBtn = document.querySelector("[delete-user-id]")
  deleteUserBtn.addEventListener("click", () => {
    let userId = deleteUserBtn.getAttribute("delete-user-id")
    deleteUser(userId)
  })

  let addShoeButton = document.querySelector("[add-shoe-to-user-id]")
  addShoeButton.addEventListener("click", () => {
    let thisUser = addShoeButton.getAttribute("add-shoe-to-user-id")
    hide(document.querySelector(`#shoe-of-${thisUser}`))
    document.querySelector(`#usercard-${thisUser}`).classList = "col-sm-12"
    document.querySelector("#shoe-user").value = thisUser
    const formSection = document.querySelector("#side-column")
    let form = document.querySelector(`#create-shoe-form`)
    resetForm(form)

    shoeForm = !shoeForm
    if (shoeForm) {
      show(formSection)
      cardContainer.classList = "col-sm-9"
    } else {
      hide(formSection)
      cardContainer.classList = "col-sm-12"
    }
  })
}

function resetForm(form) {
  form.style.value = ""
  form.color.value = ""
  form.name.value = ""

  for(const s of form.size) {
    s.checked = false }
  for(const h of form.heel_height) {
    h.checked = false }
}

function displayShoeList(shoeArray) {
  for(const shoe of shoeArray) {
    addShoetoUser(shoe)
  }
}

function showShoeDetails(shoe) {
  let detailSection = document.querySelector(`#shoe-of-${shoe.user_id}`)
  document.querySelector(`#usercard-${shoe.user_id}`).classList = "col-sm-9"
  detailSection.classList = "col-sm-3"
  detailSection.style.display = "block"

  detailSection.innerHTML = `
  <h5>The ${shoe.name} </h5> <br>
  <p> This shoe will hug the foot perfectly, as it was made to fit ${shoe.size}.
  It will add an extra ${shoe.heel_height}, slendering the legs and complimenting the whole figure.
  This ${shoe.style} is also in the unique shade of ${shoe.color}.
  `
}

function deleteShoe(shoe, userId) {
  let deleteShoeBtn = document.querySelector(`#delete-shoe-${shoe.id}`)
  deleteShoeBtn.addEventListener("click", () => {
    document.querySelector(`#shoe-of-${userId}`).style.display = "none"
    document.querySelector(`#usercard-${userId}`).classList = "col-sm-12"
    let shoebeingdeleted = document.querySelector(`#shoe-${shoe.id}`)

    fetchDeleteShoe(shoebeingdeleted, shoe, userId)
  })
}

function deleteUser(userId) {
  let cardBeingDeleted = document.querySelector(`#user-card-${userId}`)
  fetchDeleteUser(cardBeingDeleted, userId)
}
