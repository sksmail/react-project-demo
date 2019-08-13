import React from 'react';
import BigText from '../components/BigText';
import HeaderScreen from '../layout/HeaderScreen';
import FooterScreen from '../layout/FooterScreen';

const Search = () => {
    return (
        <div>
            <HeaderScreen className="header"></HeaderScreen>
            <BigText>Search</BigText>
            <FooterScreen className="footer"></FooterScreen>
        </div>
    );
};

export default Search;