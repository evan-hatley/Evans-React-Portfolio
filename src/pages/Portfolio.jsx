function Portfolio() {
  return (
      <div className="portfolio">
          <h1>Check Out Some of My Projects</h1>
          <h2>Click on the titles for the GitHub links and the images for the deployed applications.</h2>
          <div>
              <a href="https://github.com/evan-hatley/Career-Canvas" target="_blank" rel="noopener noreferrer">
                <h2>Career Canvas</h2>
              </a>
              <a href="https://fierce-depths-59937-afaae183c587.herokuapp.com/login" target="_blank" rel="noopener noreferrer">
                  <img src="/career-canvas.jpg" width={720} height={500} alt="Career Canvas" />
              </a>
          </div>
          
          <div>
              <a href="https://github.com/evan-hatley/PWA-Text-Editor" target="_blank" rel="noopener noreferrer">
                <h2>JATE Text Editor</h2>
              </a>
              <a href="https://thawing-plains-70108-316d8b1956e0.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/JATE.jpg" width={720} height={500} alt="JATE" />
              </a>
          </div>
      </div>
  );
}

export default Portfolio;
