import React from 'react';
import "./page.css";
import ProfilePic from "./images/pp2.jpg";
import GitHubLogo from "./images/GitHub-Mark-Light-64px.png";
import Resume from "./Resume/Devin_Gluesing_Resume.docx";

class Page extends React.Component {
  render() {
    return (
      <div id="page">
        <ContactCard />
        <div id="experience">
          <h1 id="heading-blue">Experience</h1>
            <ExperienceCard title="Student" content="Computer Science student at North Dakota State University with a focus on cyber security. Projected graduation: 2022" textbackground="darkblue" />
            <br/>
            <ExperienceCard title="Cyber Security" textbackground="cyberblue" subtitle="Heavily involved with NDSU's Cybersecurity Student Association." content="Participated in 4 team competitions including CCDC, CPTC, Hivestorm, and NCL" />
            <br/>
            <ExperienceCard title="Software Development" textbackground="darkblue" subtitle="Software Development Intern" content="Employed at Rural Computer Consultants out of Bird Island, MN" />
          <WhiteSpace noBreaks="3"></WhiteSpace>
          <ResumeDownload />
        </div>

        <div id="competitions">
        <h1 id="heading-red">Competitions</h1>
          <ExperienceCard id="comp" title="Collegiate Penetration Testing Competition (CPTC) 2019" content="Live penetration test on a mock banking network" textbackground="darkred" />
            <br/>
          <ExperienceCard title="National Collegiate Cyber Defense Competition (CCDC) 2019/2020" textbackground="lightred" content="Blue team competition that tasked each team with securing and defending a business network" textbackground="lightred" />
            <br/>
          <ExperienceCard title="Hivestorm 2019" textbackground="darkred" content="Deffensive competition that challenges each team with securing various machines" />
            <br/>
          <ExperienceCard title="National Cyber League" textbackground="lightred" content="Nation-wide competion that tests competitors on various cyber security topics" />
        </div>

        <div id="technical">
          <h1 id="heading-purp">Technical</h1>
          <ExperienceList title="Languges and Frameworks" textbackground="purp" content="Python, C# (DotNet), Java, JavaScript and ReactJS" />
          <br/>
          <ExperienceList title="Environments" textbackground="purp" content="Windows, Windows Servers, Kali Linux, Ubuntu, Raspbian" />
        </div>

        <div id="footer">
          <FooterInfo />
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

class ResumeDownload extends React.Component {
  render() {
    return (
      <a class="button" href={Resume}>Click here for my full resume!</a>
    );
  }
}

class FooterInfo extends React.Component {
  render() {
    return (
      <div id="footer">
        <p>Made from ReactJs, Hosted on GitHub Pages</p>
      </div>
    );
  }
}

class ExperienceList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Title: this.props.title,
      Content: this.props.content,
      TextBackground: this.props.textbackground
    }
  }
  render() {
    var contentList = this.state.Content.split(",");
    contentList = contentList.map((item) => <li>{item}</li>);
    return (
    <div id={this.state.TextBackground}>
      <h2>{this.state.Title}</h2>
        <ul>{contentList}</ul>
    </div>);
  }
}

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
