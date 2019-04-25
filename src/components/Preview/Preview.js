import React from "react";
import { connect } from "react-redux";
import "./Preview.css";

const Preview = props => {
  return (
    <div className="resume-render-wrapper">
      <div className="resume-template">
        <table className="main">
          <tbody>
            <tr>
              <td className="w-20">
                <img src="../../assets/daiict-logo.jpg" alt="daiict-logo" />
              </td>

              <td className="intro w-80">
                <h1 className="intro-h1">{props.personalInfo.name}</h1>
                <p>
                  <b className="table-title">
                    Dhirubhai Ambani Institute of Information and Communication
                    Technology
                  </b>
                </p>
                <p>
                  <span className="table-title">
                    <b>Email:</b> {props.personalInfo.email}
                  </span>
                  <span className="table-title">
                    <b>DOB:</b> {props.personalInfo.dateOfBirth}
                  </span>
                </p>
                <p>
                  <b className="table-title">Address:</b>{" "}
                  {props.personalInfo.address}
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-100 section" v-if="resume.degrees.length">
          <tbody>
            <tr>
              <td colSpan="4" className="section-header">
                <h3 className="table-header">EDUCATION</h3>
              </td>
            </tr>
            <tr>
              <th colSpan="1" className="table-title">
                Degree
              </th>
              <th colSpan="1" className="table-title">
                University/Institute
              </th>
              <th colSpan="1" className="table-title">
                Year
              </th>
              <th colSpan="1" className="table-title">
                CPI/Aggregate
              </th>
            </tr>
            {props.education.map((education, index) => (
              <tr key={index}>
                <td>
                  <b className="table-title">{education.degree}</b>
                </td>
                <td className="table-details">{education.institute}</td>
                <td className="table-details">{education.year}</td>
                <td className="table-details">{education.cpi}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="w-100 section">
          <tbody>
            <tr>
              <td colSpan="2" className="section-header">
                <h3 className="table-header">SKILLS</h3>
              </td>
            </tr>
            <tr>
              <td className="w-30">
                <b>Expertise Area/Area(s) of Interest</b>
              </td>
              <td className="table-details">{props.skills.expertise}</td>
            </tr>
            <tr v-if="resume.skill.programming_languages">
              <td className="w-30">
                <b>Programming Language(s)</b>
              </td>
              <td className="table-details">
                {props.skills.programmingLanguages}
              </td>
            </tr>
            <tr v-if="resume.skill.tools">
              <td className="w-30">
                <b>Tools and Technologies</b>
              </td>
              <td className="table-details">
                {props.skills.toolsAndTechnologies}
              </td>
            </tr>
            <tr>
              <td className="w-30">
                <b>Technical Electives</b>
              </td>
              <td className="table-details">
                {props.skills.technicalElectives}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="page-break" />
        <table className="w-100 section">
          <tr>
            <td colSpan="3" className="section-header">
              <h3 className="table-header">
                PROFESSIONAL EXPERIENCE/INTERNSHIPS
              </h3>
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
        </table>
        <table className="w-100 section">
          <tr>
            <td colSpan="2" className="section-header">
              <h3 className="table-header">PROJECTS</h3>
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
                  <p className="table-details">
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
        </table>

        <table className="w-100 section" v-if="resume.positions.length">
          <tr>
            <td colSpan="2" className="section-header">
              <h3 className="table-header">POSITION OF RESPONSIBILITY</h3>
            </td>
          </tr>
          <tr>
            <td valign="top">
              <ul className="list">
                {props.position.map(position => (
                  <li className="table-details">{position}</li>
                ))}
              </ul>
            </td>
          </tr>
        </table>

        <table className="w-100 section" v-if="resume.awards.length">
          <tbody>
            <tr>
              <td colSpan="2" className="section-header">
                <h3 className="table-header">AWARDS AND ACHIEVEMENTS</h3>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <ul className="list">
                  {props.achievements.map(achievement => (
                    <li className="table-details">{achievement}</li>
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
                <h3 className="table-header">INTERESTS AND HOBBIES</h3>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <ul className="list">
                  {props.hobbies.map((hobby, index) => (
                    <li key={index} className="table-details">
                      {hobby}
                    </li>
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
