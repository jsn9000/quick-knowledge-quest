"use client";

import { useState } from "react";

export function KnowledgeQuestInterface() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const playStarWarsSound = () => {
    // Create a simple beep sound effect
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const handleSubjectClick = (subject: string) => {
    setSelectedSubject(subject);
    playStarWarsSound();
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      {/* Header Text */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          Learn about any one of the following subjects within the 2 minute countdown to earn Imperial credits to buy your way to safe passage across the Galaxy
        </h1>
      </div>

      {/* Subject Buttons */}
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 flex gap-8">
        {/* Rebel Symbol Button */}
        <button
          onClick={() => handleSubjectClick('rebel')}
          className="w-24 h-24 rounded-full bg-gray-100 hover:bg-gray-200 border-4 border-gray-300 hover:border-blue-500 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl overflow-hidden"
        >
          <img 
            src="/images/rebel-symbol.png" 
            alt="Rebel Alliance" 
            className="w-20 h-20 object-contain"
          />
        </button>

        {/* X-wing Symbol Button */}
        <button
          onClick={() => handleSubjectClick('xwing')}
          className="w-24 h-24 rounded-full bg-gray-100 hover:bg-gray-200 border-4 border-gray-300 hover:border-blue-500 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl overflow-hidden"
        >
          <img 
            src="/images/xwing-symbol.png" 
            alt="X-wing Fighter" 
            className="w-20 h-20 object-contain"
          />
        </button>

        {/* Mandalorian Helmet Button */}
        <button
          onClick={() => handleSubjectClick('mando')}
          className="w-24 h-24 rounded-full bg-gray-100 hover:bg-gray-200 border-4 border-gray-300 hover:border-blue-500 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl overflow-hidden"
        >
          <img 
            src="/images/mando-helmet.png" 
            alt="Mandalorian" 
            className="w-20 h-20 object-contain"
          />
        </button>
      </div>

      {/* Selected Subject Display */}
      {selectedSubject && (
        <div className="absolute top-60 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-lg text-gray-700">
            Selected: {selectedSubject === 'rebel' ? 'Rebel Alliance' : 
                      selectedSubject === 'xwing' ? 'X-wing Fighter' : 
                      selectedSubject === 'mando' ? 'Mandalorian' : 
                      'Unknown'} Subject
          </p>
        </div>
      )}

      {/* Background Images */}
      <div className="flex items-center justify-between px-8 h-full">
        {/* Millennium Falcon - Left Side */}
        <div className="max-w-lg">
          <img 
            src="/images/mfalcon.png" 
            alt="Millennium Falcon" 
            className="w-full h-auto max-w-md"
          />
        </div>
        
        {/* Boba Fett Helmet - Right Side */}
        <div className="max-w-sm">
          <img 
            src="/images/bobafett-hat.png" 
            alt="Boba Fett Helmet" 
            className="w-full h-auto max-w-xs"
          />
        </div>
      </div>
    </div>
  );
}
