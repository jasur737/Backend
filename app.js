// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => {
//     const container = document.getElementById("container")
//     users.forEach((users) => {
//       const card = document.createElement("div");
//       card.className = "card"
//       card.innerHTML = `
//       <h2>Name: ${users.name}</h2>
//       <h3>Username: ${users.username}</h3>
//       <p>Email: ${users.email}</p>
//       <P>Street: ${users.address.street}</P>
//       <P>Phone: ${users.phone}</P>
//       <a href="">Website: ${users.Website}</a>
//       <P>Company: ${users.company.name}</P>
//       `;
//       container.appendChild(card);
//     });
//   });
//   .catch((error) => (console.error("Xatolik ", error))
//  )

// fetch('https://randomfox.ca/floof/')
//     .then(response => response.json())
//     .then(data => {
//       const container = document.getElementById("container")
//       container.innerHTML = `
//       <img src="${data.image}"/>
//       `
//     });

// fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
//     .then(response => response.json())
//     .then(data => {
//       const container = document.getElementById("container")
//       container.innerHTML=`
//       <div>quotes</div>
//       `
//     });


// fetch('https://api.openweathermap.org/data/2.5/weather?q=Urganch&apiKey=0531abe52cf332f55d4d3daad4f5cb44&units=metric&lang=uz')
// .then(response => response.json())
// .then(data => {
//   const container = document.getElementById("container")
//   container.innerHTML=`
//   <h1>${Math.round(data.main.temp) }</h1>
//   `
// })
// .catch(err => console.error(err));


const cities = [
  "Andijan",
  "Urgench",
  "Samarkand",
  "Bukhara",
  "Namangan",
  "Qashqadaryo",
  "Termiz",
  "Fergana",
  "Tashkent",
  "Navoi",
  "Sirdaryo",
  "Jizzakh",
  "Nukus",
];

Promise.all(
  cities.map((city) =>
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&apiKey=f0c1365f8acd2061652770ef4ce7a9ac&units=metric`
    ).then((response) => response.json())
  )
).then((data) => {
  const container = document.getElementById("container");
  const body = document.getElementById("body");

  data.forEach((reg) => {
    const content = document.createElement("div");
    content.className = "city";

    content.innerHTML = `
      <div class="info">
        <h1>${reg.name}</h1>
        <span class="status">${reg.weather[0].description}</span>
      </div>
      <div class="gradus">
      ${
        reg.clouds.all >= 30 ? `<img src="cloud.png"/>` : `<img src="sun.png"/>`
      }

      ${Math.round(reg.main.temp)}°C
      </div>

      <p class="wind">Wind: ${reg.wind.speed} m/s</p>
    `;

    container.appendChild(content);
  });

  console.log(data[0].weather[0].description);
});




