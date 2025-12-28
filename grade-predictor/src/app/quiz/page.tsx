'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import '../quiz.css';
export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [scoreLetter, setScoreLetter] = useState('');
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
  const [isFinished, setFinished] = useState(false);

  // handle button click 
  const handleScore = (score: number) => {
        let letter = '';
        if (score <= 2){
            letter = 'F';
        }
        else if (score <= 3){
            letter = 'D';
        }
        else if (score <= 5){
            letter = 'C';
        }
        else if (score <= 8){
            letter = 'B';
        }
        else {
            letter = 'A';
        }
        setScoreLetter(letter);
        console.log('Current Score Letter: ' + letter);
  };
    const handleYesClick = () => {
        console.log('Yes clicked');
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setScore(score + 1);
        if (currentQuestionIndex === questions.length - 1) {
            setFinished(true);
            console.log('Quiz finished! Your score is: ' + score);
        }
        handleScore(score);
    };
    const handleNoClick = () => {
        console.log('No clicked');
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        if (currentQuestionIndex === questions.length - 1) {
            setFinished(true);
            console.log('Quiz finished! Your score is: ' + score);
        }
        handleScore(score);
    };

    const handleResetClick = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setScoreLetter('');
        setFinished(false);
    };

    return (
        <div className='quiz-container'>
            <span className="progress-label"> 📚 Study Habits Check-in</span>
            <div className="progress">
            {!isFinished ? (
                // Display current question
                <>
                    <span className='progress-count'> Question {currentQuestionIndex + 1} of 11 </span>
                    <h1 className='questions'>{questions[currentQuestionIndex]}</h1>
                    <p className='question-hint'> Think about your usual study routine</p>
                    <div className='button-container'>
                        <button className="button" onClick={handleYesClick}>Yes</button>
                        <button className="no-button" onClick={handleNoClick}>No</button>
                    </div>
                </>
            ) : (
                // Display results
                <>
                    <p>Your predicted grade is: {scoreLetter} </p> 
                    <button className="rest-button" onClick={handleResetClick}>Retake Quiz</button>
                    <Link href="/">
                        <button className="home-btn">Go Home</button>
                    </Link>
                </>
            )}
            </div>
        </div>
    )
}