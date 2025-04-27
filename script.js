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

//Pergunta de desempate, caso haja algum
const tiebreakerQuestion = [
  "Resposta Dramático", // (Dramático)
  "Resposta Clássico",   // (Clássico)
  "Resposta Romântico",  // (Romântico)
  "Resposta Casual",     // (Casual)
  "Resposta Sexy",       // (Sexy)
  "Resposta Criativo",   // (Criativo)
  "Resposta Elegante"    // (Elegante)
];

// Lógica do quiz
let currentQuestion = 0;
let answers = []; //Respostas
const styles = ["Dramático", "Clássico", "Romântico", "Casual", "Sexy", "Criativo", "Elegante"];
const questionElement = document.querySelector("#question");
const descriptionElement = document.querySelector("#description");
const optionsContainer = document.querySelector("#options");
const nextButton = document.querySelector("#nextQuestion");

// Verificar se há um desempate salvo no localStorage
let tiebreakerChoice = localStorage.getItem("tiebreakerChoice") ? parseInt(localStorage.getItem("tiebreakerChoice")) : null;

//Função de carregar questões
function loadQuestion() {
  //Código para controlar erro de carregamento
  if (!questionElement || !descriptionElement || !optionsContainer) {
    console.error("Um ou mais elementos não foram encontrados: #question, #description ou #options");
    return;
  }

  //carregamento
  const q = questions[currentQuestion];
  questionElement.innerText = `Pergunta ${currentQuestion + 1} de 12`;
  descriptionElement.innerText = q.question;
  optionsContainer.innerHTML = "";
  //criando opções
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
  if (currentQuestion + 1 === questions.length) {
    nextButton.innerText = "Seu estilo pessoal é..."
  }
  //Barra de progresso
  const progressBar = document.querySelector(".progress-bar");
  if (progressBar) {
    progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  }
}

//Função para empates
function loadTiebreakerQuestion(tiedStyles) {
  questionElement.innerText = "Pergunta de Desempate";
  descriptionElement.innerText = "Escolha o estilo que mais te representa:";
  optionsContainer.innerHTML = "";
  tiedStyles.forEach(index => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerText = tiebreakerQuestion[index];
    btn.setAttribute("data-value", index);
    btn.addEventListener("click", () => {
      optionsContainer.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
      btn.classList.add("selected");
      nextButton.disabled = false;
    });
    optionsContainer.appendChild(btn);
  });
  //Botão de resultado
  nextButton.innerText = "Seu estilo pessoal é...";
  //manter o progresso em 100%
  const progressBar = document.querySelector(".progress-bar");
  if (progressBar) {
    progressBar.style.width = "100%";
  }
}

//Evento do botão "próxima pergunta" e "Seu estilo é..."
nextButton?.addEventListener("click", () => {
  const selectedOption = optionsContainer?.querySelector(".option.selected");
  if (selectedOption) {
    const value = parseInt(selectedOption.getAttribute("data-value"));

    // Verificar se estamos na pergunta de desempate
    if (currentQuestion >= questions.length) {
      // Salvar a escolha do desempate no localStorage
      localStorage.setItem("tiebreakerChoice", value);
      localStorage.setItem("quizResult", styles[value]);
      window.location.href = "result.html";
      return;
    }

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

      // Encontrar o maior número de votos
      let maxCount = 0;
      let tiedStyles = [];
      for (let i = 0; i < styles.length; i++) {
        const count = styleCounts[i] || 0;
        if (count > maxCount) {
          maxCount = count;
          tiedStyles = [i];
        } else if (count === maxCount && count > 0) {
          tiedStyles.push(i);
        }
      }
      //Controle de lançamentos dos estilos no console
      console.log("Contagem de estilos:", styleCounts);
      console.log("Estilos empatados:", tiedStyles.map(index => styles[index]));

      // Verificar se há empate
      if (tiedStyles.length > 1) {
        // Há empate, carregar a pergunta de desempate
        loadTiebreakerQuestion(tiedStyles);
      } else {
        // Não há empate, salvar o resultado e redirecionar
        const predominantStyle = tiedStyles[0];
        //controle no console
        console.log("Estilo predominante:", styles[predominantStyle], "com", maxCount, "votos");
        localStorage.setItem("quizResult", styles[predominantStyle]);
        //Direcionar para o resultado
        window.location.href = "result.html";
      }
    }
  }
  //Ir para o ínício da tela após clicar no botão
  document.querySelector("#question").scrollIntoView({ behavior: "smooth", block: "start" });
});

// Garantir que o script só rode na página correta e limpar respostas antigas
if (document.querySelector("#question")) {
  document.addEventListener("DOMContentLoaded", () => {
    // Limpar respostas antigas do localStorage ao carregar a página
    //Necessário para evitar concatenar resultados e ter resultado inesperado
    localStorage.removeItem("quizAnswers");
    localStorage.removeItem("tiebreakerChoice"); // Limpar escolha de desempate
    answers = [];
    loadQuestion();
  });
}
