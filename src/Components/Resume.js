import React, { Component } from 'react';

class Resume extends Component {
  render() {
    if(this.props.data){
      var education = this.props.data.education.map(function(edu){
        return <div key={edu.school} className="row item">
           <div className="twelve columns">
              <h3>{edu.school}</h3>
              <p className="info">{edu.degree}  <em className="date">{edu.graduated}</em></p>
              <p>
                {edu.description}
              </p>
              <p>
                {edu.description1}
              </p>
              <p>
                {edu.description2}
              </p>
              <p>
                {edu.description3}
              </p>
           </div>
        </div>
      });

      var work = this.props.data.work.map(function(job){
        return <div key={job.company} className="row item">
           <div className="twelve columns">
              <h3>{job.company}</h3>
              <p className="info">{job.title} <em className="date">{job.years}</em></p>

              <p>
              {job.description}
              </p>
              <ol>
              <li>{job.description1}</li>
              <li>{job.description2}</li>
              <li>{job.description3}</li>
              <li>{job.description4}</li>
              <li>{job.description5}</li>
              <li>{job.description6}</li>
              <li>{job.description7}</li>
              <li>{job.description8}</li>
              <li>{job.description9}</li>
              <li>{job.description10}</li>
              <li>{job.description11}</li>
              </ol>
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
