const usersList = document.querySelector('#users-list')
const getUsersBtn = document.querySelector('#get-users')
const addUserForm = document.querySelector('form')
const formConfirm = document.querySelector('#form-confirm')

document.addEventListener('DOMContentLoaded', () => {
  console.log('just waiting around...')
})


getUsersBtn.addEventListener('click', () => {

  usersList.innerHTML = `Loading users...`

  import(/* webpackChunkName: 'getUsers' */ './getUsers')
    .then(async ({ default: getUsers }) => {
      const users = await getUsers()
      usersList.innerHTML = ``

      users.forEach(user => {
        usersList.appendChild(user)
      });


    })
    .catch(err => usersList.innerHTML = `An error occured getting users... ${err}`)
})

addUserForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const firstName = evt.target.querySelector('#first_name')
  const lastName = evt.target.querySelector('#last_name')
  const email = evt.target.querySelector('#email')

  const data = {
    first_name: firstName.value,
    last_name: lastName.value,
    email: email.value
  }


  formConfirm.innerText = 'Adding new user...'

  import(/* webpackChunkName: 'addUser' */ './addUser')
    .then(async ({ default: addUser }) => {
      const res = await addUser(data)
      usersList.prepend(res)
      
      formConfirm.innerText = `New User Added`
      firstName.value = ''
      lastName.value = ''
      email.value = ''

    })
    .catch(err => {
      formConfirm.innerText = `A problem occured -> ${err}`
    })

})