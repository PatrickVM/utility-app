"use client";
import React, { useState } from "react";

const DisneyQuestions = [
  "What is the name of Mickey Mouse's pet dog?",
  "Which Disney princess has a tiger as a sidekick?",
  "What is the name of Cinderella's fairy godmother?",
  "In 'The Little Mermaid,' what does Ariel trade her voice for?",
  "What is the name of Simba's father in 'The Lion King'?",
  "Who is the villain in 'Beauty and the Beast'?",
  "Which Disney movie features a character named Buzz Lightyear?",
  "In 'Frozen,' what is the name of Elsa's sister?",
  "What kind of animal is Thumper in 'Bambi'?",
  "What is the name of Sleeping Beauty's prince?",
  "In 'Aladdin,' what is the name of the princess?",
  "Which Disney character is known for leaving a glass slipper at a royal ball?",
  "What is the name of the whale in 'Pinocchio'?",
  "Which Disney movie is set in the city of Zootopia?",
  "What does the Genie turn into in 'Aladdin' when he grants a wish?",
  "Who is Pumbaa's meerkat friend in 'The Lion King'?",
  "What is the name of the fairy in 'Peter Pan'?",
  "Which Disney princess has a chameleon as a sidekick?",
  "What is the name of the young deer in 'Bambi'?",
  "In 'Moana,' what is the name of Moana's pet rooster?",
  "Who is the captain of the East India Trading Company in 'Pirates of the Caribbean'?",
  "What is the name of Ariel's fish friend in 'The Little Mermaid'?",
  "Which Disney movie features a character named Mulan?",
  "What is the name of the villainous sea witch in 'The Little Mermaid'?",
  "In 'Cinderella,' what material is Cinderella's lost slipper made of?",
  "Who is the villain in 'The Little Mermaid'?",
  "What kind of animal is Dumbo?",
  "What is the name of the boy who owns Woody and Buzz in 'Toy Story'?",
  "In 'Snow White and the Seven Dwarfs,' how many dwarfs are there?",
  "What is the name of the dragon in 'Mulan'?",
  "Who is the owner of the enchanted rose in 'Beauty and the Beast'?",
  "In 'The Jungle Book,' what kind of animal is Baloo?",
  "What is the name of the horse in 'Tangled'?",
  "Who is the main antagonist in 'The Princess and the Frog'?",
  "In 'Alice in Wonderland,' what is the name of the cat?",
  "What is the name of the villainous lion in 'The Lion King'?",
  "Which Disney movie features a character named Nemo?",
  "What is the name of the villain in 'Pocahontas'?",
  "In 'Ratatouille,' what kind of animal is Remy?",
  "Who is the voice behind the character of Woody in 'Toy Story'?",
  "What is the name of Mulan's dragon sidekick?",
  "Which Disney princess is known for her long, magical hair?",
  "What is the name of the elephant in 'Dumbo'?",
  "Who is the villain in 'Hercules'?",
  "In 'Brave,' what is the name of Merida's horse?",
  "What is the name of the bird in 'The Little Mermaid' that is friends with Ariel?",
  "Who is the villain in 'Aladdin'?",
  "What is the name of Belle's father in 'Beauty and the Beast'?",
  "In 'Cinderella,' what is the name of the stepmother's cat?",
  "Who is the voice behind Elsa in 'Frozen'?",
  "What is the name of the magical nanny in 'Mary Poppins'?",
  "Which Disney movie features a character named Crush?",
];

const QuestionCard: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<string>("");

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * DisneyQuestions.length);
    setCurrentQuestion(DisneyQuestions[randomIndex]);
  };

  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        {/* <h2 className="card-title">Card title!</h2> */}
        <p>
          {currentQuestion || "Click the button for a Disney-themed question!"}
        </p>
        <div className="card-actions justify-end">
          <button className="btn" onClick={getRandomQuestion}>
            Get Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
