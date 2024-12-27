import React from 'react';
import About from './components/home_about/About.tsx';
import Intro from './components/home_intro/Intro.tsx';
import Recognitions from './components/home_recognitions/Recognitions.tsx';
import Navigation from './components/home_navigation/Navigation.tsx';

export const Home = () => {
    return (
        <>
            <Intro />
            <Navigation />
            <About />
            <Recognitions />
        </>
    );
}