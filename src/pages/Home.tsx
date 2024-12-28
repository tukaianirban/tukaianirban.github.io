import React from 'react';
import About from './components/home_about/About.tsx';
import Intro from './components/home_intro/Intro.tsx';
import Recognitions from './components/home_recognitions/Recognitions.tsx';
import Navigation from './components/home_navigation/Navigation.tsx';
import Projects from './components/home_projects/projects.tsx';
import Footer from './components/footer/Footer.tsx';

export const Home = () => {
    return (
        <>
            <Intro />
            {/* <Navigation /> */}
            <Projects />
            <About />
            <Recognitions />
            <Footer />
        </>
    );
}