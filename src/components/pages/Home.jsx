import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import homeImg from "../../assets/homepage_img.jpg";
import swansea from "../../assets/bestSwansea.webp";
import people from "../../assets/peoplesChoice.webp";
import oceanic from "../../assets/oceanic.webp";
import award2023 from "../../assets/award2023.png";
import award2024 from "../../assets/award2024.png";

function Home() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${homeImg})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Fuschia Hive</h1>
            <h2>Hair & Beauty</h2>

            <Link to="/contact">
              <button className="hero-button">Contact</button>
            </Link>
          </div>
        </div>
      </section>

      <div className="home-display">
        <h3>Established 2015</h3>
        <div className="intro">
          <p>Fully Qualified & Insured</p>
          <p>Award Winning Salon</p>
          <br />
          <br />
          <div className="bio">
            <p>
              Since founding Fuschia Hive Hair & Beauty in 2015 I have been
              dedicated to
            </p>
            <p>
              delivering exceptional hair and beauty services that leave every
              client feeling confident
            </p>
            <p>
              and pampered. With a passion for the industry and an eye for
              detail, I have earned
            </p>
            <p>
              multiple awards, showcasing expertise and a commitment to
              excellence.
            </p>
            <br />
            <p>
              Backed by extensive qualifications across a variety of hair and
              beauty services, I offer
            </p>
            <p>
              everything from colours, nails, waxing, lashlifts to complete
              transformations.
            </p>
            <p>
              Whether you're looking for a simple refresh or a dramatic
              makeover, I will be with
            </p>
            <p>you every step of the way making you feel your best.</p>
            <br />
            <p>
              At Fuschia Hive, it's not just about skills, it's about making
              every client feel heard,
            </p>
            <p>
              valued and truly satisfied. Your satisfaction is always my top
              priority.
            </p>
            <br />
            <p>
              I aim to create the perfect experience whether it would be for a
              special occasion,
            </p>
            <p>
              or you just need a little pampering, the experience is tailored
              for you.
            </p>
          </div>
        </div>

        <div className="awards-intro">
          <p>Voted Best In swansea & people's choice in 2022</p>
        </div>
        <div className="awards">
          <div className="awardSwansea">
            <img src={swansea} />
          </div>
          <div className="awardPeople">
            <img src={people} />
          </div>
          <div className="oceanic">
            <img src={oceanic} />
          </div>
        </div>

        <div className="certs">
          <div className="award23">
            <img src={award2023} />
          </div>
          <div className="award24">
            <img src={award2024} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
