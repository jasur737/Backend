fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((data) => {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    document.getElementById("user-name").textContent = `Username: ${data.username}`
    document.getElementById("phone-number").textContent = `Phone: ${data.phone}`
    document.getElementById("add").textContent = `Address: ${data.address.city}`
    name.textContent = `Name: ${data.name}`;
    email.textContent = `Email: ${data.email}`;
  });
//   .catch((error) => (console.error("Xatolik ", error))
//  )