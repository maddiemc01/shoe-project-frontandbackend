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

  document.querySelector(".add-user-form").addEventListener("submit", (submitevent) => {
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
        "image": imageEl.value,
      })
    }).then(resp => { return resp.json()
    }).then(user => {
      cardContainer.style.display = "block"
      addCard(user)
      nameEl.value = "" //this will revert the text box to blank once submitted
      imageEl.value = ""
    })
  })

  const previousUserBtn = document.querySelector("#previous-user")
  const cardContainer = document.querySelector("#shoe-collection")
  cardContainer.innerHTML = ""
  previousUserBtn.addEventListener("click", () => {
    showCards = !showCards
    if (showCards) {
      cardContainer.style.display = "block"
      cardContainer.innerHTML = ""
      loadUsers()
    } else {
      cardContainer.style.display = "none"
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
    const card = document.createElement('div');
    const shoeList = document.createElement('ul');
    const addShoeButton = document.createElement('button');
    const cardContainer = document.querySelector("#shoe-collection")

    card.setAttribute("data-id", user.id)
    shoeList.id = `shoe-list-${user.id}`
    shoeList.className = "shoe-list"
    addShoeButton.id = 'add-button'
    addShoeButton.innerText = 'Add Shoe'
    card.classList.add("card")

    userName = document.createElement('h1')
    userName.innerHTML = user.name
    userImage = document.createElement('img')
    userImage.src = user.image_url

    cardContainer.prepend(card)
    card.append(userName)
    card.append(userImage)
    card.append(addShoeButton)
    card.append(shoeList)

}

