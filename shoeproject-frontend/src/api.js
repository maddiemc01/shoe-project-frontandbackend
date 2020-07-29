export function fetchCreateUser(callback, arg, callback2, body, nameEl, imageEl) {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(body)
  }).then(resp => { return resp.json()
  }).then(user => {
    callback(arg)
    callback2(user)
    nameEl.value = ""
    imageEl.value = ""
  })
}

export function fetchCreateShoe(arg, body, callback) {
  fetch(`http://localhost:3000/users/${arg.user.value}/shoes`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    }).then(resp => resp.json())
      .then(newshoe => {
      callback(newshoe)
    })
  }

export function fetchUsers(callback) {
  fetch("http://localhost:3000/users")
  .then(resp => resp.json())
  .then(allUsers => {
    allUsers.forEach(user => callback(user))
  })
}

export function fetchShoes(user, callback) {
  fetch(`http://localhost:3000/users/${user.id}/shoes`)
  .then(resp => resp.json())
  .then(shoeArray => callback(shoeArray))
}

export function fetchDeleteShoe(shoetarget, shoe, userId) {
  fetch(`http://localhost:3000/users/${userId}/shoes/${shoe.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(resp => { return resp.json()
    }).then(resp => { shoetarget.remove()
  })
}

export function fetchDeleteUser(usertarget, userId) {
  fetch(`http://localhost:3000/users/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(resp => { return resp.json()
  }).then(resp => { usertarget.remove()
  })
}

