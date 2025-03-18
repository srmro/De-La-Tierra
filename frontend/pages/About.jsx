import React from 'react'
import Navbar from '../components/Navbar'
import about from '../styles/about.module.css'
import fields from '../pictures/aunt-blackberry.jpg'
import herbs from '../pictures/herbs.jpg'

const About = () => {
  return (
    <div>
      <Navbar />

      <header>
        <title>About Us</title>
      </header>
      <div className={about.aboutContainer}>
        <h3>What's De La Tierra About? What does it even mean?</h3>
        <div className={about.infoContainer}>
          <h2>Here's the break down</h2>
          <p>The creation of De La Tierra was decided to unite those who love interacting with plants.<br /> It's a gardening webite for those who garden as a hobby or to make a living out it.<br /> Our website contains a page where it can help you get started in owning your own plants or a start of a new garden. No matter the purpose! <br />
            We do our best to include interactions of other planters so you can get the best insights, help, or even some ideas to include onto your journey! <br />
            De La Tierra is a spanish term that translates to, From the Earth.</p>
        </div>


        <div className={about.infoContainer}>
          <h2>Why De La Tierra?</h2>
          <p>The purpose of De La Tierra is just to have one feel supported when in need to reconnect with nature.<br /> The use of technology has been uprising and some of us may have lost our connection in tending to, and caring for life.<br />
            Perhaps this webite will help those find and reconnect with the help of these future planters that would volunteer their use on this website.</p>
        </div>


        <div className={about.infoContainer}>
          <h2>The Creator~</h2>
          <p>I am Stephanie Romero. <br /> I've been raised through different perspectives of utilizing our gifts from earth and decided to utilize those experiences to those that are barely understanding those gifts
            <br /> My journey began when I'll spend most of my summer vacations in a rural side of Mexico, Buenavista, Michoacán. <br />
            I've seen how my grandma would differentiate between herbs, and spices to start her dishes from scratch.<br />
            <img src={herbs} alt='Empazote, and cilantro herbs in a bunch' className={about.infoImg}/> <br/>

            I would accompany my aunt to help her on the fields where they'll harvest fields of blackberries to gain income.<br />
            <img src={fields} alt='A women walking between a row of blackberry vines' className={about.infoImg}/> <br />
            Seeing the seasons of different vegetations, and how people would utilize these gifts is an experience I wish to pass along.</p>

        </div>

      </div>


    </div>
  )
}

export default About