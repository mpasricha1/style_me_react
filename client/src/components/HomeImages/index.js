import React from "react";
import "./style.css";
import BuildOutfitImg from "../../images/BuildOutfit.png";
import CatalogsImg from "../../images/Catalogs.png";
import PhoneImg from "../../images/phone.png";
import SampleCatalogImg from "../../images/sampleCatalog.png";

function HomeImages() {
  return (
    <>
      <div className="container-fluid p-20" id="descriptions">
        <div className="row align-items-center landingTextRowGray">
          <div className="col-lg-8 order-lg-1 px-0">
            <img
              src={PhoneImg}
              alt="Style Me"
              className="landingImages"
            />
          </div>
          <div className="col-lg-4 order-lg-2 px-0 ">
            <p className="landingText">
              Capture or upload photos of your clothes.
            </p>
          </div>
        </div>
        <div className="row align-items-center landingTextRowYellow">
          <div className="col-lg-8 order-lg-2 px-0">
            <img
              src={BuildOutfitImg}
              alt="Style Me"
              className="landingImages"
            />
          </div>
          <div className="col-lg-4 order-lg-1 px-0 landingTextColumnYellow">
            <p className="landingText">
              Choose from items you've uploaded and categorized. Get creative
              and put some outfits together!
              <br /> Do you have a big occasion coming up? Plan out your outfit
              in advance.
            </p>
          </div>
        </div>

        <div className="row align-items-center landingTextRowGray">
          <div className="col-lg-8 order-lg-1 px-0">
            <img
              src={SampleCatalogImg}
              alt="Style Me"
              className="landingImages"
            />
          </div>
          <div className="col-lg-4 order-lg-2 px-0 ">
            <p className="landingText">
              Organize your outfits into your categories.
              <br /> Summer, Fall, Winter, Spring
              <br /> You're covered!
            </p>
          </div>
        </div>
        <div className="row align-items-center landingTextRowYellow">
          <div className="col-lg-8 order-lg-2 px-0">
            <img
              src={CatalogsImg}
              alt="Style Me"
              className="landingImages"
            />
          </div>
          <div className="col-lg-4 order-lg-1 px-0 landingTextColumnYellow">
            <p className="landingText">
              Store your outfits in your own Style Me collection
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeImages;
