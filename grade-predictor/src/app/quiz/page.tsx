'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import './page.css';
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
        goNext(1);
    };
    const handleNoClick = () => {
        console.log('No clicked');
        goNext(0);
    };

    const handleResetClick = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setScoreLetter('');
        setFinished(false);
    };

    const goNext = (scoreDet: number) => {
        const nextIndex = currentQuestionIndex + 1;
        const nextScore = score + scoreDet;

        setScore(nextScore);
        handleScore(nextScore);

        if (nextIndex >= questions.length) {
            setFinished(true);
        }
        else {
            setCurrentQuestionIndex(nextIndex);
        }
    };

    const handleSkip = () => {
        const nextIndex = currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextIndex);

        if (nextIndex >= questions.length) {
            setFinished(true);
        }
        else setCurrentQuestionIndex(nextIndex);
    };
    const handleBack = () => {
        setCurrentQuestionIndex((i) => Math.max(i - 1, 0));
    };

    return (
        <div className='quiz-container'>
            <div className="progress-bar">
                <span className="progress-label"> 📚 Study Habits Check-in</span>
                <span className='progress-count'>  {currentQuestionIndex + 1} of 11 </span>
                <div className="progress-track">
                    <div
                        className="progress-fill"
                        style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
                    >
                    </div>
                </div>
            </div>
            
            <div className="question-container">

                {!isFinished ? (
                    // Display current question
                    <>
                        <div className="q-container">
                            <p className='question-prefix'>QUESTION {currentQuestionIndex + 1}</p>
                            <h1 className='question-text'>{questions[currentQuestionIndex]}</h1>
                            <p className='question-hint'> Think about your usual study routine</p>
                        </div>

                        <div className='button-container'>
                            <button className="yes-button" onClick={handleYesClick}>Yes</button>
                            <button className="no-button" onClick={handleNoClick}>No</button>
                        </div>
                    </>
                ) : (
                    // Display results
                    <div className='q-container'>
                        <>
                            <p className='result-text'> Predicted Grade: {scoreLetter} </p> 
                            <button className="rest-button" onClick={handleResetClick}>Retake Quiz</button>
                            <Link href="/">
                                <button className="home-btn">Go Home</button>
                            </Link>
                        </>
                    </div>
                )}

                </div>
            {!isFinished ? (
            <>
                <div className="skip-return-container">
                    {currentQuestionIndex > 0 && (
                        <button className="back-button" onClick={handleBack}>
                            ← Back
                        </button>
                    )}
                <div className="skip-button-container">
                    <button className="skip-button" onClick={handleSkip}>
                        Skip Question
                    </button>
                </div>
            </div>
            </>
            ):(<>
            </>)}
        </div>
    )
}