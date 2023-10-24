import React, { useState, useEffect, useMemo } from 'react';

function About() {
  const [text, setText] = useState('');
  const [showAbout, setShowAbout] = useState(false);

  const sentences = useMemo(() => ["a software developer.", "an artist.", ".NET developer."], []);
  const [currentSentence, setCurrentSentence] = useState(0);

  useEffect(() => {
    let timer;

    if (showAbout && currentSentence < sentences.length) {
      timer = setTimeout(() => {
        setText(prevText => "Hey! I am " + sentences[currentSentence].substring(0, prevText.length + 1));
      }, 1000);
    } else {
      setCurrentSentence(0);
      setText('');
    }

    return () => clearTimeout(timer);
  }, [showAbout, text, currentSentence, sentences]);

  useEffect(() => {
    if (text === "Hey! I am " + sentences[currentSentence]) {
      const nextSentence = (currentSentence + 1) % sentences.length;
      setCurrentSentence(nextSentence);
    }
  }, [text, currentSentence, sentences]);

  return (
    <div>
      <button onClick={() => setShowAbout(!showAbout)}>
        {showAbout ? 'Neh not now, later!' : 'Introduction'}
      </button>
      {showAbout && (
        <div>
          <h2>Introduction</h2>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

export default About;
