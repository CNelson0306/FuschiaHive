import React from 'react'
import './Beauty.css'

function Beauty() {
  return (
    <>
    <section id='beauty' className='beautyContainer'>
    <h1 className='header'>& Beauty</h1>
    <div className="beautyTreatment">
        <span>gel polish hands (Natural nails)</span>
            <p>from £28</p>
        <span>Gel polish toes</span>
            <p>£23</p>
        <span>Builder gel/acrylic overlay</span>
            <p>From £28</p>
        <span>Gel nail extenstions</span>
            <p>£39</p>
        <span>Acrylic nail extensions</span>
            <p>£39</p>
        <span>Gel or acrylic removal only</span>
            <p>+ £16</p>
        <span>Gel or acrylic removal with new set</span>
            <p>+ £6</p>
    </div>

        <br />
        <hr />
        <br/>
    <div className='beautyTreatment'>
        <span>Foot peel with gel polish</span>
            <p>£32</p>
        <span>Foot peel only</span>
            <p>£22</p>
    </div>
        <br />
        <hr />
        <br />
    <div className='beautyTreatment'>
        <span>Brow wax</span>
            <p>£12</p>
        <span>Brow wax & tint</span>
            <p>£16</p>
        <span>Lip wax</span>
            <p>£8</p>
        <span>Chin wax</span>
            <p>£8</p>
        <span>Underarm wax</span>
            <p>£14</p>
        <span>bikini wax</span>
            <p>£17</p>
        <span>half leg wax</span>
            <p>£20</p>
        <span>full leg wax</span>
            <p>£28</p>
    </div>
        <br />
        <hr />
        <br />
    <div className='beautyTreatment'>
        <span>dermaplanning with gold mask</span>
            <p>£30</p>
    </div>
        <br />
        <hr />
        <br />
    <div className='beautyTreatment'>
        <span>Brow lamination with wax & tint</span>
            <p>£30</p>
    </div>
        <br />
        <hr />
        <br />
    <div className='beautyTreatment'>
        <span>Lash lift with tint</span>
            <p>£30</p>
    </div>
    <br />
    <hr />
    <br />
        <br />
    </section>
    </>
  )
}

export default Beauty;
