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
        <div className="featurecard"> <span className="icon"> ⏱️ </span><p className='icon-text'> Takes 5 minutes</p> </div>
        <div className="featurecard"> <span className="icon"> 🔒 </span><p className='icon-text'> 100% Anonymous</p></div>
        <div className="featurecard"> <span className='icon'> 📈 </span><p className='icon-text'> Access your Habits</p></div>
      </div>
      <footer className="footer">
        
        < div className='stats-section'>
          <span className="stats-line"></span>
          <div className="stats-statement"> INSPIRED BY SAUNDRA MCGUIRE'S BOOK
            <p className="stats-substatement"> "Teach Students How to Learn: How to Learn: Strategies You Can Use to Ace Any Course at Any Level" </p>
          </div>

            <div className="stat-contaier">
              <div className="stat">100+ 
                  <p className="stat-desc">Students assessed</p>
              </div>
              <div className="stat">85% 
                <p className="stat-desc">Accuracy rate</p>
              </div>
              <div className="stat"> 12
                <p className="stat-desc">Questions</p> 
              </div>
            </div>
        </div>
      </footer>

    </div>
  );
}