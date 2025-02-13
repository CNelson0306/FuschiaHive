import React from 'react'
import './Home.css';
import swansea from '../../assets/bestSwansea.webp'
import people from '../../assets/peoplesChoice.webp';

function Home () {
  return (
    <div className='display'>
        <h1>Hair & Beauty</h1>
        <h2>Established 2015</h2>
          <div className='intro'>
            <p>Fully Qualified & Insured</p>
            <p>Award Winning Salon</p>
            <br />
            <br />
            <div className='bio'>
              <p>Since founding Fuschia Hive Hair & Beauty in 2015 I have been dedicated to</p>
              <p>delivering exceptional hair and beauty services that leave every client feeling confident</p>
              <p>and pampered. With a passion for the industry and an eye for detail, I have earned</p>
              <p>multiple awards, showcasing expertise and a commitment to excellence.</p>
              <br />
              <p>Backed by extensive qualifications across a variety of hair and beauty services, I offer</p>
              <p>everything from blow drys, nails, waxing, tinting to complete transformations.</p>
              <p>Whether you're looking for a simple refresh or a dramatic makeover, I will be with</p>
              <p>you every step of the way making you feel your best.</p>
              <br />
              <p>At Fuschia Hive, it's not just about skills, it's about making every client feel heard,</p>
              <p>valued and truly satisfied.  Your satisfaction is always my top priority.</p>
              <br />
              <p>I aim to create the perfect experience whether it would be for a special occasion,</p>
              <p>or you just need a little pampering, the experience is tailored for you.</p>
              </div>
          </div>
            <div className='intro'>
              <p>Voted Best In swansea & people's choice in 2022</p>
            </div>
            <div className='awards'>
                <div className='awardSwansea'>
                    <img src={swansea} />
                </div>
                <div className='awardPeople'>
                    <img src={people} />
                </div>
          </div>
    </div>
  )
}

export default Home