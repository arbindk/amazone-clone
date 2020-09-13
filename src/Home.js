import React from "react";
import "./Home.css";
import Product from "./Product";
import p1 from "./images/the_lean_startup.jpg";
import p2 from "./images/guitar.jpg";
import p3 from "./images/alexa.jpg";
import p4 from "./images/phone.jpg";
import p5 from "./images/trolly.jpg";
import p6 from "./images/Protein.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={12345678}
            title="Guitar for beginners"
            price={29.99}
            rating={3}
            image={p2}
          />
          <Product
            id={22345678}
            title="The lean Startup"
            price={49.99}
            rating={4}
            image={p1}
          />
        </div>
        <div className="home__row">
          <Product
            id={32345678}
            title="Alexa- Your partner"
            price={199.99}
            rating={4}
            image={p3}
          />
          <Product
            id={42345678}
            title="Kid's Phone"
            price={19.99}
            rating={3}
            image={p4}
          />
          <Product
            id={52345678}
            title="Trolly - Best travel suitcase. Lightweight/Strong"
            price={149.99}
            rating={4}
            image={p5}
          />
        </div>
        <div className="home__row">
          <Product
            id={62345678}
            title="Nite Burn - Post Workout Supplement"
            price={69.99}
            rating={4}
            image={p6}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
