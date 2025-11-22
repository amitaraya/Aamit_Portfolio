import React, { useState, useEffect } from 'react';
import './Home.css';
import { workTimelineData, studyTimelineData, moreInfo, techSkills, LanguagesIntrests } from '../medaData/MetaData';
import Header from '../compo/Header';
import Footer from '../compo/Footer';
import Card from '../compo/Card';
import Timeline from '../compo/TimeLine';
import CircularSpredCard from '../compo/CircularSpredCard';

const summaryText = (
  <p>
    <strong>Gen AI</strong> & <strong>Frontend Developer</strong> with 6 years of software development experience, specializing in building intelligent applications that combine React frontend expertise with cutting-edge Generative AI solutions. Demonstrated success at NEC Software Solutions and Comviva delivering AI-powered products using LLMs, prompt engineering, and modern frameworks. Proven track record of designing scalable, user-friendly applications, optimizing performance, and delivering high-impact solutions through seamless integration of React, TypeScript, and GenAI technologies.
    <br /><br />
    With <strong>6 years</strong> of experience, I have a proven track record of delivering
    high-quality, responsive, & scalable solutions.
  </p>
);

const heroTexts = [
  "Hi, I am Amit Kumar Araya...",
  "I am a Gen AI Developer",
  "I am a UI Developer experienced with React"
];

// Custom hook for typing + deleting animation
function useTypewriter(words, typingSpeed = 80, deletingSpeed = 40, pauseTime = 1200) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex(i => (i + 1) % words.length);
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [words, wordIndex, charIndex, isDeleting, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}

// New FloatingParticles component for particle divs
// function FloatingParticles({ count = 50 }) {
//   const particles = Array.from({ length: count }).map(() => ({
//     top: Math.random() * 100 + 'vh',
//     left: Math.random() * 100 + 'vw',
//     animationDuration: `${15 + Math.random() * 15}s`,  // Slower, between 15s and 30s
//     animationDelay: `${Math.random() * 10}s`
//   }));

//   return (
//     <div className="particles">
//       {particles.map((style, index) => (
//         <div key={index} className="particle" style={style} />
//       ))}
//     </div>
//   );
// }


function FloatingParticles({ count = 50 }) {
  const particles = Array.from({ length: count }).map(() => ({
    top: '100vh',  // start all at bottom of viewport
    left: Math.random() * 100 + 'vw',
    animationDuration: `${20 + Math.random() * 20}s`,  // slower float up (20-40s)
    animationDelay: `${Math.random() * 20}s`
  }));

  return (
    <div className="particles">
      {particles.map((style, index) => (
        <div key={index} className="particle" style={style} />
      ))}
    </div>
  );
}


function Home() {
  const [cardSummary] = useState(summaryText);
  const [isVisible, setIsVisible] = useState(false);
  const animatedHeroText = useTypewriter(heroTexts);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="app">
      <FloatingParticles count={50} />
      <Header />
      <main className="main-container">
        <section className={`hero-section ${isVisible ? 'visible' : ''}`}>
          <div className="hero-title-wrapper">
            <h1 className="hero-title">
              <span className="typed-text">{animatedHeroText}</span>
              <span className="caret"></span>
            </h1>
          </div>

          <br />
          <div className="main-buttons">
            <button>Generative AI</button>
            <button>Web Dev</button>
            <button>Frontend Developer</button>
          </div>
          <div className="circular-wrapper">
            <CircularSpredCard cardSectionName="Tech Stack" />
          </div>
        </section>

        <Card cardSummary={cardSummary} index={0} />

        <section className="timeline-section">
          <h2>Timeline</h2>
          <div className="timelines-container">
            <Timeline type="study" timelineData={studyTimelineData} />
            <Timeline type="work" timelineData={workTimelineData} />
          </div>
        </section>

        <Card
          cardSectionName="More Info..."
          cardSummary={
            <ul className="custom-info-list">
              {moreInfo.map((item, index) => (
                <li key={index}>{item.content}</li>
              ))}
            </ul>
          }
          index={1}
        />

        <Card
          cardSectionName="Language | Interests | Others"
          cardSummary={LanguagesIntrests.map((item, index) => (
            <p key={index}>{item.content}</p>
          ))}
          index={3}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
