import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />

      <h1>Pharma DAL: Santé +</h1>
      <div className="dallog">
        <img src="img/img_pharma.jpg" alt=""></img>
      </div>

      <ul>
        <Link to="/services" className="Services">
          <dd>NOS SERVICES</dd>{" "}
          <h4>
            Pharma Dal est une entreprise pharmaceutique spécialisée dans la
            distribution en gros et la vente des médicaments (princeps et
            génériques), des dispositifs médicaux et la parapharmacie
            (cosmétiques, hygiène et soins) de toutes les spécialités.
          </h4>
          <div className="img">
            <div className="image">
              <img src="images/img5.jpg" alt="img1" />
              <img src="images/img6.jpg" alt="img2" />
            </div>
            <div className="image">
              <img src="images/img11.jpg" alt="img3" />
              <img src="images/img7.jpg" alt="img4" />
            </div>
            <div className="image">
              <img src="images/img4.jpg" alt="img5" />
              <img src="images/img2.jpg" alt="img6" />
            </div>
            <div className="image">
              <img src="images/img3.jpg" alt="img7" />
              <img src="images/img3.jpg" alt="img8" />
            </div>
            <div className="image">
              <img src="images/img9.jpg" alt="img9" />
              <img src="images/img10.jpg" alt="img10" />
            </div>
            <div className="image">
              <img src="images/img1.jpg" alt="img11" />
              <img src="images/img12.jpg" alt="img12" />
            </div>
          </div>
        </Link>
        <Link to="/rendezvous" className="Rendezvous">
          <dd>PRENDRE RDV</dd>
        </Link>

        <Link to="/contact" className="Contact">
          <dd>CONTACT</dd>
          <td>
            <p>+33767701315</p>
            <br />
            <br />
            <p>dal.wodaa@gmail.com</p>
          </td>
        </Link>
      </ul>
    </div>
  );
};

export default Home;
