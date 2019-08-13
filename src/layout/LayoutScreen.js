/**
 * íë©´ êµ¬ì± ë ì´ìì íì´ì§
 */

import React, { Component } from 'react';
import HeaderScreen from './HeaderScreen';
import FooterScreen from './FooterScreen';
import SectionScreen from './SectionScreen';

class LayoutScreen extends Component {
  render() {
    return (
      <div>
          <HeaderScreen className="header"></HeaderScreen>
          <SectionScreen className="section"></SectionScreen>
          <FooterScreen className="footer"></FooterScreen>
      </div>
    );
  }
}

export default LayoutScreen;
