import { post } from 'axios'

const addUser = async (data) => {
  return await post(`https://reqres.in/api/users`, data)
    .then(({ data }) => {

      const li = document.createElement('li')
      li.setAttribute('id', `user-${data.id}`)
      li.innerHTML = `
        <p><strong>${data.first_name} ${data.last_name}</strong></p>
        <p>${data.email}</p>
      `
      return li
      
    })
    .catch(err => err)
}

export default addUser