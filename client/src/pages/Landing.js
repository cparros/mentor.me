import React from 'react';
import WelcomeDiv from '../components/WelcomeDiv';
import LandingCircles from '../components/LandingCircles';
import styled from 'styled-components';

const Landing = () => {
  return (
    <div>
      <WelcomeDiv />
      <LandingCircles />
      <LandingSteps />
    </div>
  );
};

export default Landing;
