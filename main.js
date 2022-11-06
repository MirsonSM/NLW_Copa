function createGame(player1, player2, hour) {
  return `
  <li>
    <img src="assets/icon=${player1}.svg" alt="" />
    <strong>${hour}</strong>
    <img src="assets/icon=${player2}.svg" alt="" />
  </li>
  `
}

let delay = -0.4 // variavel para alterar o tempo do delay na função

function createCard(games, date, day) {
  delay = delay + 0.4 // Muda toda vez que a função é acionada.
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>`
}

document.querySelector("#cards").innerHTML =
  createCard(
    createGame("cameroon", "switzerland", "08:00") +
      createGame("brazil", "ghana", "19:00") +
      createGame("serbia", "portugal", "19:00"),
    "24/11",
    "sexta",
    "08:00"
  ) +
  createCard(
    createGame("serbia", "portugal", "19:00"),
    "24/11",
    "sexta",
    "08:00"
  ) +
  createCard()
    
