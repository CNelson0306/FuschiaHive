import React from 'react'
import './Home.css';
import swansea from '../../assets/bestSwansea.png';
import people from '../../assets/peoplesChoice.png';

function Home () {
  return (
    <div className='display'>
        <h1>Hair & Beauty</h1>
        <h2>Established 2???</h2>
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