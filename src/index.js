import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import netlightLogo from './netlight.png';
import { Game } from './BoardGame';

console.log("Netlight", netlightLogo);

// ========================================

function Header() {
  return (
    <div className="header">
      <img src={netlightLogo} width="200" />
      <div style={{ fontSize: "50px" }}>Code Pub</div>
    </div>
  );
}

function Main() {
  return (
    <div className="main">
      <Header />
      <div className="content">
        <Game />
      </div>
    </div>
  );
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
