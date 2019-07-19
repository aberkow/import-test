// give htmlwebpack plugin access to index.hbs
// import '../index.hbs'

import '../sass/style.scss'
import '../css/style.css'

const usersList = document.querySelector('#users-list')
const getUsersBtn = document.querySelector('#get-users')
const addUserForm = document.querySelector('form')
const formConfirm = document.querySelector('#form-confirm')

const classTestBtn = document.querySelector('#class-test')

// if (window.innerWidth >= 960) {
//   import(/* webpackChunkName: 'style-desktop' */ '../sass/style.scss')
// }


document.addEventListener('DOMContentLoaded', () => {
  console.log('just waiting around...')
})


classTestBtn.addEventListener('click', () => {
  import(/* webpackChunkName: 'classTest' */ './classTest')
    .then(res => {

      // console.log(res.default, 'res');

      const thing = new res.default()
      thing.setString('Hello World')


      console.log(thing.init())


      // const thing = new res.default({ string: 'testing' })
      // console.log(thing.test, '1')
      // await thing.init()
      // console.log(thing.test, '2')
    })
    .catch(err => console.log(err))
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