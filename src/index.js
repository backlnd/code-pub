import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import netlightLogo from './netlight.png';
import { Game } from './BoardGame';
import InfoPage from './InfoPage';

let activePage = "home";

function Header({ setActivePage }) {
  return (
    <div className="header">
      <button type="button" className="button info" onClick={() => setActivePage("info")}>i</button>
      <button type="button" className="button logo" onClick={() => setActivePage("home")}>
        <img src={netlightLogo} width="200" />
      </button>
      <div className="name">{`{ Write your name here }`}</div>
      <div className="code-pub">Code Pub</div>
    </div>
  );
}

function Footer() {
  return <div className="footer" />;
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.activePage = "home";
  }

  setActivePage(pageId) {
    this.activePage = pageId;
    this.forceUpdate();
  }

  render() {
    return (
      <div className="main">
        <Header setActivePage={this.setActivePage.bind(this)} />
        <div className="content">
          {this.activePage === "home" && <Game />}
          {this.activePage === "info" && <InfoPage />}
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
