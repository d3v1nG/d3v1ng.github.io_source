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
          <h1 id="heading" background="#006080">Experience</h1>
            <ExperienceCard title="Student" content="Computer Science student at North Dakota State University with a focus on cyber security. Projected graduation: 2022" textbackground="darkblue" />
            <br/>
            <ExperienceCard title="Cyber Security" textbackground="cyberblue" subtitle="Heavily involved with NDSU's Cybersecurity Student Association." content="Participated in 4 team competitions including CCDC, CPTC, Hivestorm, and NCL" />
            <br/>
            <ExperienceCard title="Software Development" textbackground="darkblue" subtitle="Software Development Intern" content="Employed at Rural Computer Consultants out of Bird Island, MN" />
          <WhiteSpace noBreaks="5"></WhiteSpace>
        </div>

        <div id="competitions">
        <h1 id="heading" background-color="861CAB">Competition</h1>
          <ExperienceCard id="comp" title="Collegiate Penetration Testing Competition (CPTC) 2019" content="Live penetration test on a mock banking network" textbackground="darkred" />
            <br/>
          <ExperienceCard title="National Collegiate Cyber Defense Competition (CCDC) 2019/2020" textbackground="lightred" content="Blue team competition that tasked each team with securing and defending a business network" textbackground="lightred" />
            <br/>
          <ExperienceCard title="Hivestorm 2019" textbackground="darkred" content="Deffensive competition that challenges each team with securing various machines" />
            <br/>
          <ExperienceCard title="National Cyber League" textbackground="lightred" content="Nation-wide competion that tests competitors on various cyber security topics" />
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
      <WhiteSpace noBreaks="3"></WhiteSpace>
      <img src={ProfilePic} id="pp"></img>
      <h1>Devin Gluesing</h1>
      <h3>North Dakota State University</h3>
      <h3>devingluesing@gmail.com</h3>
      <a href="https://github.com/d3v1nG"><img src={GitHubLogo}></img></a>
      <WhiteSpace noBreaks="3"></WhiteSpace>
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

// const Heading = ({color, content} : {color: string, content: string}) => {
//   return (
//     <h1 background={color}>{content}</h1>
//   );
// }

class ExperienceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Title: this.props.title,
      SubTitle: this.props.subtitle,
      Content: this.props.content,
      TextBackground: this.props.textbackground
    }
  }
  render() {
    return (
      <div id={this.state.TextBackground}>
        <h2>{this.state.Title}</h2>
        <h3>{this.state.SubTitle}</h3>
        <p>{this.state.Content}</p>
      </div>

    );
  }
}

export default Page;
