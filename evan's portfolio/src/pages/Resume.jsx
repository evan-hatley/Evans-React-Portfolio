function Resume() {
  return (
    <div className='resume'>
      <h1>My Resume</h1>
      <button><a href= '/resume.pdf' download="resume.pdf">
        Download My Resume Here
      </a></button>
      <h2>Technical Proficiencies</h2>
      <ul>
        
        <li>JavaScript</li>
        <li>React</li>

      </ul>
    </div>
  );
}

export default Resume;
