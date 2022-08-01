import React from "react";
import { MapDiv } from "./map.style";

const MapComponent = () => {
  return (
    <MapDiv>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7372126135087!2d7.461570514363304!3d8.996311093543516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ce9730fb807%3A0x1793e8c82a5c3f1e!2s33%20Democracy%20Cres%2C%20900110%2C%20Abuja!5e0!3m2!1sen!2sng!4v1659276653675!5m2!1sen!2sng"
        width="100%"
        height="450"
        style={{ border: 0 }}
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </MapDiv>
  );
};

export default MapComponent;
