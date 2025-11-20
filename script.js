// Carrega JSON e inicializa
fetch("./cards.json")
  .then((res) => res.json())
  .then((data) => startApp(data));

function startApp(deck) {
  const app = document.getElementById("app");
  let index = 0;

  function render() {
    const card = deck[index];
    app.innerHTML = `
      <div style="padding:20px;color:white;font-family:Arial">
        <h2>${card.question}</h2>
        <p id="answer" style="display:none">${card.answer}</p>
        <button onclick="document.getElementById('answer').style.display='block'">Mostrar Resposta</button>
        <!--  <button onclick="random()">Anterior</button> -->
        <button onclick="random()">Próximo Card</button>
      </div>
    `;
  }

  window.random = function () {
    index = Math.floor(Math.random() * deck.length);
    render();
  };

  window.next = function () {
    index = (index + 1) % deck.length;
    render();
  };

  window.prev = function () {
    index = (index - 1 + deck.length) % deck.length;
    render();
  };

  render();
}
