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
            <div>
              <h2 className="paraph">Médicaments</h2>
              <h3 className="paraph2">
                {" "}
                <p>-Prise de médicaments</p> <p>-Médicaments génériques</p>{" "}
                <p>-Risque des médicaments </p>
              </h3>
            </div>
            <div className="image">
              <img src="images/img5.jpg" alt="img1" />
              <img src="images/img6.jpg" alt="img2" />
            </div>

            <div className="paragraphe">
              <h2 className="paraph">Maladies</h2>
              <h3 className="paraph2">
                {" "}
                <p> Apareil urinaire</p>
                <p> Maladies de la peau </p>
                <p> Maladies du sang</p>
                <p> Maladies génétiques</p>
                <p> Maladies infantiles</p>
              </h3>
              <h3 className="paraph2">
                {" "}
                <p> Apareil urinaire</p>
                <p> Maladies de la peau </p>
                <p> Maladies du sang</p>
                <p> Maladies génétiques</p>
                <p> Maladies infantiles</p>
              </h3>
              <h3 className="paraph2">
                {" "}
                <p> Maladies infectieuse</p>
                <p> Maladies psychologiques</p>
                <p> Neurologie</p>
                <p> Maladies Orl</p>
                <p> Problèmes cardiaques</p>
              </h3>
              <h3 className="paraph2">
                {" "}
                <h3> Problème Vasculires</h3>
                <h3> Rhumatismes </h3>
                <p> Santé bucco-dentaire</p>
                <p> Troubles digestifs</p>
                <p> Troubles respiratoires</p>
              </h3>
              <h3 className="paraph2">
                {" "}
                <p> vacsination </p>
                <p> Voyage et santé </p>
              </h3>
            </div>
          </div>{" "}
          <div className="imagee">
            <img src="images/img11.jpg" alt="img3" />
            <img src="images/img7.jpg" alt="img4" />
          </div>
          
            <div>
              <h2 className="paraph">hygiène</h2>
              <h3 className="paraph2">
                {" "}
                <p>-Prise de médicaments</p> <p>-Médicaments génériques</p>{" "}
                <p>-Risque des médicaments </p>
              </h3>
            </div>
          <div>
            
            <div className="image">
              <img src="images/img3.jpg" alt="img7" />
              <img src="images/img3.jpg" alt="img8" />
            </div>
            
            <div>
              <h2 className="paraph">Bien-etre</h2>
              <h3 className="paraph2">
                {" "}
                <p>-Prise de médicaments</p> <p>-Médicaments génériques</p>{" "}
                <p>-Risque des médicaments </p>
              </h3>
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
