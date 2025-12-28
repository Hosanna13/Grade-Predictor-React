import Image from "next/image";
'use client';
import React from "react";
import { useState } from "react";
import Link from "next/link";
import './quiz.css';

export default function Home() {
  const handleClick = () => {
    console.log('Start Quiz button clicked');
  };
  return (
    <div className="home-container">
    <div className='hero'>
      <h1 className="welcome-header">
        Let's Predict Your <span className="grade">Grade!</span>
      </h1>
      <p className="welcome-subheader">
        Take our quick quiz to find out how your study habits could impact your academic performance.
      </p>
      <Link href="/quiz">
        <button className="start-btn" onClick={handleClick}>
          Start Quiz 🚀
        </button>
      </Link>
      </div>
      <br />
      <div className="benefits-section">
        <li> <span className="icon">⏱️</span>Takes 5 minutes</li>
        <li> <span className="icon">🔒</span>100% Anonymous</li>
        <li> <span className='icon'>📈</span> Access your Habits</li>
      </div>
      <footer className="footer">
        <h1 className="stat">100+ </h1>
        <p className="stat-desc">Students assessed</p>
        <h1 className="stat">85% </h1>
        <p className="stat-desc">Accuracy rate</p>
        <h1 className="stat"> 12 </h1>
        <p className="stat-desc">Questions</p>
      </footer>

    </div>
  );
}