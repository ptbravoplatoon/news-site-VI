const BASE_URL = "http://localhost:3001/api/users/";

const login = async (credentialsObject) => {
  const requestEndpoint = `${BASE_URL}/login?include=user-${JSON.stringify(
    credentialsObject
  )}`;
  const requestInfo = {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(credentialsObject),
  };
  const response = await fetch(requestEndpoint, requestInfo);
  const data = await response.json();
  return data;
};

export { login };
