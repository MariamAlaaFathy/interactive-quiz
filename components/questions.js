// const quizQuestions = [
//     { question: "How many dots appear on a pair of dice?", answer: "42", option2: "20", option3: "44", option4: "56"},
//     { question: "What is acrophobia a fear of?", answer: "Heights", option2:"Spiders", option3:"Darkness", option4:"Snakes"},
//     { question: "What is the world’s largest retailer?", answer: "Walmart", option2:"Carrefour", option3:"Apple Stores", option4:"Target"},
//     { question: "How many stars are on the Chinese flag?", option2:"6", answer: "5", option3:"0", option4:"20"},
//     { question: "Which planet has the most moons?", answer: "Saturn" , option2:"Earth", option3:"jupiter", option4:"Pluto"},
//     { question: "Which country is credited with inventing ice cream?",option3: "Argentina" , option4:"Australia" , answer: "China", option2: "Croatia"},
//     { question: "In which country was Elon Musk born?", option2:"Australia", option3:"United States", option4:"Poland" , answer: "South Africa"},
//     { question: "What is a group of crows called?", option2:"A herd", answer: "A murder", option4: "A band", option3:"A caravan" },
//     { question: "What animal has the longest tongue?", answer: "Giraffe" , option2:"Frog", option3:"Chameleon", option4:"Anteater"},
//     { question: "Who was the first Disney princess?", option2:"Cinderella", option4: "The little mermaid" , option3:"The sleeping beauty" ,answer: "Snow White"}
//   ];
  
//   function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }
  
//   const shuffledQuestions = shuffle(quizQuestions);
  
//   let currentIndex = 0;
  
//   function displayQuestion() {
//     const questionElement = document.getElementById('question');
//     if (currentIndex < shuffledQuestions.length) {
//       questionElement.textContent = shuffledQuestions[currentIndex].question;
//     } else {
//       questionElement.textContent = "Quiz Complete!";
//       document.getElementById('next-button').style.display = "none";
//     }
//   }
  
//   document.getElementById('next-button').addEventListener('click', () => {
//     currentIndex++;
//     displayQuestion();
//   });
  
//   displayQuestion();

const quizQuestions = [
  { question: "How many dots appear on a pair of dice?", answer: "42", option2: "20", option3: "44", option4: "56" },
  { question: "What is acrophobia a fear of?", answer: "Heights", option2: "Spiders", option3: "Darkness", option4: "Snakes" },
  { question: "What is the world’s largest retailer?", answer: "Walmart", option2: "Carrefour", option3: "Apple Stores", option4: "Target" },
  { question: "How many stars are on the Chinese flag?", option2: "6", answer: "5", option3: "0", option4: "20" },
  { question: "Which planet has the most moons?", answer: "Saturn", option2: "Earth", option3: "Jupiter", option4: "Pluto" },
  { question: "Which country is credited with inventing ice cream?", option3: "Argentina", option4: "Australia", answer: "China", option2: "Croatia" },
  { question: "In which country was Elon Musk born?", option2: "Australia", option3: "United States", option4: "Poland", answer: "South Africa" },
  { question: "What is a group of crows called?", option2: "A herd", answer: "A murder", option4: "A band", option3: "A caravan" },
  { question: "What animal has the longest tongue?", answer: "Giraffe", option2: "Frog", option3: "Chameleon", option4: "Anteater" },
  { question: "Who was the first Disney princess?", option2: "Cinderella", option4: "The Little Mermaid", option3: "Sleeping Beauty", answer: "Snow White" }
];

// Function to shuffle array elements
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledQuestions = shuffle(quizQuestions);
let currentIndex = 0; // Tracks the current question index
let score = 0; // Tracks the user's score

// Function to display the current question and options
function displayQuestion() {
  const questionElement = document.getElementById('question');
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = ""; // Clear previous options
// questionElement.style.color="white";
  if (currentIndex < shuffledQuestions.length) {
    const currentQuestion = shuffledQuestions[currentIndex];
    questionElement.textContent = currentQuestion.question;

    const options = [currentQuestion.answer, currentQuestion.option2, currentQuestion.option3, currentQuestion.option4];
    shuffle(options); // Shuffle the options for randomness

    options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('option-button');
      button.addEventListener('click', () => {
        // Highlight correct and incorrect answers
        if (option === currentQuestion.answer) {
          button.style.backgroundColor = "green"; // Correct answer in green
          score++;
        } else {
          button.style.backgroundColor = "red"; // Incorrect answer in red
          // Highlight the correct answer
          document.querySelectorAll('.option-button').forEach(btn => {
            if (btn.textContent === currentQuestion.answer) {
              btn.style.backgroundColor = "green";
            }
          });
        }
        // Disable all buttons after an answer is selected
        document.querySelectorAll('.option-button').forEach(btn => btn.disabled = true);
      });
      optionsContainer.appendChild(button);
    });
  } else {
    // Display final score when the quiz is complete
    questionElement.textContent = "Quiz Complete!";
    optionsContainer.innerHTML = `Your final score is: ${score}/${shuffledQuestions.length}`;
    document.getElementById('next-button').style.display = "none";
    document.getElementById('prev-button').style.display = "none";
  }
}

// Event listener for "Next Question" button
document.getElementById('next-button').addEventListener('click', () => {
  if (currentIndex < shuffledQuestions.length - 1) {
    currentIndex++;
    displayQuestion();
  }
});

// Event listener for "Previous Question" button
document.getElementById('prev-button').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    displayQuestion();
  }
});

// Display the first question when the quiz starts
displayQuestion();
