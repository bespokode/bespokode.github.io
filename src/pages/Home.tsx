import React from "react";
import { Image, Stack } from "react-bootstrap";
import {
  bg_index_image,
  bg_laptop_image,
  bg_mobile_delopment,
  bg_secure_lock,
} from "../assets";
import TypewriterEffect from "../components/typewriter";
import CaptionCard from "../components/CaptionCard";
import i18next from "../i18n/index";

const Home = () => {
  const TypewriterEffectTraductions: string[] = [
    i18next.t("homepage_typewriteEffect_mobile"),
    i18next.t("homepage_typewriteEffect_software"),
    i18next.t("homepage_typewriteEffect_web"),
    i18next.t("homepage_typewriteEffect_custom"),
    i18next.t("homepage_typewriteEffect_security"),
    i18next.t("homepage_typewriteEffect_API"),
  ];
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
          <hr />
          <TypewriterEffect phrases={TypewriterEffectTraductions} />
        </h1>
      </div>
      <div className="mt-5 text-center">
        <h1 className="fw-bold mb-4">
          {i18next.t("homepage_expertBespokeSolutions")}
        </h1>
        <div className="container text-center">
          <div className="row">
            <div className="col-12 mb-2 rounded">
              <CaptionCard
                ButtonLink=""
                TextFocus={i18next.t("captioncard_webpageDevelopment")}
                ImgSource={bg_laptop_image}
              />
            </div>
            <div className="col mb-2 rounded">
              <CaptionCard
                ButtonLink=""
                TextFocus={i18next.t("captioncard_mobileDevelopment")}
                ImgSource={bg_mobile_delopment}
              />
            </div>
            <div className="col mb-2 rounded">
              <CaptionCard
                ButtonLink=""
                TextFocus={i18next.t("captioncard_secureCode")}
                ImgSource={bg_secure_lock}
              />
            </div>
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default Home;
