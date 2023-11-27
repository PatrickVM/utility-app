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
  "What's your favorite Disney character and why?",
  "If you could meet any Disney princess or hero, who would it be?",
  "What ride or attraction are you most excited to experience?",
  "Can you name all the Disney princesses?",
  "What's your favorite Disney song, and can you sing a few lines?",
  "If you could be a Disney character for a day, who would you choose?",
  "What's the tastiest Disney snack or treat you've had so far?",
  "What's your favorite Disney movie and why?",
  "If you could design your Disney-themed ride, what would it be like?",
  "What's your favorite part of the Disney parade?",
  "If you could spend a day in any Disney park around the world, where would you go?",
  "What's your favorite Disney memory from past visits?",
  "What Disney souvenir or merchandise would you love to take home?",
  "Which Disney ride or attraction do you want to ride again and again?",
  "What's the most magical moment you've experienced at Disney World?",
  "If you could dine with any Disney character, who would it be?",
  "What's the one thing you've learned about Disney history that surprised you?",
  "If you had a magic wand like a Disney fairy godmother, what would you wish for?",
  "What's your favorite land or section of the park?",
  "What's your plan for making the most of our day at Disney World?",
  "Which Disney character would you want as your travel buddy today?",
  "What's your all-time favorite Disney ride or attraction?",
  "If you could spend a day as a Disney character, who would you choose?",
  "What's the best Disney souvenir you've ever collected?",
  "What's your favorite Disney park snack or treat?",
  "Which Disney movie makes you feel the most nostalgic?",
  "If you could meet one Disney villain, who would it be?",
  "What's your favorite Disney song to sing along with?",
  "If you could design a new Disney ride, what theme would it have?",
  "Which Disney princess or hero do you admire most and why?",
  "What's the most magical moment you've experienced at Disney World?",
  "If you could visit any Disney park in the world, which one would you choose?",
  "What's the first Disney movie you remember watching as a child?",
  "If you could have dinner with any Disney character, who would it be?",
  "What's the funniest or silliest thing you've seen at Disney World?",
  "Which Disney park ride would you want to ride over and over again?",
  "If you could explore any Disney park after hours, which one would it be?",
  "What's your favorite land or section of Disney World?",
  "What's your Disney World must-do that you haven't done yet?",
  "If you could wish upon a Disney star, what would you wish for?",
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
