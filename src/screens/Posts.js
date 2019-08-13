import React from 'react';
import BigText from '../components/BigText';
import HeaderScreen from '../layout/HeaderScreen';
import FooterScreen from '../layout/FooterScreen';

const Posts = () => {
    return (
        <div>
            <HeaderScreen className="header"></HeaderScreen>
            <BigText>Post</BigText>
            <FooterScreen className="footer"></FooterScreen>
        </div>
    );
};

export default Posts;
