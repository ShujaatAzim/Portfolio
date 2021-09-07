import React from 'react';
import { Grid } from '@material-ui/core';
import Professional from '../Images/Professional.png';
import Avatar from '../Images/Avatar.jpg';
import Birdy from '../Images/Birdy.jpg';


const About = () => {
  return (
    <div className="about-page">
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ marginLeft: "10rem", marginRight: "10rem"}}>
          <h1>My Story</h1>
        </Grid>
        <Grid item xs={8}>
          <p>
            Hello world! My name is Shujaat, but you can call me Shu. I am a full stack software engineer. In this section, I wanted to tell you a 
            little about myself.
          </p>
          <p>
            Born and raised in Potomac, MD, I've spent my entire life in the greater Washington, DC area. I even went to University of Maryland, 
            College Park, so my roots are firmly planted in the DMV! But I had a difficult time focusing my interests while in school, as any subject 
            even remotely intellectually stimulating would grab me. As a lifelong learner, I have always appreciated subjects that force my mind to 
            work hard. As such, the sciences have always appealed to me. But "the sciences" is a huge world, with many different subjects. I started 
            off as a cell biology major, but also found myself leaning to psychology, architecture, geology, technology, medicine, and even the 
            "science" of finance! I ended up doing a pre-med major, which I'm happy about because I learned many skills during my time in medicine; 
            skills that are universally applicapable, though not universally taught. 
          </p>
          <p>
            Afer leaving the medical world, I entered the world of finance. It was a chance encounter with someone who offered me a then-irresistable 
            offer. I started working at M&T Bank, learning how to work with clients and teams, but it was not meant to last - once the initial draw 
            of the financial world wore off, I started feeling intellectually unsatisfied with my contributions - was I really going to spend the rest 
            of my life chasing dollar signs and nothing else? I want to use my brain to change the world! 
          </p>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <img className="about-pic" src={Professional} alt="professional avatar" />
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <img className="about-pic" src={Avatar} alt="avatar" />
        </Grid>
        <Grid item xs={8}>
          <p>
            Fast forward a couple years, and two of my very good friends encouraged me to seriously consider software engineering as a career. I 
            enrolled in Flatiron School's immersive full stack bootcamp, and three months later, emerged a newly minted developer! We were coding 
            for ten hours a day, five days a week, learning the in's and out's of Ruby, Rails, JavaScript, React, and countless other tools and 
            technologies. It was bitter work, but the results were rewarding and worth it. I did very well in the bootcamp, as I used my ability 
            to learn and adapt quickly, and took to code very easily. Additionally, my cohort was comprised of very talented people whom I couldn't 
            help but emulate. We were learning to code, but equally importantly we were learning how to collaborate and work in pairs and in teams. 
            These are invaluable skills that are very difficult to learn outside of a structured environment. I couldn't be happier, and am now looking 
            for more.
          </p>
          <p>
            My first professional development position was amazing, and I learned a lot. Though I quickly found myself as the sole developer on their
            team, my training at Flatiron gave me the tools and the confidence to hit the ground running. I was responsible for the company website, 
            time keeping app, and other scary-at-first tasks. As much as I enjoyed it, however, my time there was tragically cut short thanks to 
            Covid-19's untimely debut. But I wasn't about to lose hope! During the lockdown, I religiously coded and learned, inhaling new technology 
            docs like they were oxygen (no pun intended). Now, I am in an even better position than I was when the pandemic started, and for that I
            am thankful. I hope to continue this journey of learning, creating, and hopefully changing the world for the better in my own, personal way. 
            I know that I am a good developer, so now I want to show it! 
          </p>
        </Grid>
        <Grid item xs={8}>
          <p>
            Outside of coding, I enjoy playing video games. I tend to be a completionist when it comes to games, however, so I always choose my games
            carefully! I'm a fan of the Legend of Zelda series, World of Warcraft, the Mass Effect series, the Halo series, and many others!. I usually 
            have all the latest systems so I don't miss out on any exclusives! 
          </p>
          <p>
            I also enjoy indoor rock climbing, which I find to be a great workout. Swimming, tennis, the traditional gym, and even golf round
            out my physical activities. I'm also an avid cook and gardener! Nothing beats carefully growing your own produce and using your own cooking
            skills to make a delicious meal!
          </p>
          <p>
            I come from a family including my mom and two younger sisters. My father passed away when I was thirteen, and so my mom stepped in as both
            mother and father. It was a tough time but she made sure I am the man I am today! All of my good qualities come from her. I also have a pet
            bird, a cockatiel named Birdy. She is 22 (!) years old, and is one of my best friends! She sits with me when I am coding at home, conent to
            perch on my laptop while I type away; In fact, she is sitting with me as I write this!
          </p>
          <p>
            Thank you for taking the time to get to know a little more about me. I look forward to getting to know you as well! :)
          </p>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <img className="about-pic" src={Birdy} alt="birdy" />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;