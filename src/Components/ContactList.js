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
          <FaPhoneSquare />
        </ListItemIcon>
        <ListItemText primary="(240) 328-0494" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FaEnvelopeSquare />
        </ListItemIcon>
        <ListItemText primary="shujaat.azim@gmail.com" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FaLinkedin />
        </ListItemIcon>
        <ListItemText primary="https://www.linkedin.com/in/shujaatazim/" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FaDev />
        </ListItemIcon>
        <ListItemText primary="https://dev.to/shujaatazim" />
      </ListItem>
    </List>
  );
}

export default ContactList;