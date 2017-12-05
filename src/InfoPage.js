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
        <h2 className="margin-top">Prerequisites</h2>
        <hl>
          <li>Yarn or Npm</li>
          <li>Git</li>
          <li>Browser (preferably chrome)</li>
          <li>Optional: download <a target="_blank" href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en">react dev tools</a> from chrome plugins</li>
        </hl>

        <h2 className="margin-top">Before you can begin</h2>
        <p>Start your terminal and checkout the github repository.</p>
        <span className="code">git checkout https://github.com/backlnd/code-pub.git</span>
        <p>Move to the checked out directory.</p>
        <span className="code">cd code-pub</span>
        <p>Run the code to be able to view the website.</p>
        <span className="code">yarn start</span>
        <p className="inline">or</p>
        <span className="code">npm run start</span>

        <h2 className="margin-top">Let's begin</h2>
        <p>We will be following some of the instructions on this page: <a target="_blank" href="https://reactjs.org/tutorial/tutorial.html#getting-started">React Tutorial - Getting started</a></p>
      </div>
    );
  }
}

export default InfoPage;
