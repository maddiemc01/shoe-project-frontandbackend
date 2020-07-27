let createShoe = false;
let addUser = false;
let showCards = false;
let shoeForm = false;

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
    generalContainer.style.display = "none"
    addUser = !addUser
    if (addUser) {
      newUserContainer.style.display = "block"
    } else {
      newUserContainer.style.display = "none"
    }
  })

  document.querySelector(".add-user-form").addEventListener("submit", (submitevent) => {
    newUserContainer.style.display = "none"
    submitevent.preventDefault()
    const nameEl = document.querySelector("#name-input") //added id to index.html
    const imageEl = document.querySelector("#image-input") //added id to index.html

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "name": nameEl.value,
        "image_url": imageEl.value,
      })
    }).then(resp => { return resp.json()
    }).then(user => {
      generalContainer.style.display = "block"
      addCard(user)
      nameEl.value = "" //this will revert the text box to blank once submitted
      imageEl.value = ""
    })
  })

  const previousUserBtn = document.querySelector("#previous-user")
  const generalContainer = document.querySelector("#bottom-section")
  const cardContainer = document.querySelector("#shoe-collection")
  cardContainer.innerHTML = ""
  previousUserBtn.addEventListener("click", () => {
    newUserContainer.style.display = "none"
    showCards = !showCards
    if (showCards) {
      generalContainer.style.display = "block"
      cardContainer.innerHTML = ""
      cardContainer.classList = "col-sm-12"
      loadUsers()
    } else {
      generalContainer.style.display = "none"
    }
  })
})

function loadUsers() {
  fetch("http://localhost:3000/users")
  .then(resp => resp.json())
  .then(allUsers => {
    allUsers.forEach(user => addCard(user))
    //allUsers.included.forEach(shoe => listShoe(shoe))

  })
}

function addCard(user) {
  console.log(user.id)
  const card = document.createElement('div');
  const shoeList = document.createElement('ul');
  const addShoeButton = document.createElement('button');
  const cardContainer = document.querySelector("#shoe-collection")
  const deleteUserBtn = document.createElement('button')

  card.id =`usercard-${user.id}`
  shoeList.id =(`shoe-list-of-${user.id}`)
  shoeList.className = "shoe-list"
  addShoeButton.setAttribute("add-shoe-to-user-id", `${user.id}`)
  addShoeButton.innerText = 'Add Shoe'
  deleteUserBtn.setAttribute("delete-user-id", `${user.id}`)
  deleteUserBtn.innerText = "Delete User"
  card.classList.add("card")

  userName = document.createElement('h1')
  userName.innerHTML = user.name
  userImage = document.createElement('img')
  userImage.src = user.image_url

  cardContainer.prepend(card)
  card.append(userName)
  card.append(userImage)
  card.append(`${user.name}'s Shoes:`)
  card.append(shoeList)
  showShoes(user)
  card.append(addShoeButton)
  card.append(deleteUserBtn)

  deleteUserBtn.addEventListener("click", () => {
    let userId = deleteUserBtn.getAttribute("delete-user-id")
    deleteUser(userId)
  })

  addShoeButton.addEventListener("click", () => {
    let thisUser = addShoeButton.getAttribute("add-shoe-to-user-id")
    console.log(thisUser)
    const formSection = document.querySelector("#side-column")
    shoeForm = !shoeForm
    if (shoeForm) {
      formSection.style.display = "block"
      cardContainer.classList = "col-sm-9"
      //createShoe(thisUser)
    } else {
      formSection.style.display = "none"
      cardContainer.classList = "col-sm-12"
    }
  })
}

function showShoes(user) {
  fetch(`http://localhost:3000/users/${user.id}/shoes`)
  .then(resp => resp.json())
  .then(shoeArray => displayShoeList(shoeArray))
}

function displayShoeList(shoeArray) {
  for(const shoe of shoeArray) {
    const userId = shoe.user_id
    const shoeList = document.querySelector(`#shoe-list-of-${userId}`)
    const shoeItem = document.createElement('li')
    const shoeName = shoe.name

    shoeList.append(shoeItem)
    shoeItem.append(shoeName)

  }
}

function deleteUser(userId) {
  let cardBeingDeleted = document.querySelector(`#usercard-${userId}`)
  fetch(`http://localhost:3000/users/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(resp => { return resp.json()
  }).then(resp => { cardBeingDeleted.remove() })

}

function createShoeforUser(thisUser) {

}
// const createShoeBtn = document.querySelector("#submit-new-shoe")
// createShoeBtn.addEventListener("submit", () => {
//   console.log(createShoeBtn)
// })

// function createShoeforUser(thisUser){
  //   let cardBeingAddedOnto = document.querySelector(`#usercard-${thisUser}`)
  // // create a shoe
  // // method POST shoes
  // // to update the user's shoes, but need to create a show first
  //   // fetch(`http://localhost:3000/users/${thisUser}`, {
    //   //   method: "PATCH",
    //   //   headers: {
      //   //     "Content-Type": "application/json",
      //   //     "Accept": "application/json"
      //   //   },
      //   //   body: JSON.stringify({
        //   //     "shoe": shoe.value
        //   //   })
        //   //})
        // }