import React from 'react'
import Nav from '../components/Nav'
import Landing from '../components/Landing';
import Events from '../components/Events';
import StudySpaces from '../components/StudySpaces';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Nav/>
      <Landing />
      <Events />
      <StudySpaces />
      <Footer />
    </>
  );
}

export default Home
