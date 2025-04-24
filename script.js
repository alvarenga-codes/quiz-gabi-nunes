const questions = [
  { question: "Qual dessas opções melhor descreve seu guarda-roupa?", options: ["Clássico", "Moderno", "Romântico", "Criativo", "Casual", "Elegante", "Esportivo"] },
  { question: "Que tipo de cores você prefere usar?", options: ["Neutras", "Vibrantes", "Pastel", "Escuras", "Metálicas", "Brancas", "Coloridas"] },
  { question: "Qual acessório você mais usa?", options: ["Bolsa clássica", "Óculos modernos", "Lenços", "Chapéu", "Tênis", "Joias", "Mochila"] },
  { question: "Como você descreve seu estilo no trabalho?", options: ["Formal", "Despojado", "Romântico", "Criativo", "Casual", "Elegante", "Esportivo"] },
  { question: "Que tipo de sapato você prefere?", options: ["Salto alto", "Sapatilha", "Bota", "Tênis", "Sandália", "Mocassim", "Rasteirinha"] },
  { question: "Qual é sua peça de roupa favorita?", options: ["Blazer", "Camiseta", "Vestido", "Calça jeans", "Saia", "Terno", "Jaqueta"] },
  { question: "Você prefere estampas ou lisos?", options: ["Lisos", "Florais", "Listras", "Poás", "Geométricos", "Animal print", "Mix"] },
  { question: "Como você se veste para um evento?", options: ["Clássico", "Moderno", "Romântico", "Criativo", "Casual", "Elegante", "Esportivo"] },
  { question: "Qual é sua estação favorita para se vestir?", options: ["Primavera", "Verão", "Outono", "Inverno", "Todas", "Nenhuma", "Depende"] },
  { question: "Você gosta de experimentar tendências?", options: ["Sempre", "Às vezes", "Raramente", "Nunca", "Depende", "Sim", "Não"] },
  { question: "Qual é seu tecido favorito?", options: ["Algodão", "Seda", "Jeans", "Lã", "Linho", "Couro", "Sintético"] },
  { question: "Como você define seu estilo pessoal?", options: ["Clássico", "Moderno", "Romântico", "Criativo", "Casual", "Elegante", "Esportivo"] }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.querySelector("h1");
const descriptionElement = document.querySelector("p");
const optionsContainer = document.querySelector(".options");
const nextButton = document.querySelector("#nextQuestion");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionElement.innerText = `Pergunta ${currentQuestion + 1} de 12`;
  descriptionElement.innerText = q.question;
  optionsContainer.innerHTML = "";
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerText = option;
    btn.setAttribute("data-value", index + 1);
    btn.addEventListener("click", () => {
      optionsContainer.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
      btn.classList.add("selected");
      nextButton.disabled = false;
    });
    optionsContainer.appendChild(btn);
  });
  document.querySelector(".progress-bar").style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
}

nextButton.addEventListener("click", () => {
  const selected = optionsContainer.querySelector(".option.selected");
  if (selected) {
    score += parseInt(selected.getAttribute("data-value"));
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    nextButton.disabled = true;
    optionsContainer.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
  } else {
    localStorage.setItem("quizScore", score);
    window.location.href = "result.html";
  }
});

loadQuestion();
