import React from "react";
import { Image, Stack } from "react-bootstrap";
import { bg_index_image, bg_laptop_image } from "../assets";
import TypewriterEffect from "../components/typewriter";
import CaptionCard from "../components/CaptionCard";
import i18next from "../i18n/index";

const Home = () => {
  return (
    <Stack className="w-100">
      <div
        className="w-100 overflow-hidden d-flex justify-content-center align-items-center bg-dark"
        style={{ height: "85vh" }}
      >
        <Image
          src={bg_index_image}
          className="opacity-25 w-100 h-100 object-fit-cover "
        />
        <h1 className="text-center font-astro position-absolute top-50 start-50 translate-middle text-light">
          BespoKode Solutions
          <br />
          <TypewriterEffect />
        </h1>
      </div>
      <div className="mt-5 text-center">
        <h1 className="fw-bold">{i18next.t("expert_bespoke_solutions")}</h1>
        <div className="container text-center">
          <div className="row">
            <div className="col m-1 rounded">
              <CaptionCard
                ButtonLink=""
                TextFocus={i18next.t("webpage_caption_card")}
                ImgSource={bg_laptop_image}
              />
            </div>
            <div className="col-6 bg-info m-1 rounded">2 of 3 (wider)</div>
            <div className="col bg-info m-1 rounded">3 of 3</div>
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default Home;
