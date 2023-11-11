import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div
      onClick={() => {
        window.open("https://twitter.com", "_blank");
      }}
    >
      <BsTwitter />
    </div>
    <div
      onClick={() => {
        window.open("https://facebook.com", "_blank");
      }}
    >
      <FaFacebookF />
    </div>
    <div
      onClick={() => {
        window.open("https://instagram.com", "_blank");
      }}
    >
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
