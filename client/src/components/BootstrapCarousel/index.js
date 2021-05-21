// THIS IS AN OPTIONAL COMPONENT...DON'T HAVE TO USE IF YOU DONT WANT TO
import React, { Component } from "react";
import "./style.css";
import BuildOutfitImg from "../../images/BuildOutfit.png";
import CatalogsImg from "../../images/Catalogs.png";
import PhoneImg from "../../images/phone.png";
import SampleCatalogImg from "../../images/sampleCatalog.png";
import Carousel from "react-bootstrap/Carousel";

export class BootstrapCarousel extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          
        </div>

        <div className="container-fluid">
          <Carousel>
            <Carousel.Item style={{ height: "300px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={BuildOutfitImg}
                alt="Build outfit"
              />
              <Carousel.Caption className="captionMessage">
                <h3>First Demo </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "300px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={CatalogsImg}
                alt="Catalogs"
              />

              <Carousel.Caption>
                <h3>Second Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "300px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={PhoneImg}
                alt="Phone"
              />

              <Carousel.Caption>
                <h3>Third Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "300px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={SampleCatalogImg}
                alt="Sample catalog"
              />

              <Carousel.Caption>
                <h3>Fourth Demo </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default BootstrapCarousel;
