import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class HeaderScreen extends Component  {
    render() {
        return (
            <div className="header">
            <NavLink exact className="item" activeClassName="active" to="/main">Home</NavLink>
            <NavLink className="item" activeClassName="active" to="/about">소개</NavLink>
            <NavLink className="item" activeClassName="active" to="/posts">Posts</NavLink>
            <NavLink className="item" activeClassName="active" to="/mypage">Mypage</NavLink>
            <NavLink className="item" activeClassName="active" to="/search">Search</NavLink>
            <NavLink className="item" activeClassName="active" to="/">Login</NavLink>
        </div>
        );
      }
}
export default HeaderScreen;