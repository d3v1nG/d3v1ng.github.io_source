import React from 'react';
import "./page.css";
import ProfilePic from "./images/pp2.jpg";
import GitHubLogo from "./images/GitHub-Mark-Light-64px.png";

class Page extends React.Component {
  render() {
    return (
      <div id="page">
        <ContactCard />
        <div id="experience">
          <WhiteSpace noBreaks="10"></WhiteSpace>
            <ExperienceCard title="Student" content="" />
            <ExperienceCard title="Cyber Security Research" content="" />
            <ExperienceCard title="Software Development" content="" />
          <WhiteSpace noBreaks="10"></WhiteSpace>
        </div>
        <div id="competitions">
        <WhiteSpace noBreaks="10"></WhiteSpace>
          <ExperienceCard title="CPTC 2019" content="" />
          <ExperienceCard title="CCDC 2019/2020" content="" />
          <ExperienceCard title="NCL" content="" />
        <WhiteSpace noBreaks="10"></WhiteSpace>
        </div>
      </div>
    );
  }
}

class ContactCard extends React.Component {
  render() {
    return (
    <div id="ContactCard">
      <img src={ProfilePic}></img>
      <h1>Devin Gluesing</h1>
      <h3>North Dakota State University</h3>
      <h3>devingluesing@gmail.com</h3>
      <a href="https://github.com/d3v1nG"><img src={GitHubLogo}></img></a>
      <br/>
    </div>
    );
  }
}

const WhiteSpace = ({noBreaks} : {noBreaks: int}) => {
    var breaks = [];
    for (var i = 0; i < noBreaks; i++) {
      breaks.push(<br/>);
    }
    return (
      <div id="WhiteSpace">
        {breaks}
      </div>
    );
}

class ExperienceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Title: this.props.title,
      Content: this.props.content,
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.Title}</h2>
        <p>{this.state.Content}</p>
      </div>
    );
  }
}

export default Page;
