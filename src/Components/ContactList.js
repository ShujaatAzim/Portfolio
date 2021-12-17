import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FaPhoneSquare, FaEnvelopeSquare, FaLinkedin, FaDev } from 'react-icons/fa';

const ContactList = () => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <FaPhoneSquare style={{ color: "black" }} />
        </ListItemIcon>
        <ListItemText primary="(240) 328-0494" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FaEnvelopeSquare style={{ color: "black" }} />
        </ListItemIcon>
        <ListItemText primary="shujaat.azim@gmail.com" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FaLinkedin style={{ color: "black" }} />
        </ListItemIcon>
        <a className="contact-link" href="https://www.linkedin.com/in/shujaatazim/" target="_blank" rel="noreferrer">
          <ListItemText primary="https://www.linkedin.com/in/shujaatazim/" />
        </a>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FaDev style={{ color: "black" }} />
        </ListItemIcon>
        <a className="contact-link" href="https://dev.to/shujaatazim" target="_blank" rel="noreferrer"> 
          <ListItemText primary="https://dev.to/shujaatazim/" />
        </a>
      </ListItem>
    </List>
  );
}

export default ContactList;