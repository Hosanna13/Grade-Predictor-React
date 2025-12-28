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
        Let's Predict Your Grade!
      </h1>
      <Link href="/quiz">
        <button className="button" onClick={handleClick}>
          Start Quiz
        </button>
      </Link>
      </div>
    </div>
  );
}