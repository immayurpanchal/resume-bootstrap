import React from "react";
import { connect } from "react-redux";
import './Preview.css';

const Preview = props => {
  return (
    <div className="resume-render-wrapper">
      <div className="resume-template">
        <table className="main">
          <tbody>
            <tr>
              <td className="w-20">
                <img src="../assets/daiict-logo.jpg" alt="daiict-logo" />
              </td>

              <td className="intro w-80">
                <h1>{props.personalInfo.name}</h1>
                <p>
                  <b>
                    Dhirubhai Ambani Institute of Information and Communication
                    Technology
                  </b>
                </p>
                <p>
                  <span className="w-60 inline-block">
                    <b>Email:</b> {props.personalInfo.email}
                  </span>
                  <span className="w-40 text-right">
                    <b>DOB:</b> {props.personalInfo.dateOfBirth}
                  </span>
                </p>
                <p>
                  <b>Address:</b> {props.personalInfo.address}
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-100 section" v-if="resume.degrees.length">
          <tbody>
            <tr>
              <td colSpan="4" className="section-header">
                <h3>EDUCATION</h3>
              </td>
            </tr>
            <tr>
              <th colSpan="1">Degree</th>
              <th colSpan="1">University/Institute</th>
              <th colSpan="1">Year</th>
              <th colSpan="1">CPI/Aggregate</th>
            </tr>
            {props.education.map((education, index) => (
              <tr key={index}>
                <td>
                  <b>{education.degree}</b>
                </td>
                <td>{education.institute}</td>
                <td>{education.year}</td>
                <td>{education.cpi}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="w-100 section">
          <tbody>
            <tr>
              <td colSpan="2" className="section-header">
                <h3>SKILLS</h3>
              </td>
            </tr>
            <tr>
              <td className="w-30">
                <b>Expertise Area/Area(s) of Interest</b>
              </td>
              <td className="w-70">{props.skills.expertise}</td>
            </tr>
            <tr v-if="resume.skill.programming_languages">
              <td className="w-30">
                <b>Programming Language(s)</b>
              </td>
              <td className="w-70">{props.skills.programmingLanguages}</td>
            </tr>
            <tr v-if="resume.skill.tools">
              <td className="w-30">
                <b>Tools and Technologies</b>
              </td>
              <td className="w-70">{props.skills.toolsAndTechnologies}</td>
            </tr>
            <tr v-if="resume.skill.technical_electives">
              <td className="w-30">
                <b>Technical Electives</b>
              </td>
              <td className="w-70">{props.skills.technicalElectives}</td>
            </tr>
          </tbody>
        </table>
        <div className="page-break" />
        {/* <table className="w-100 section">
          <tr>
            <td colSpan="3" className="section-header">
              <h3>PROFESSIONAL EXPERIENCE/INTERNSHIPS</h3>
            </td>
          </tr>
          {props.professionalExperience.map(internship => (
            <tr>
              <td className="w-20" valign="top">
                <p>
                  <b>{internship.companyName}</b>
                </p>
              </td>
              <td className="w-60" valign="top">
                <p>
                  {internship.description}
                  <p v-if="internship.guide">
                    <i>Guide: {internship.guide}</i>
                  </p>
                </p>
              </td>
              <td className="w-20" valign="top">
                <p>
                  ({internship.start} - {internship.end})
                </p>
                <p v-show="internship.team_size">
                  Team Size - {internship.teamSize}
                </p>
              </td>
            </tr>
          ))}
        </table> */}
        {/* <table className="w-100 section" v-if="resume.projects.length">
          <tr>
            <td colSpan="2" className="section-header">
              <h3>PROJECTS</h3>
            </td>
          </tr>
          {props.projects.map(project => (
            <tr>
              <td className="w-80" valign="top">
                <p>
                  <b>{project.companyName}</b>
                </p>
                <p>
                  {project.description}
                  <p v-if="project.guide">
                    <i>Guide: {project.guide}</i>
                  </p>
                </p>
              </td>
              <td className="w-20" valign="top">
                <p>
                  ({project.start} - {project.end})
                </p>
                <p v-show="project.team_size">Team Size - {project.teamSize}</p>
              </td>
            </tr>
          ))}
        </table> */}

        <table className="w-100 section" v-if="resume.positions.length">
          <tr>
            <td colSpan="2" className="section-header">
              <h3>POSITION OF RESPONSIBILITY</h3>
            </td>
          </tr>
          <tr>
            <td valign="top">
              <ul className="list">
                {props.position.map(position => (
                  <li>{position}</li>
                ))}
              </ul>
            </td>
          </tr>
                </table> 

        <table className="w-100 section" v-if="resume.awards.length">
          <tbody>
            <tr>
              <td colSpan="2" className="section-header">
                <h3>AWARDS AND ACHIEVEMENTS</h3>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <ul className="list">
                  {props.achievements.map(achievement => (
                    <li>{achievement}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-100 section">
          <tbody>
            <tr>
              <td colSpan="2" className="section-header">
                <h3>INTERESTS AND HOBBIES</h3>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <ul className="list">
                  {props.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    personalInfo: state.personalInfo,
    education: state.education,
    skills: state.skills,
    professionalExperience: state.professionalExperience,
    projects: state.projects,
    position: state.position,
    achievements: state.achievements,
    hobbies: state.hobbies
  };
};

export default connect(mapStateToProps)(Preview);
