const BASE_URL = 'http://localhost:3001/api/users'
const login_URL = BASE_URL + '/login?include=user'

const login = async (credentialsObject) => {
  const fetchObj = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(credentialsObject)
  }
  let response = await fetch(login_URL, fetchObj)
  let JSONresponse = await response.json()
  return JSONresponse
}

export default {
  login: login
}

// return fetch(BASE_URL, {
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   method: "POST",
//   body: JSON.stringify(articleObject)
// });