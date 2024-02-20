function Portfolio() {
    
    return (
        <div className="portfolio">
              <h1>Check Out Some of My Projects</h1>
          <div>
            <h2>Career Canvas</h2>
            <img src="/career-canvas.jpg" width={720} height={500} alt="Career Canvas" />
            <button><a href="https://fierce-depths-59937-afaae183c587.herokuapp.com/login" target="_blank" rel="noopener noreferrer">Career Canvas</a></button>
            <button><a href="https://github.com/evan-hatley/Career-Canvas" target="_blank" rel="noopener noreferrer">GitHub</a></button>
          </div>
          
          <div>
            <h2>JATE Text Editor</h2>
            <img src="/JATE.jpg" width={720} height={500} alt="JATE" />
            <button><a href="https://thawing-plains-70108-316d8b1956e0.herokuapp.com/" target="_blank" rel="noopener noreferrer">JATE Text Editor</a></button>
            <button><a href="https://github.com/evan-hatley/PWA-Text-Editor" target="_blank" rel="noopener noreferrer">GitHub</a></button>
          </div>
        </div>
      );

}

export default Portfolio;