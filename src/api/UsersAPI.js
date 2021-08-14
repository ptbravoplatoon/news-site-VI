const BASE_URL = 'http://localhost:3001/api/users';

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
  const data = await response.json();
  console.log(data)
  return data
}

export default {
  login: login
}
