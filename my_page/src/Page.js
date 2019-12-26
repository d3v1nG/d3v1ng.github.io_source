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
          <ExperienceCard title="Student" content="" />
          <ExperienceCard title="Cyber Sequrity Research" content="" />
          <ExperienceCard title="Software Development" content="" />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
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
      <a href="https://github.com/d3v1nG"><img src={GitHubLogo} ></img></a>
      <br/>
    </div>
    );
  }
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
