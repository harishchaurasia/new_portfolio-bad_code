// src/app/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Intro from '../components/Intro';

export default function Home() {
  const [showBugs, setShowBugs] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBugs(true);
    }, 5000); // 5 seconds delay for intro animation
  }, []);

  return (
    <div className="relative">
      {!showBugs && <Intro />}
      {/* Add other components for your portfolio here */}
    </div>
  );
}
