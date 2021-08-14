const BASE_URL = "http://localhost:3001/api/users/";

const login = async (credentialsObject) => {
  const endpoint = `${BASE_URL}/login?include=user-${JSON.stringify(
    credentialsObject
  )}`;
  const context = {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(credentialsObject),
  };
  return fetch(endpoint, context);
};

export { login };
