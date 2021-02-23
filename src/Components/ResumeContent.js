import React from 'react';
import { resumeData } from '../Supplemental/ResumeData';

const ResumeContent = props => {

  const { content } = props;

  return (
    <div>
      { resumeData[content].map(item => {
        return (
          <div>
            <p>{item.place}</p>
            <p>{item.time}</p>
            <ul>
              {item.description.map(desc => <li>{desc}</li>)}
            </ul>
          </div>
        )}) 
      }
    </div>
  );
}

export default ResumeContent;