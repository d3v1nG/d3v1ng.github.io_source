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
          <WhiteSpace noBreaks="5"></WhiteSpace>
            <ExperienceCard title="Student" content="Computer Science student at North Dakota State University with a focus on cyber security. Projected graduation: 2022" />
            <ExperienceCard title="Cyber Security Research" content="Heavily involved with NDSU's Cybersecurity Student Association." />
            <ExperienceCard title="Software Development" subtitle="Software Developent Intern" content="Employed at Rural Computer Consultants out of Bird Island, MN" />
          <WhiteSpace noBreaks="5"></WhiteSpace>
        </div>
        <div id="competitions">
        <WhiteSpace noBreaks="5"></WhiteSpace>
          <ExperienceCard title="Collegiate Penetration Testing Competition (CPTC) 2019" content="" />
          <ExperienceCard title="National Collegiate Cyber Defense Competition (CCDC) 2019/2020" content="" />
          <ExperienceCard title="Hivestorm 2019" content="" />
          <ExperienceCard title="National Cyber League" content="" />
        <WhiteSpace noBreaks="5"></WhiteSpace>
        </div>
        <div id="technical">
        </div>
        <div id="footer">
        </div>
      </div>
    );
  }
}

class ContactCard extends React.Component {
  render() {
    return (
    <div id="ContactCard">
      <img src={ProfilePic} height="200"></img>
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
      SubTitle: this.props.subtitle,
      Content: this.props.content,
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.Title}</h2>
        <h3>{this.state.SubTitle}</h3>
        <p>{this.state.Content}</p>
        <br/>
      </div>
    );
  }
}

export default Page;
