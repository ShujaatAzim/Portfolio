import React from 'react';
import { resumeData } from '../Supplemental/ResumeData';

const ResumeContent = props => {

  const { content } = props;

  return (
    <div>
      { resumeData[content].map(item => {
        return (
          content === "employment" ?
          <div>
            <h2><b>{item.place}</b></h2>
            <h4><i>{item.title} - {item.city}</i></h4>
            <h5>{item.time}</h5>
            <ul>
              {item.description.map(description => <div><li>{description}</li><br /></div>)}
            </ul>
          </div> :
          content === "skills" ? 
          <div>
            <h3>{item.name}:</h3>
            <p>{item.description}</p> {/* don't like this in line font sizing, might change...*/}
            <br />
          </div> : 
          content === "education" ? 
          <div>
            <h2><b>{item.place}</b></h2>
            <h4>{item.time}</h4>
            <ul>
              {item.description.map(desc => <div><li>{desc}</li><br /></div>)}
            </ul>
          </div> : 
          content === "extras" ?
          <div>
            <h2><u>Volunteerism</u></h2>
            <h2>{item.name}</h2>
            <p>{item.time}</p>
            <ul>
              {item.description.map(desc => <li>{desc}</li>)}
            </ul>
            <br />
            <h2><u>Hobbies</u></h2>
            <ul>
              {item.hobbies.map(desc => <li>{desc}</li>)}
            </ul>
          </div> : null
        )})
      }
    </div>
  );
}

export default ResumeContent;