import React from 'react';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import Text from './components/Text';
import Grid from './components/Grid';
import Contact from './components/Contact';
import MyPC from './components/mypc.jpg'
import Profile from './components/profile.jpg'
import ImageContainer from './components/ImageContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbo title={"About Me"} text={"Here's a little bit about myself..."}/>
      <Text title={"Who Am I?"} body={"I’m a young, aspiring web developer who values creative and intuitive software. As a previous retail employee, I have experience working different functional positions while building positive rapport with my team and our customers. I provide both technical skills and the necessary communication skills to bring ideas into marketable products."} img={<ImageContainer src={Profile}/>}/>
      <Text title={"My Hobbies"} body={"While coding is one of my biggest hobbies, I also possess many others. I love music. I played the violin for an extensive amount of time and dabble with piano. Many of my hobbies revolve around tech. I'm a custom PC enthusiast. I like to regularly update my PC with the lastest and greatest specs. I use these PCs to play games, which is my other big hobby"} img={<ImageContainer src={MyPC}/>}/>
      <Text title={"My Trajectory"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
      <Jumbo title={"Projects"} text={"Some of the projects I've made"}/>
      <Grid />
      <Jumbo title={"Contact Me"} text={"Interested?"}/>
      <Text title={"Phone"} body={"720-592-6680"}/>
      <Text title={"Email"} body={"davidkalina1999@gmail.com"}/>
      <Jumbo title={"Social Media"} text={"You can find me on these platforms"}/>
      <Contact />
    </div>
  );
}

export default App;
