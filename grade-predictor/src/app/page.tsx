import Image from "next/image";
'use client';
import React from "react";
import { useState } from "react";
import Link from "next/link";
import './globals.css'

export default function Home() {
  const handleClick = () => {
    console.log('Start Quiz button clicked');
  };
  return (
    <div className="home-container">
      <h1 className="welcome-header">
        Let's Predict Your Grade!
      </h1>
      <Link href="/quiz">
        <button className="start-quiz-button" onClick={handleClick}>
          Start Quiz
        </button>
      </Link>
    </div>
  );
}