import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface IPropsCaptionCard extends HTMLAttributes<HTMLDivElement> {
  ImgSource: string;
  TextFocus: string;
  ButtonLink: string;
}

function CaptionCard({
  ImgSource,
  TextFocus,
  ButtonLink,
  ...props
}: IPropsCaptionCard): React.ReactNode {
  return (
    <div
      {...props}
      className="card text-center shadow-lg"
      style={{
        backgroundImage: `url("${ImgSource}")`,
        backgroundPosition: "center" /* Center the image */,
        backgroundRepeat: "no-repeat" /* Do not repeat the image */,
        backgroundSize:
          "cover" /* Resize the background image to cover the entire container */,
      }}
    >
      <div
        className="card-body d-flex"
        style={{
          alignItems: "center",
          flexDirection: "column",
          height: "12rem",
          justifyContent: "space-between",
        }}
      >
        <h4 className="card-title text-light">{TextFocus}</h4>
        <Link to={ButtonLink} className="btn btn-info ">
          Saber mas
        </Link>
      </div>
    </div>
  );
}

export default CaptionCard;
