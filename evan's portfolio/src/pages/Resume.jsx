function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download="Evan's Resume.pdf">
        Download My Resume
      </a>
      <h2>Proficiencies</h2>
      <ul>
        
        <li>JavaScript</li>
        <li>React</li>

      </ul>
    </div>
  );
}

export default Resume;
