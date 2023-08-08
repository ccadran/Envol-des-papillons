import React from "react";
import "styles/ecole&college/shared/_schoolRoad.scss";

const SchoolRoad = ({ text }) => {
  return (
    <section className="school-way">
      <h3>Se rendre à l'école</h3>
      <p>{text}</p>
      <div className="school-road">
        <iframe
          width="100%"
          height="500"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=122%20cours%20journu%20auber+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </section>
  );
};

export default SchoolRoad;

// import React, { useEffect, useState } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const MapContainer = () => {
//   const [map, setMap] = useState(null);
//   const position = { lat: -25.344, lng: 131.031 };

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   const options = {
//     mapId: "DEMO_MAP_ID",
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyCAP99DJFcT1C1v2i5aNip7Fji1oxdH6E8">
//       <GoogleMap
//         mapContainerStyle={{ height: "400px", width: "100%" }}
//         center={position}
//         zoom={4}
//         onLoad={onLoad}
//         options={options}
//       >
//         {map && <Marker position={position} title="Uluru" map={map} />}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapContainer;
