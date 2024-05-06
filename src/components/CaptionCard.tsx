import React, { HTMLAttributes } from "react";

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
      <div className="card-body">
        <h4 className="card-title mb-5 text-light">{TextFocus}</h4>
        <a href={ButtonLink} className="btn btn-info mt-5">
          Saber mas
        </a>
      </div>
    </div>
  );
}

export default CaptionCard;
