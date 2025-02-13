import './Footer.css'
import facebook from '../../assets/facebook.png';


function Footer() {
    return (
      <>
      <div className='social'>
          <h4>Follow Me On:</h4>
          <span>
            <a href='https://www.facebook.com/Fuschiahive' target='_blank'>
              <img src={facebook} alt='Facebook Icon' />
              </a>      
          </span>
      </div>

      <section id='footer' className='footerContainer'>
          <p>&copy; 2025 Fuschia Hive Hair & Beauty. <br />
          All Rights Reserved.
          </p>
      </section>
      </>
    )
  }
  
  export default Footer