import React, { useState, useEffect } from 'react';
import './App.css';
import track1 from './tracks/Stay Gold Final.wav';

function App() {
  const [bioText, setBioText] = useState('');
  const fullBio = "hi i'm layo! i produce a wide variety of tunes ranging from film scores, to video game tracks to remixes. if you're interested in anything below please reach out. thanks for visiting!";
  
  useEffect(() => {
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
    let currentIndex = 0;
    let glitchInterval;
    
    const revealText = () => {
      if (currentIndex < fullBio.length) {
        // Glitch effect - show random characters first
        let glitchCount = 0;
        glitchInterval = setInterval(() => {
          if (glitchCount < 3) {
            const glitched = fullBio.slice(0, currentIndex) + 
                           glitchChars[Math.floor(Math.random() * glitchChars.length)];
            setBioText(glitched);
            glitchCount++;
          } else {
            clearInterval(glitchInterval);
            setBioText(fullBio.slice(0, currentIndex + 1));
            currentIndex++;
            setTimeout(revealText, 1);
          }
        }, 50);
      }
    };
    
    const startDelay = setTimeout(() => {
      revealText();
    }, 1000);
    
    return () => {
      clearTimeout(startDelay);
      clearInterval(glitchInterval);
    };
  }, []);

  const tracks = [
    { id: 1, title: 'Ado Stay Gold - Remix', file: track1 },
    // { id: 2, title: 'Track Title 02', file: 'your-audio-file-2.mp3' },
    // { id: 3, title: 'Track Title 03', file: 'your-audio-file-3.mp3' }
  ];

  const videos = [
    { id: 1, title: 'Kiss Scene - In the Mood for Violence by Mario & Jose Zamarripa', vimeoId: '1135003073' },
    // { id: 2, title: 'Video Title 02', vimeoId: 'YOUR_VIDEO_ID_2' }
  ];

  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">layo</h1>
        <div className="subtitle">COMPOSER / PRODUCER</div>
      </header>
      
      <div className="container">
        <section className="section section-bio">
          <div className="bio-content">
            <p className="bio-text">
              {bioText}
            </p>
          </div>
        </section>
      </div>

      <div className="container">
        <section className="section section-1">
          <h2 className="section-heading">MUSIC</h2>
          
          {tracks.map(track => (
            <div key={track.id} className="music-item">
              <div className="item-title">{track.title}</div>
              <audio controls>
                <source src={track.file} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </section>

        <section className="section section-2">
          <h2 className="section-heading">VIDEO & FILM</h2>
          
          {videos.map(video => (
            <div key={video.id} className="video-item">
              <div className="item-title">{video.title}</div>
              <div className="video-wrapper">
                <iframe
                  src={`https://player.vimeo.com/video/${video.vimeoId}`}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                />
              </div>
            </div>
          ))}
        </section>

        <section className="section section-3">
          <h2 className="section-heading">CONTACT</h2>
          <p className="contact-text">
            <a href="mailto:your.email@example.com" className="contact-link">
              layomakes@gmail.com
            </a>
          </p>
        </section>
      </div>

      <footer className="footer">
        © layosinventory.com
      </footer>
    </div>
  );
}

export default App;