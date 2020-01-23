import React from 'react';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import Text from './components/Text';
import Grid from './components/Grid';
import Contact from './components/Contact';
import SkillSection from './components/SkillsSection';
import MyPC from './components/mypc.jpg'
import Profile from './components/profile.jpg'
import ImageContainer from './components/ImageContainer';
import Violin from './components/violin.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbo id={"about"} title={"About Me"} text={"Here's a little bit about myself..."}/>
      <Text title={"Who Am I?"} body={"I’m a young, aspiring web developer who values creative and intuitive software. As a previous retail employee, I have experience working different functional positions while building positive rapport with my team and our customers. I provide both technical skills and the necessary communication skills to bring ideas into marketable products."}/>
      <ImageContainer images={[Profile]} alignment={"flex-start"}/>
      {/* <ImageContainer src={Profile} alignment={"flex-start"}/> */}
      <Text title={"My Hobbies"} body={"While coding is one of my biggest hobbies, I also possess many others. I love music. I played the violin for an extensive amount of time and dabble with the piano. Many of my hobbies revolve around tech. I'm a custom PC enthusiast. I like to regularly update my PC with the lastest and greatest specs to play the most demanding games. A recent hobby of mine has been ping pong. My cohort buddy and I will take advantage of any moment we get to play an intense match of ping pong"}/>
      <ImageContainer images={[MyPC, Violin]} alignment={"space-between"}/>
      <Text title={"Skills"} img={<SkillSection skills={['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'MongoDB', 'Python', 'SQL', 'Express.js']}/>}/>
      
      <Jumbo id={"projects"} title={"Projects"} text={"Some of the projects I've made"}/>
      <Grid />
      <Jumbo id={"contact"} title={"Contact Me"} text={"Interested?"}/>
      <Contact />
    </div>
  );
}

export default App;
