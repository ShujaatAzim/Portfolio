import React from 'react';
import { Grid } from '@material-ui/core';

const About = () => {
  return (
    <div className="about-page">
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ marginLeft: "10rem", marginRight: "10rem"}}>
          <h1>My Story</h1>
        </Grid>
        <Grid xs={8} item>
          <p>
            My developer career journey has been anything but conventional. In school, I had a difficult time focusing my interests, as any subject even 
            a little intellectually stimulating would grab me. As a lifelong learner, I always have appreciated subjects that make my mind work. As such, 
            the sciences have appealed to me more than, say, the arts (not that the latter isn't stimulating -- it just wasn't as much for me, 
            personally). Therefore I started at UMD as a cell biology major. However, I quickly added more interests to my list -- psycology, architecture,
            medicine, finance, and finally, technology. I have two of my good friends to thank for the latter -- one is an extremely capable, self-taught
            developer who has excelled in the field; the other has had a similar journey to mine, in that he did a career swap. When he was teaching 
            himself code via freeCodeCamp, I decided to do so as well; mainly for fun and support. However, I quickly realized that this new field is 
            stimulating, fluid, and a lot of fun - exactly what I was looking for!
          </p>
        </Grid>
        <Grid xs={4} style={{ textAlign: "center" }}>
          Picture One
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          Picture Two
        </Grid>
        <Grid xs={8}>
          <p>
            Fast forward a couple years, and my two friends encouraged me to seriously consider software engineering as a career. I had started to feel 
            a little unfulfilled in the financial world - was I really going to be focused on money and nothing else for the rest of my life? I decided 
            that it was time for a change. I enrolled in Flatiron School's immersive full stack bootcamp, and three months later, emerged a newly minted 
            developer! I did very well in the bootcamp, as I used my ability to learn and adapt quickly, and took to code very easily. I couldn't be 
            happier, and am now looking for more. My first professional development position was amazing, but tragically cut short thanks to Covid-19's 
            untimely debut. But I am excited for my next adventure!
          </p>
          <p>
            I hope to continue this journey of learning, creating, and hopefully changing the world for the better in my own, personal way. I know that I
            am a good developer, so now I want to show it! 
          </p>
          <p>
            Aside from coding, I am an avid traveller and video gamer! I also enjoy rock climbing, the outdoors, swimming, tennis and many other things!
            I hope to hear from you!
          </p>
          <p>
            Shujaat Azim
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;