import { get } from 'axios'

const getUsers = async () => {
  return await get(`https://reqres.in/api/users`)
    .then(({ data }) => {
      
      return data.data.map(user => {

        const li = document.createElement('li')
        li.setAttribute('id', `user-${user.id}`)
        li.innerHTML = `
          <img src=${user.avatar} alt='photo of ${user.first_name} ${user.last_name}' />
          <p><strong>${user.first_name} ${user.last_name}</strong></p>
          <p>${user.email}</p>
        `

        return li
      })
    })
    .catch(err => err)
}

export default getUsers