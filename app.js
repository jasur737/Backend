fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const container = document.getElementById("container")
    users.forEach((users) => {
      const card = document.createElement("div");
      card.className = "card"
      card.innerHTML = `
      <h2>Name: ${users.name}</h2>
      <h3>Username: ${users.username}</h3>
      <p>Email: ${users.email}</p>
      <P>Street: ${users.address.street}</P>
      <P>Phone: ${users.phone}</P>
      <a href="">Website: ${users.Website}</a>
      <P>Company: ${users.company.name}</P>
      `;
      container.appendChild(card);
    });
  });
//   .catch((error) => (console.error("Xatolik ", error))
//  )