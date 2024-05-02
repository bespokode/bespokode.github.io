import React, { Component, HTMLAttributes } from "react";

interface IPropsCaptionCard extends HTMLAttributes<HTMLPictureElement> {
  ImgSource: string;
}

function CaptionCard({
  ImgSource,
  ...props
}: IPropsCaptionCard): React.ReactNode {
  return (
    <picture {...props}>
      <img
        src={ImgSource}
        alt=""
        className="rounded d-block w-100 object-fit-cover"
      />
      <h3>hola</h3>
    </picture>
  );
}

export default CaptionCard;
