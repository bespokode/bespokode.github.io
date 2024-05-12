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
    i18next.t("homepage_software_development"),
    i18next.t("homepage_mobile_application_development"),
    i18next.t("homepage_enterprise_security_software"),
    i18next.t("homepage_api_development_experts"),
    i18next.t("homepage_digital_transformation"),
    i18next.t("homepage_artificial_intelligence_development"),
    i18next.t("homepage_codes"),
    i18next.t("homepage_blog"),
    i18next.t("homepage_software_development_company_in_colombia"),
    i18next.t("homepage_software_development_agency"),
    i18next.t("homepage_web_development"),
    i18next.t("homepage_customizable"),
    i18next.t("homepage_guarantee"),
    i18next.t("homepage_support"),
    i18next.t("homepage_custom_projects"),
    i18next.t("homepage_bespoke_software"),
    i18next.t("homepage_deployment_of_computer_systems_in_the_cloud"),
    i18next.t("homepage_updates"),
    i18next.t("homepage_improvements_to_computer_systems"),
    i18next.t("homepage_design_and_construction_of_cloud_applications"),
    i18next.t("homepage_market_technologies"),
    i18next.t("homepage_agile_methodologies"),
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
          <br />
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
