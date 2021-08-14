const BASE_URL = "http://localhost:3001/api/users/login?include=user";

const login = async (credentialsObject) => {

  const context = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(credentialsObject)
  }

  const response = await fetch(BASE_URL, context)
  const responseBody = await response.json()
  console.log(responseBody)
  return responseBody

};

export { login };

