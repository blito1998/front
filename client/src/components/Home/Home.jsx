import React, { Component } from "react";
import Main from "../template/Main";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Programacao from "../Programacao/Card";
import img1 from "../../assets/img/2.png";
import img2 from "../../assets/img/3.png";
import img3 from "../../assets/img/bem.png";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [{ width: 800, height: 400, itemsToShow: 1 }];

class Home extends Component {
  render() {
    return (
      <Main icon="home" title="TopsterCine">
        <div className="caroussel">
          <>
            <div className="Carousel">
              <Carousel breakPoints={breakPoints}>
                <Item>
                  <img src={img1}></img>
                </Item>
                <Item>
                  <img src={img2}></img>
                </Item>
                <Item>
                  <img src={img3}></img>
                </Item>
              </Carousel>
            </div>
          </>
          <hr />
          <hr />
          <center>
            <h1>Filmes em Cartaz</h1>
          </center>
          <hr />
          <hr />
          <Programacao />
          <hr />
        </div>
      </Main>
    );
  }
}

export default Home;
