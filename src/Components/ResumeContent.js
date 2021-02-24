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
            <h3>{item.place}</h3>
            <p>{item.city}</p>
            <p><i>{item.title}</i></p>
            <p>{item.time}</p>
            <ul>
              {item.description.map(desc => <li>{desc}</li>)}
            </ul>
          </div> : 
          content === "skills" ? 
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div> : 
          content === "extra" ?
          <div>
            <h2>{item.name}</h2>
            <p>{item.time}</p>
            <ul>
              {item.description.map(desc => <li>{desc}</li>)}
            </ul>
          </div> : null
        )}) 
      }
    </div>
  );
}

export default ResumeContent;