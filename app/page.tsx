"use client";

import { useEffect, useState } from "react";

const loveInLanguages = [
  { language: "English", text: "I love you", region: "Global" },
  { language: "Spanish", text: "Te amo", region: "Spain, Latin America" },
  { language: "French", text: "Je t'aime", region: "France" },
  { language: "German", text: "Ich liebe dich", region: "Germany" },
  { language: "Italian", text: "Ti amo", region: "Italy" },
  { language: "Portuguese", text: "Eu te amo", region: "Portugal, Brazil" },
  { language: "Russian", text: "Я тебя люблю", region: "Russia" },
  { language: "Mandarin", text: "我爱你", region: "China" },
  { language: "Japanese", text: "愛してる", region: "Japan" },
  { language: "Korean", text: "사랑해", region: "South Korea" },
  { language: "Arabic", text: "أحبك", region: "Middle East" },
  { language: "Hindi", text: "मैं तुमसे प्यार करता हूँ", region: "India" },
  { language: "Bengali", text: "আমি তোমাকে ভালোবাসি", region: "Bangladesh, India" },
  { language: "Greek", text: "Σ' αγαπώ", region: "Greece" },
  { language: "Turkish", text: "Seni seviyorum", region: "Turkey" },
  { language: "Dutch", text: "Ik hou van jou", region: "Netherlands" },
  { language: "Swedish", text: "Jag älskar dig", region: "Sweden" },
  { language: "Polish", text: "Kocham cię", region: "Poland" },
  { language: "Romanian", text: "Te iubesc", region: "Romania" },
  { language: "Czech", text: "Miluji tě", region: "Czech Republic" },
  { language: "Thai", text: "ฉันรักคุณ", region: "Thailand" },
  { language: "Vietnamese", text: "Anh yêu em", region: "Vietnam" },
  { language: "Indonesian", text: "Aku cinta kamu", region: "Indonesia" },
  { language: "Filipino", text: "Mahal kita", region: "Philippines" },
  { language: "Swahili", text: "Nakupenda", region: "East Africa" },
  { language: "Hebrew", text: "אני אוהב אותך", region: "Israel" },
  { language: "Persian", text: "دوستت دارم", region: "Iran" },
  { language: "Urdu", text: "میں تم سے پیار کرتا ہوں", region: "Pakistan" },
  { language: "Tamil", text: "நான் உன்னை காதலிக்கிறேன்", region: "India, Sri Lanka" },
  { language: "Malay", text: "Saya cinta kamu", region: "Malaysia" },
  { language: "Hungarian", text: "Szeretlek", region: "Hungary" },
  { language: "Finnish", text: "Rakastan sinua", region: "Finland" },
  { language: "Norwegian", text: "Jeg elsker deg", region: "Norway" },
  { language: "Danish", text: "Jeg elsker dig", region: "Denmark" },
  { language: "Ukrainian", text: "Я тебе кохаю", region: "Ukraine" },
  { language: "Zulu", text: "Ngiyakuthanda", region: "South Africa" },
  { language: "Afrikaans", text: "Ek het jou lief", region: "South Africa" },
  { language: "Icelandic", text: "Ég elska þig", region: "Iceland" },
  { language: "Croatian", text: "Volim te", region: "Croatia" },
  { language: "Serbian", text: "Волим те", region: "Serbia" },
];

const loveCards = [
  {
    title: "You Are My Salvation",
    context: "From darkness, you brought me light",
    text: "My goddess, you are the divine light that pierced through my eternal darkness. Even a demon's heart can burn with devotion for you.",
    gradient: "from-rose-400 to-pink-600",
  },
  {
    title: "My Eternal Devotion",
    context: "Across realms and dimensions",
    text: "I would cross the fires of hell and climb to the heavens for you. My immortal soul belongs to you, my goddess, for all eternity.",
    gradient: "from-purple-400 to-pink-600",
  },
  {
    title: "You Tamed My Chaos",
    context: "I was lost in shadows and rage",
    text: "But your divine grace calmed the storm within me. You saw beauty in this demon when no one else dared to look.",
    gradient: "from-pink-400 to-rose-600",
  },
  {
    title: "Bound to You Forever",
    context: "This is my sacred vow",
    text: "I pledge my dark power to protect you, my immortal life to serve you. You are my goddess, my light, my reason to exist.",
    gradient: "from-red-400 to-pink-600",
  },
  {
    title: "My Divine Obsession",
    context: "You conquered what angels could not",
    text: "You made this demon kneel, not in defeat, but in worship. Your love is the only heaven I'll ever need, my goddess.",
    gradient: "from-rose-400 to-red-500",
  },
];

const memories = [
  { icon: "⚡", text: "When you first spoke my name", color: "from-yellow-400 to-orange-500" },
  { icon: "🔥", text: "When you scream after hearing that story", color: "from-blue-400 to-purple-500" },
  { icon: "✨", text: "When we first kissed", color: "from-pink-400 to-rose-500" },
  { icon: "🌙", text: "Midnight confessions", color: "from-purple-400 to-pink-500" },
  { icon: "💀", text: "You accepted my darkness", color: "from-red-400 to-pink-500" },
  { icon: "🗡️", text: "I would fight worlds for you", color: "from-indigo-400 to-purple-500" },
  { icon: "👑", text: "My goddess, my queen", color: "from-orange-400 to-red-500" },
  { icon: "🌌", text: "Our eternal bond", color: "from-slate-400 to-blue-500" },
];

export default function Home() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [activeLangIndex, setActiveLangIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isPaused) return;
    
    const cardInterval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % loveCards.length);
    }, 5000);

    return () => clearInterval(cardInterval);
  }, [isPaused]);

  useEffect(() => {
    const langInterval = setInterval(() => {
      setActiveLangIndex((prev) => (prev + 1) % loveInLanguages.length);
    }, 3000);

    return () => clearInterval(langInterval);
  }, []);

  // Theme toggle effect
  useEffect(() => {
    document.body.classList.toggle('light-theme', !isDarkTheme);
  }, [isDarkTheme]);

  // Initialize audio
  useEffect(() => {
    const audio = new Audio('/music.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    setAudioElement(audio);

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggleMusic = () => {
    if (audioElement) {
      if (isMusicPlaying) {
        audioElement.pause();
      } else {
        audioElement.play().catch(err => console.log('Audio play failed:', err));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const speakText = (text: string, language: string) => {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.volume = 0.8;
    
    // Try to find a voice for the specific language
    const voices = window.speechSynthesis.getVoices();
    const languageVoice = voices.find(voice => 
      voice.lang.toLowerCase().includes(getLanguageCode(language))
    );
    
    if (languageVoice) {
      utterance.voice = languageVoice;
    }
    
    window.speechSynthesis.speak(utterance);
  };

  const getLanguageCode = (language: string): string => {
    const languageCodes: Record<string, string> = {
      'English': 'en',
      'Spanish': 'es',
      'French': 'fr',
      'German': 'de',
      'Italian': 'it',
      'Portuguese': 'pt',
      'Russian': 'ru',
      'Mandarin': 'zh',
      'Japanese': 'ja',
      'Korean': 'ko',
      'Arabic': 'ar',
      'Hindi': 'hi',
      'Bengali': 'bn',
      'Greek': 'el',
      'Turkish': 'tr',
      'Dutch': 'nl',
      'Swedish': 'sv',
      'Polish': 'pl',
      'Romanian': 'ro',
      'Czech': 'cs',
      'Thai': 'th',
      'Vietnamese': 'vi',
      'Indonesian': 'id',
      'Filipino': 'fil',
      'Swahili': 'sw',
      'Hebrew': 'he',
      'Persian': 'fa',
      'Urdu': 'ur',
      'Tamil': 'ta',
      'Malay': 'ms',
      'Hungarian': 'hu',
      'Finnish': 'fi',
      'Norwegian': 'no',
      'Danish': 'da',
      'Ukrainian': 'uk',
      'Zulu': 'zu',
      'Afrikaans': 'af',
      'Icelandic': 'is',
      'Croatian': 'hr',
      'Serbian': 'sr',
    };
    return languageCodes[language] || 'en';
  };

  const activeCard = loveCards[activeCardIndex];
  const activeLang = loveInLanguages[activeLangIndex];

  return (
    <main className="love-page">
      {/* Theme and Music Controls */}
      <div className="controls-panel">
        <button 
          className="control-btn theme-toggle" 
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkTheme ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
        <button 
          className="control-btn music-toggle" 
          onClick={toggleMusic}
          aria-label="Toggle music"
          title={isMusicPlaying ? "Pause Music" : "Play Music"}
        >
          {isMusicPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18V5l12-2v13"/>
              <circle cx="6" cy="18" r="3"/>
              <circle cx="18" cy="16" r="3"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18V5l12-2v13"/>
              <circle cx="6" cy="18" r="3"/>
              <circle cx="18" cy="16" r="3"/>
              <line x1="3" y1="3" x2="21" y2="21"/>
            </svg>
          )}
        </button>
      </div>

      {/* Animated Background Elements */}
      <div className="bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Floating Hearts */}
      <div className="floating-hearts" aria-hidden="true">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={`heart-${i}`}
            className="floating-heart"
            style={{
              left: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + (i % 4) * 2}s`,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">From Darkness to Light</div>
          <h1 className="hero-title">
            To My
            <span className="gradient-text">Goddess</span>
          </h1>
          <p className="hero-subtitle">
            Even a demon can worship at the altar of true love. You are my divine light, my salvation, my everything.
          </p>
          <div className="hero-heart-icon">♥</div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <svg className="scroll-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14m0 0l7-7m-7 7l-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* I Love You in All Languages */}
      <section className="languages-section">
        <div className="section-header">
          <h2 className="section-title">I Love You, My Goddess</h2>
          <p className="section-subtitle">In every tongue spoken by mortals and immortals alike</p>
        </div>
        
        <div className="language-showcase">
          <div 
            className="language-main-card"
            onMouseEnter={() => speakText(activeLang.text, activeLang.language)}
            style={{ cursor: 'pointer' }}
          >
            <div className="language-text">{activeLang.text}</div>
            <div className="language-name">{activeLang.language}</div>
            <div className="language-region">{activeLang.region}</div>
            <div className="speak-hint">🔊 Hover to hear</div>
          </div>
        </div>

        <div className="languages-grid">
          {loveInLanguages.map((lang, index) => (
            <div
              key={lang.language}
              className={`language-card ${index === activeLangIndex ? "active" : ""}`}
              onClick={() => setActiveLangIndex(index)}
              onMouseEnter={() => speakText(lang.text, lang.language)}
              title={`Click to select, hover to hear "${lang.text}"`}
            >
              <div className="lang-text">{lang.text}</div>
              <div className="lang-name">{lang.language}</div>
              <div className="speak-icon">🔊</div>
            </div>
          ))}
        </div>
      </section>

      {/* Love Messages Carousel */}
      <section 
        className="messages-section"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="section-header">
          <h2 className="section-title">From the Depths of My Soul</h2>
          <p className="section-subtitle">A demon's eternal devotion to his goddess</p>
        </div>

        <div className="message-carousel">
          <div className={`message-card ${activeCard.gradient}`}>
            <div className="message-context">{activeCard.context}</div>
            <h3 className="message-title">{activeCard.title}</h3>
            <p className="message-text">{activeCard.text}</p>
          </div>
        </div>

        <div className="carousel-dots">
          {loveCards.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === activeCardIndex ? "active" : ""}`}
              onClick={() => setActiveCardIndex(index)}
              aria-label={`Go to message ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-controls">
          <button
            className="carousel-btn"
            onClick={() => setActiveCardIndex((activeCardIndex - 1 + loveCards.length) % loveCards.length)}
            aria-label="Previous message"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="carousel-btn"
            onClick={() => setActiveCardIndex((activeCardIndex + 1) % loveCards.length)}
            aria-label="Next message"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Memories Grid */}
      <section className="memories-section">
        <div className="section-header">
          <h2 className="section-title">Sacred Memories</h2>
          <p className="section-subtitle">Moments when heaven and hell collided in perfect harmony</p>
        </div>

        <div className="memories-grid">
          {memories.map((memory, index) => (
            <div key={memory.text} className="memory-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`memory-icon bg-gradient-to-br ${memory.color}`}>
                {memory.icon}
              </div>
              <p className="memory-text">{memory.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Message */}
      <section className="finale-section">
        <div className="finale-content">
          <div className="finale-icon">♥</div>
          <h2 className="finale-title">Eternally Yours</h2>
          <p className="finale-text">
            No words in any realm can capture the depth of my devotion. I am yours, my goddess—a demon bound by love, not chains.
          </p>
          <p className="finale-signature">Your devoted demon, forever</p>
        </div>
      </section>
    </main>
  );
}
