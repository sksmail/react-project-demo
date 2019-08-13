import React from 'react';
import {Route} from 'react-router';
//import { Route , Router } from 'react-router-dom';
import './App.css';
import Login from './screens/login/Login';
import About from './screens/About';
import Posts from './screens/Posts';
import Mypage from './screens/Mypage';
import Search from './screens/Search';
import LayoutScreen from './layout/LayoutScreen';




class App extends React.Component {
  render() {
    return (
      <div className="App" >
        
        <Route exact path="/" component={Login}/>
        <Route path="/main" component={LayoutScreen}/>
        <Route path="/about" component={About}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/mypage" component={Mypage}/>
        <Route path="/search" component={Search}/>
        
      </div>

    );
  }
}

export default App;
