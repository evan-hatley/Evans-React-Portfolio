import headshot from '/headshot.jpg'

const AboutMe = () => {
  
    return (
      <div className="about-me">
        <h1>About Me</h1>
        <img src={headshot} width={720} height={720} alt="Me" />
        <p>
         Hi, my name name is Evan Hatley, and welcome to my page! I graduated from the University of Kansas in 2018 with a BA in Psychology as part of the Top 10% from my GPA. I am currently looking to transition to Web Development and the Tech Industry, learning through the KU Coding Bootcamp.
        </p>
      </div>
    );
  };
  
  export default AboutMe;