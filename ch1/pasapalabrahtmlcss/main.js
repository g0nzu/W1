//hola
let questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

let users = [
  {
    name: "Juan",
    points: 25,
  },
  {
    name: "Ana",
    points: 45,
  },
  {
    name: "Pedro",
    points: 10,
  },
];

let names = [
  "Adrián",
  "Agustín",
  "Alberto",
  "Alejandro",
  "Alexander",
  "Alexis",
  "Alonso",
  "Andrés Felipe",
  "Ángel",
  "Anthony",
  "Antonio",
  "Bautista",
  "Benicio",
  "Benjamín",
  "Carlos",
  "Carlos Alberto",
  "Carlos Eduardo",
  "Carlos Roberto",
  "César",
  "Cristóbal",
  "Daniel",
  "David",
  "Diego",
  "Dylan",
  "Eduardo",
  "Emiliano",
  "Emmanuel",
  "Enrique",
  "Erik",
  "Ernesto",
  "Ethan",
  "Fabián",
  "Facundo",
  "Felipe",
  "Félix",
  "Félix María",
  "Fernando",
  "Francisco",
  "Francisco Javier",
  "Gabriel",
  "Gaspar",
  "Gustavo Adolfo",
  "Hugo",
  "Ian",
  "Iker",
  "Isaac",
  "Jacob",
  "Javier",
  "Jayden",
  "Jeremy",
  "Jerónimo",
  "Jesús",
  "Jesús Antonio",
  "Jesús Víctor",
  "Joaquín",
  "Jorge",
  "Jorge  Alberto",
  "Jorge Luis",
  "José",
  "José Antonio",
  "José Daniel",
  "José David",
  "José Francisco",
  "José Gregorio",
  "José Luis",
  "José Manuel",
  "José Pablo",
  "Josué",
  "Juan",
  "Juan Ángel",
  "Juan Carlos",
  "Juan David",
  "Juan Esteban",
  "Juan Ignacio",
  "Juan José",
  "Juan Manuel",
  "Juan Pablo",
  "Juan Sebastián",
  "Julio",
  "Julio Cesar",
  "Justin",
  "Kevin",
  "Lautaro",
  "Liam",
  "Lian",
  "Lorenzo",
  "Lucas",
  "Luis",
  "Luis Alberto",
  "Luis Emilio",
  "Luis Fernando",
  "Manuel",
  "Manuel Antonio",
  "Marco Antonio",
  "Mario",
  "Martín",
  "Mateo",
  "Matías",
  "Maximiliano",
  "Maykel",
  "Miguel",
  "Miguel  ngel",
  "Nelson",
  "Noah",
  "Oscar",
  "Pablo",
  "Pedro",
  "Rafael",
  "Ramón",
  "Raúl",
  "Ricardo",
  "Rigoberto",
  "Roberto",
  "Rolando",
  "Samuel",
  "Samuel David",
  "Santiago",
  "Santino",
  "Santos",
  "Sebastián",
  "Thiago",
  "Thiago Benjamín",
  "Tomás",
  "Valentino",
  "Vicente",
  "Víctor",
  "Víctor Hugo",
];

const assignRandomName = () => {
  const randomIndex = Math.floor(Math.random() * names.length);
  userName = names[randomIndex];
};

const timer = document.querySelector(".countDown");
let skippedQuestions = [];
const end = document.querySelector(".endButton");
let progressBar = document.querySelector(".progressBar");
const input = document.querySelector(".answerInput");
const letters = document.querySelectorAll(".letters");
const submit = document.querySelector(".sendButton");
let actualQuestion = document.querySelector(".pregunta");
let message = document.querySelector(".message");
let intro = document.querySelector(".intro");
const nextButton = document.querySelector(".nextButton");
const startButton = document.querySelector(".startButton");
const toplaySkippeds = document.querySelector(".playSkippedQuestions");

toplaySkippeds.style.display = "none";

let actualIndex;
let userName = "";
let pointsCounter = 0;
let questionsEnded = false;
let correctCounter = 0;
let timeleft = 100;
let timeStarted = false;

const timerCount = () => {
  let downloadTimer = setInterval(() => {
    if (timeleft <= 0) {
      message.innerHTML = "Su tiempo ha finalizado!, ha terminado el juego.";
      clearInterval(downloadTimer);
      actualQuestion.innerHTML = "";
      letters.innerHTML = "";
      ranking();
    } else {
      timer.innerHTML = "&#x1F55B;" + timeleft;
    }
    timeleft -= 1;
  }, 1000);
};

let num = 0;

const startGame = () => {
  if (questions.length > 0 && num < questions.length) {
    actualQuestion.innerHTML = questions[num].question;
  }
  startButton.style.display = "none";
  if (timeStarted === false) {
    timerCount();
    timeStarted = true;
  }
  if (questions.every((question) => question.status === 4)) {
    if (skippedQuestions.length > 0) {
      submit.removeEventListener("click", check);
      submit.addEventListener("click", checkSkippeds);
      submit.style.display = "none";
      startButton.style.display = "none";
      startButton.style.display = "none";
      nextButton.style.display = "none";
      toplaySkippeds.style.display = "block";
      end.style.marginLeft = "50px";
    } else {
      ranking();
    }
  }
};

startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", function next() {
  message.innerHTML = "La dejamos para el siguiente turno!";
  letters[num].style.backgroundColor = "orange";
  questions[num].status = 4;
  skippedQuestions.push({
    letterIndex: num,
    question: questions[num].question,
    answer: questions[num].answer,
  });
  num++;
  startGame();
});

const check = () => {
  let currentAnswer = questions[num].answer;
  if (input.value.toLowerCase() === currentAnswer.toLowerCase()) {
    letters[num].style.backgroundColor = "green";
    input.value = "";
    message.innerHTML = "Correcto!, has obtenido 10 puntos.";
    questions[num].status = 4;
    pointsCounter += 10;
    num++;
    correctCounter++;
    progressBar.value += 1;
    startGame();
  } else {
    letters[num].style.backgroundColor = "red";
    message.innerHTML = "Incorrecto!" + ", la respuesta era: " + currentAnswer;
    questions[num].status = 4;
    num++;
    input.value = "";
    startGame();
  }
};

submit.addEventListener("click", check, console.log("halo"));

end.addEventListener("click", function end() {
  actualQuestion.innerHTML = "";
  timer.style.display = "none";
  toplaySkippeds.style.display = "none";
  ranking();
});

let num2 = 0;
let showButtons = false;

const showSkippedQuestions = () => {
  if (skippedQuestions.length > 0 && num2 < skippedQuestions.length) {
    actualQuestion.innerHTML = skippedQuestions[num2].question;
  }
  if (showButtons === false) {
    toplaySkippeds.style.display = "none";
    submit.style.display = "block";
    end.style.marginLeft = "auto";
    showButtons = true;
  }
  if (skippedQuestions.every((question) => question.status === 5)) {
    if (num2 >= skippedQuestions.length) {
      ranking();
    }
  }
};

toplaySkippeds.addEventListener("click", showSkippedQuestions);

const checkSkippeds = () => {
  if (skippedQuestions[num2] !== undefined) {
    actualIndex = skippedQuestions[num2].letterIndex;
  }
  currentAnswer = skippedQuestions[num2].answer;
  if (input.value.toLowerCase() === currentAnswer.toLowerCase()) {
    skippedQuestions[num2].status = 5;
    message.innerHTML = "Correcto!";
    letters[actualIndex].style.backgroundColor = "green";
    num2++;
    pointsCounter += 10;
    correctCounter++;
    progressBar.value += 1;
    input.value = "";
    showSkippedQuestions();
  } else {
    skippedQuestions[num2].status = 5;
    message.innerHTML = "Incorrecto!" + ", la respuesta era: " + currentAnswer;
    letters[actualIndex].style.backgroundColor = "red";
    num2++;
    input.value = "";
    showSkippedQuestions();
  }
};

const ranking = () => {
  assignRandomName();
  users.push({
    name: userName + "(Tu)",
    points: pointsCounter,
  });
  users.sort((a, b) => b.points - a.points);
  intro.innerHTML = "El juego ha finalizado!";
  actualQuestion.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    actualQuestion.style.setProperty("padding", "10px");
    actualQuestion.innerHTML += `${users[i].name}: ${users[i].points} puntos<br>`;
  }
};

