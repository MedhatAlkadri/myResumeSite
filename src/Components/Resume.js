import React, { Component } from 'react';

class Resume extends Component {
  render() {
    if(this.props.data){
      var education = this.props.data.education.map(function(edu){
        return <div key={edu.school} className="row item">
           <div className="twelve columns">
              <h3>{edu.school}</h3>
              <p className="info">{edu.degree}  <em className="date">{edu.graduated}</em></p>
              <ul style={{ paddingLeft: 50}}>
              {edu.description.map(d => <li key={d} style={{ listStyleType: "circle" }}>{d}</li>)}
              </ul>
           </div>
        </div>
      });

      var work = this.props.data.work.map(function(job){
        // {console.log(job.description[0])}
        return <div key={job.years} className="row item">
           <div className="twelve columns">
              <h3>{job.Company}</h3>
              <p className="info" >{job.title} <em className="date">{job.years}</em></p>
              <ul style={{ paddingLeft: 50}}>
              {job.description.map(d => <li key={d} style={{ listStyleType: "circle" }}>{d}</li>)}
              </ul>
           </div>
        </div>
      });

      var skills = this.props.data.skills.map(function(skill){
        var className = 'bar-expand '+skill.name.toLowerCase();
        return <li key={skill.name}><span style={{width:skill.level}} className={className}></span><em>{skill.name}</em></li>
      });
      var skills1 = this.props.data.skills1.map(function(skill){
        var className = 'bar-expand '+skill.name.toLowerCase();
        return <li key={skill.name}><span style={{width:skill.level}} className={className}></span><em>{skill.name}</em></li>
      });
    }
    return (
      <section id="resume">
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            {education}
         </div>
      </div>

      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
         </div>
      </div>

      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="four columns main-col">
				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      <div className="four columns main-col">
     <div className="bars">
        <ul className="skills">
         {skills1}
       </ul>
     </div>
   </div>
      </div>
   </section>
    );
  }
}

export default Resume;
