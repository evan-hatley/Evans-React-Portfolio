import headshot from '../assets/headshot.jpg';

const AboutMe = () => {
  
    return (
      <div className="about-me">
        <img src={headshot} alt="Me" />
        <p>
         Hi, my name name is Evan Hatley, and welcome to my page! I am 28 and living in Kansas City, hoping to break into the tech industry. I am interested in backend development.
        </p>
      </div>
    );
  };
  
  export default AboutMe;