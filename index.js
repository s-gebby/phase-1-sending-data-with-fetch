// Add your code here
function submitData(name, email) {
  const formData = {
    name: name,
    email: email,
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configObj)
    .then((response) => response.json())
    .then((data) => {
      const id = data.id;
      document.body.innerHTML += id; // Append id to the DOM
    })
    .catch((error) => {
      console.error("Error:", error.message);
      document.body.innerHTML += error.message; // Append error message to the DOM
    });
}
