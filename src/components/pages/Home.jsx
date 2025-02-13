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