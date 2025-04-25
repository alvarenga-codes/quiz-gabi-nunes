// Array de perguntas e opções
const questions = [
  {
    question: "Quando você tem um evento importante, como escolhe o look?",
    options: [
      "Algo com cortes modernos e peças marcantes", // A: Dramático
      "Prefiro roupas clássicas e bem estruturadas", // B: Clássico
      "Um vestido delicado, com babados ou rendas", // C: Romântico
      "Algo confortável, mas arrumadinho", // D: Casual
      "Peças que valorizam meu corpo e transmitem sensualidade", // E: Sexy
      "Escolho algo criativo e diferente, que fuja do óbvio", // F: Criativo
      "Roupas com tecidos sofisticados e acabamento impecável" // G: Elegante
    ]
  },
  {
    question: "Qual calçado melhor te representa?",
    options: [
      "Coturno preto",
      "Sandália salto bloco nude",
      "Sapatilha bico fino",
      "Tênis casual",
      "Sandália de tiras finas e salto alto",
      "Sapato metalizado ou colorido",
      "Scarpin alto e com bom acabamento"
    ]
  },
  {
    question: "Em relação à maquiagem, você prefere:",
    options: [
      "Um olho esfumado ou um batom marcante",
      "Maquiagem leve e discreta",
      "Blush rosado e um visual feminino",
      "Praticidade: BB cream e rímel são suficientes",
      "Pele iluminada e boca destacada",
      "Algo criativo, como delineado colorido ou batom diferente",
      "Um visual impecável e bem finalizado"
    ]
  },
  {
    question: "Qual peça não pode faltar no seu guarda-roupa?",
    options: [
      "Vestido midi estruturado preto",
      "Camisa de alfaiataria",
      "Saia rodada ou vestido romântico",
      "Calça jeans confortável",
      "Vestido justo ou decotado",
      "Kimono estampado ou peça vintage",
      "Terninho ou vestido midi elegante"
    ]
  },
  {
    question: "O que você mais valoriza na hora de se vestir?",
    options: [
      "Impacto e originalidade",
      "Atemporalidade e elegância",
      "Delicadeza e feminilidade",
      "Conforto e praticidade",
      "Sensualidade e poder",
      "Criatividade e autenticidade",
      "Sofisticação e harmonia"
    ]
  },
  {
    question: "Qual dessas frases mais te representa?",
    options: [
      "“Adoro impactar e surpreender”",
      "“Menos é mais”",
      "“Amo detalhes delicados”",
      "“Gosto de me sentir livre e confortável”",
      "“Quero me sentir poderosa”",
      "“Me visto com ousadia e alegria”",
      "“Busco sempre parecer elegante e refinada”"
    ]
  },
  {
    question: "O que você admira no look de uma mulher?",
    options: [
      "Comunicação mais impactante e moderna",
      "Refinamento e atemporalidade",
      "Delicadeza e doçura",
      "Jovialidade e despojamento",
      "Sensualidade e feminilidade",
      "Alegria e dinamismo",
      "Sofisticação e elegância"
    ]
  },
  {
    question: "Como você organiza seu guarda-roupa?",
    options: [
      "Por looks prontos para ocasiões",
      "Por cores neutras e clássicas",
      "Por categorias e peças delicadas",
      "Por praticidade e uso no dia a dia",
      "Por ocasiões em que quero me destacar",
      "Por estilo, humor ou inspiração",
      "Tudo bem organizado e coordenado"
    ]
  },
  {
    question: "Como você descreveria seu estilo com uma palavra?",
    options: [
      "Ousado",
      "Tradicional",
      "Delicado",
      "Básico",
      "Sensual",
      "Excêntrico",
      "Refinado"
    ]
  },
  {
    question: "Seu acessório preferido é:",
    options: [
      "Um maxi colar ou brinco statement",
      "Pérolas ou relógio clássico",
      "Laços, flores ou acessórios delicados",
      "Tênis ou mochila",
      "Brincos de argola ou salto alto",
      "Peças artesanais ou vintage",
      "Óculos escuros sofisticados"
    ]
  },
  {
    question: "Como você lida com tendências?",
    options: [
      "Amo e estou sempre testando as novas",
      "Só adoto se for algo que não sai de moda",
      "Uso se tiver um toque feminino",
      "Só se forem fáceis de adaptar à rotina",
      "Escolho as mais sensuais e ousadas",
      "Crio minhas próprias versões",
      "Prefiro clássicos, mas atualizados"
    ]
  },
  {
    question: "O que as pessoas costumam dizer sobre seu visual?",
    options: [
      "“Você sempre surpreende!”",
      "“Muito elegante!”",
      "“Tão meiga e feminina”",
      "“Bem prática e descontraída”",
      "“Uau, que mulherão!”",
      "“Você tem um estilo único”",
      "“Sempre tão chique!”"
    ]
  }
];

// Lógica do quiz
let currentQuestion = 0;
let answers = []; // Inicializar vazio, será limpo ao carregar a página
const styles = ["Dramático", "Clássico", "Romântico", "Casual", "Sexy", "Criativo", "Elegante"];
const questionElement = document.querySelector("#question");
const descriptionElement = document.querySelector("#description");
const optionsContainer = document.querySelector("#options");
const nextButton = document.querySelector("#nextQuestion");

function loadQuestion() {
  // Verificar se os elementos existem
  if (!questionElement || !descriptionElement || !optionsContainer) {
    console.error("Um ou mais elementos não foram encontrados: #question, #description ou #options");
    return;
  }

  const q = questions[currentQuestion];
  questionElement.innerText = `Pergunta ${currentQuestion + 1} de 12`;
  descriptionElement.innerText = q.question;
  optionsContainer.innerHTML = "";
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerText = option;
    btn.setAttribute("data-value", index);
    btn.addEventListener("click", () => {
      optionsContainer.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
      btn.classList.add("selected");
      nextButton.disabled = false;
    });
    optionsContainer.appendChild(btn);
  });
  //botão da última pergunta
  if (currentQuestion + 1 === 12) {
    nextButton.innerText = "Seu estilo pessoal é..."
  }
  const progressBar = document.querySelector(".progress-bar");
  if (progressBar) {
    progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  }
}

nextButton?.addEventListener("click", () => {
  const selectedOption = optionsContainer?.querySelector(".option.selected");
  if (selectedOption) {
    const value = parseInt(selectedOption.getAttribute("data-value"));
    answers.push(value);
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
      nextButton.disabled = true;
      optionsContainer.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
    } else {
      // Contar a predominância de cada estilo
      const styleCounts = answers.reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1;
        return acc;
      }, {});
      // Encontrar o estilo com mais respostas
      let maxCount = 0;
      let predominantStyle = 0;
      for (let i = 0; i < styles.length; i++) {
        const count = styleCounts[i] || 0;
        if (count > maxCount) {
          maxCount = count;
          predominantStyle = i;
        }
      }
      console.log("Contagem de estilos:", styleCounts);
      console.log("Estilo predominante:", styles[predominantStyle], "com", maxCount, "votos");
      localStorage.setItem("quizResult", styles[predominantStyle]);
      window.location.href = "result.html";
    }
  }
  document.querySelector("#question").scrollIntoView({behavior: "smooth", block: "start"});
});

// Garantir que o script só rode na página correta e limpar respostas antigas
if (document.querySelector("#question")) {
  document.addEventListener("DOMContentLoaded", () => {
    // Limpar respostas antigas do localStorage ao carregar a página
    localStorage.removeItem("quizAnswers");
    answers = []; // Garantir que o array comece vazio
    loadQuestion();
  });
}
