import React from 'react';
import { resumeData } from '../Supplemental/ResumeData';

const ResumeContent = props => {

  const { content } = props;

  return (
    <div>
      { resumeData[content].map(item => {
        return (
          content === "education" ?
          <div>
            <h2>{item.place}</h2>
            <p>{item.time}</p>
            <ul>
              {item.description.map(desc => <li>{desc}</li>)}
            </ul>
          </div> :
          content === "employment" ? 
          <div>
            <h2>{item.place}</h2>
            <p>{item.city}</p>
            <p><i>{item.title}</i></p>
            <p>{item.time}</p>
            <ul>
              {item.description.map(desc => <li>{desc}</li>)}
            </ul>
          </div> : 
          content === "skills" ? 
          <div>
            <h2>{item.name}:</h2>
            <p>{item.description}</p> {/* don't like this in line font sizing, might change...*/}
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