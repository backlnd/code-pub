import React from "react";
import './InfoPage.css';

class InfoPage extends React.Component {
  render() {
    return (
      <div className="InfoPage">
        <h1>Welcome to this Code Pub</h1>
        <p>This time we will learn how to create our very own React application.</p>
        <p>If you are already familiar with React developing there will be more
          complicated tasks for you to solve.
          But we will start with all the basics to get everyone started.</p>
        <h2>Prerequisites</h2>
        <hl>
          <li>Yarn or Npm</li>
          <li>Git</li>
          <li>Browser (preferably chrome)</li>
          <li>Optional: download react dev tools from chrome plugins</li>
        </hl>
        <h2>Before you can begin</h2>
        <p>Start your terminal and checkout the github repository.</p>
        <span className="code">git checkout xxx</span>
        <p>Move to the checked out directory.</p>
        <span className="code">cd code-pub</span>
        <p>Run the code to be able to view the website.</p>
        <span className="code">yarn start</span>
        <p className="inline">or</p>
        <span className="code">npm run start</span>
      </div>
    );
  }
}

export default InfoPage;
