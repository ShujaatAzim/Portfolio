import PortfolioPic from '../Images/PortfolioPic.png';
import TidbitsPic from '../Images/TidbitsPic.png';
import TidbitsDemo from '../Demos/TidbitsDemo.mp4';
import TweedleDooPic from '../Images/TweedleDooPic.png';
import TweedleDooDemo from '../Demos/TweedleDooDemo.mp4';
import VueTasksDemo from '../Demos/VueTasksDemo.mp4';
import TippiPic from '../Images/TippiPic.png'
import ProjectivePic from '../Images/ProjectivePic.png';
import PokeBookPic from '../Images/PokeBookPic2.png';
import PokeBookDemo from '../Demos/PokeBookDemo.mp4';
import PBBackendPic from '../Images/PBBackendPic.png';
import D3GraphsPic from '../Images/D3GraphsPic.png';
import VueTasksPic from '../Images/VueTasksPic.png';

// Projects are organized such that they can be reordered without much effort. 
// Just rearrange the order of the objects and they will change their order accordingly on the site.

export const projectsData = {
  "fullstack": [
    {
      "title": "TweedleDoo",
      "image": `${TweedleDooPic}`,
      "desc": "Not just your simple, everyday to-do list! Create multiple lists with bite-sized tasks with full CRUD functionality!",
      "github": "https://github.com/ShujaatAzim/TweedleDoo-Frontend",
      "demo": `${TweedleDooDemo}`,
      "deployed": true,
      "link": "https://tweedledoo.shujaatazim.com"
    },
    {
      "title": "PokéBook",
      "image": `${PokeBookPic}`,
      "desc": "Finally a way to track and share your collection of Pokemon cards to help with trading, selling, and showing off!",
      "github": "https://github.com/ShujaatAzim/PokeBook-Frontend",
      "demo": `${PokeBookDemo}`,
      "deployed": true,
      "link": "https://pokebook.shujaatazim.com"
    },
    // {
    //   "title": "Full Stack Project 3",
    //   "image": "https://static.thenounproject.com/png/390337-200.png",
    //   "desc": "This is a description for a future full stack project 3, with styling and a backend, and then this card will be unique!",
    //   "github": "",
    //   "demo": "",
    //   "deployed": false,
    //   "link": ""
    // }
  ],
  "react": [
    {
      "title": "Shu's Portfolio Website",
      "image": `${PortfolioPic}`,
      "desc": "The site you're currently viewing was built from scratch using React, and was styled with Material UI!",
      "github": "https://github.com/ShujaatAzim/Portfolio",
      "demo": "",
      "deployed": true,
      "link": "https://www.shujaatazim.com"
    },
    {
      "title": "Tippi",
      "image": `${TippiPic}`,
      "desc": "An app that you can use to calculate tips and how much each member of your party pays if you're splitting!",
      "github": "https://github.com/ShujaatAzim/Tippi",
      "demo": "",
      "deployed": false,
      "link": ""
    },
    // {
    //   "title": "Calendyr",
    //   "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    //   "desc": "A simple calendar app used to keep track of habit streaks, similar to github's calendar keeping track of commits!",
    //   "github": "",
    //   "demo": "",
    //   "deployed": false,
    //   "link": ""
    // },
  ],
  "rails": [
    {
      "title": "Projective",
      "image": `${ProjectivePic}`,
      "desc": "A simple project management app used to break down big projects! Built to show how Rails can be used as a standalone framework for apps!",
      "github": "https://github.com/ShujaatAzim/Projective",
      "demo": "",
      "deployed": true,
      "link": "https://projective.shujaatazim.com/"
    },
    {
      "title": "Ruby Tidbits!",
      "image": `${TidbitsPic}`,
      "desc": "A collection of small, simple Ruby methods and games stored in one place for easy access. Built to show my prowess with with Rails!",
      "github": "https://github.com/ShujaatAzim/RubyTidbits",
      "demo": `${TidbitsDemo}`,
      "deployed": true,
      "link": "https://tidbits.shujaatazim.com"
    },
    {
      "title": "PokeBook API",
      "image": `${PBBackendPic}`,
      "desc": "This is the back end for PokeBook, built in Rails as an API-only project! It stores all info as JSON, for ease of retrieval.",
      "github": "https://github.com/ShujaatAzim/TweedleDoo-Backend",
      "demo": "",
      "deployed": true,
      "link": "https://pb-backend.shujaatazim.com/users"
    },
  ],
  "misc": [
    {
      "title": "D3 Graphs",
      "image": `${D3GraphsPic}`,
      "desc": "This app contains several interactive financial data graphs I built using React and the D3 data visualization library!",
      "github": "https://github.com/ShujaatAzim/D3Graphs",
      "demo": "",
      "deployed": true,
      "link": "https://d3graphs.shujaatazim.com"
    },
    {
      "title": "VueTasks",
      "image": `${VueTasksPic}`,
      "desc": "A simple task/to-do list built in Vue.js, it serves to highlight my skills building apps with a different front end framework.",
      "github": "https://github.com/ShujaatAzim/VueTasks",
      "demo": `${VueTasksDemo}`,
      "deployed": false,
      "link": ""
    },
    // {
    //   "title": "Miscellaneous Project 3",
    //   "image": "https://clubrunner.blob.core.windows.net/00000000127/Images/misc.png",
    //   "desc": "This is a description for a future misc project 3, maybe using React Native, and then this card will then be unique!",
    //   "github": "",
    //   "demo": "",
    //   "deployed": false,
    //   "link": ""
    // }
  ]
}