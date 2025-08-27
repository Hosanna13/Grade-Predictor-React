'use client';
import Image from "next/image";
import React from "react";
import { useState } from "react";
import './globals.css'

export default function Home() {
  const questions = [
    'I always preview the material that will be discussed before I go to class.',
    'I go over my lecture notes as soon as possible after lecture to rework them and note problem areas.',
    'I try to do my homework without using example problems as a guide or copying answers from my class notes or textbook.',
    'I regularly go to office hours or tutoring to discuss problems or questions about the homework.',
    'I rework all of the homework problems and questions before the test or quiz.',
    'I spend some time studying for this class at least five days per week outside of class.',
    'I make mnemonics for myself to help me remember facts and equations.',
    'I make diagrams or draw mental pictures of the concepts discussed in class.',
    'I participate in a study group where we do homework and quiz ourselves on the material.',
    'I rework all of the quiz and test items I have missed before the next class session.',
    'I realize that I can still do well in this class even if I have done poorly on the quizzes and tests up to this point.'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState('');
  const [started, getStarted] = useState(false);

  const displayResult = (s: number) => {
    if (s <= 2) return 'F';
    if (s <= 4) return 'D';
    if (s <= 6) return 'C';
    if (s <= 8) return 'B';
    return 'A';
  }

  const answerQuestion = (response: 'yes' | 'no') => {
    const add = response === 'yes' ? 1 : 0;
    const newScore = score + add;


    console.log("new score: " + newScore);
    console.log("current index: " + currentIndex);
    console.log("questions length: " + questions.length);

    if (currentIndex >= questions.length ) {
      if (response === 'yes') {
        setScore(newScore);
        setResult(displayResult(newScore));
      }

      setCurrentIndex(currentIndex + 1);

    } 
    else {
      setScore(newScore);
      setCurrentIndex(currentIndex + 1);
    }
    
  }

  const startQuiz = () => {
    getStarted(true);
    setCurrentIndex(1);
    setScore(0);
    setResult('');
  }

  return (
    <div className="container">
      <div className="heading">
          <h1> Grade Predictor</h1>
          <h2 > Let's Predict Your Grade</h2>
          { !started ? (
            <button className="button" onClick={startQuiz}>
              <span className="button-link"> Predict Now</span>
            </button>
          ) :
          result ? ( 
            <div> Your predicred grade: {result}</div>
          ) : (
            <div>
              <div>{questions[currentIndex]} </div>
              <button onClick={() => answerQuestion('yes')} className="button">Yes</button>
              <button onClick={() => answerQuestion('no')} className="button">No</button>
            </div>
          )}
      </div>
    </div>
  );
}
