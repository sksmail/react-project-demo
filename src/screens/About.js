import React from 'react';
import BigText from '../components/BigText';
import HeaderScreen from '../layout/HeaderScreen';
import FooterScreen from '../layout/FooterScreen';

const About = () => {
    return (
        <div>
            <HeaderScreen className="header"></HeaderScreen>
            <BigText>About</BigText>
            <FooterScreen className="footer"></FooterScreen>
        </div>
    );
};

export default About;