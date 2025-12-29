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
      <div className="bage"> <span className="bage-dot"></span> 5-minute assessment</div>
      <div className="header">
          <h1 className="welcome-header">
            Let's Predict Your <div> <span className="grade">Grade!</span>  </div>
          </h1>
          <p className="welcome-subheader">
            Take our quick quiz to find out how your study habits could impact your academic performance.
          </p>
      </div>
      <Link href="/quiz">
        <button className="start-btn" onClick={handleClick}>
          Start Quiz 🚀
        </button>
      </Link>
      </div>
      <br />
      <div className="benefits-section">
        <li> <span className="icon">⏱️</span> Takes 5 minutes</li>
        <li> <span className="icon">🔒</span> 100% Anonymous</li>
        <li> <span className='icon'>📈</span> Access your Habits</li>
      </div>
      <footer className="footer">
        < div className='stats-section'>
          <div className="stat">100+ 
              <p className="stat-desc">Students assessed</p>
          </div>
          <div className="stat">85% 
          <p className="stat-desc">Accuracy rate</p>
          </div>
          <div className="stat"> 12
          <p className="stat-desc">Questions</p> </div>
        </div>
      </footer>

    </div>
  );
}