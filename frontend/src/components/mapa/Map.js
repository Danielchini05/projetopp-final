import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import marcador from "../../assets/marcador.png"

const Map = () => {
  const mapRef = useRef(null);
  

  const locations = [
    { name: "Fashion Outlet Novo Hamburgo", lat: -29.664539166913862, lon: -51.141864779604965 },
    { name: "Hotel Swan Novo Hamburgo", lat: -29.675837354489673, lon: -51.11299949423229},
    { name: "Selet Iluminação", lat: -29.681604750336117, lon: -51.122410177836954},
    { name: "Excelsior Pneus", lat: -29.693018270968054, lon: -51.12894254548885},
    { name: "Savarauto Jeep", lat: -29.711484728863407, lon: -51.146554663285016}, 
    { name: "Iesa Bmw", lat: -29.710009801577712, lon: -51.146922451078694},
    { name: "QSI Engenharia Elétrica", lat: -29.71238435761904, lon: -51.1415018461397},
    { name: "Garfão", lat: -29.712253930113203, lon: -51.136392094703695},
    { name: "Valencia Energia Sustentável", lat: -29.77219419654456, lon: -51.15275486260122},
    { name: "Macromix Atacado", lat: -29.787160293173947, lon: -51.14450515650238},
    { name: "Barber House Barbearia", lat: -29.818895107590993, lon: -51.15007694638726},
    { name: "Cassol", lat: -29.905105644576732, lon: -51.163960604143625},
    { name: "Ibis Canoas Shopping", lat: -29.91079015427316, lon: -51.184361404856205},
    { name: "Park Canoas Shopping", lat: -29.915650955962978, lon: -51.164780829416806},
    { name: "Rissul", lat: -29.937380721409077, lon:-51.17530817726318},
    { name: "Cubo Self Storage", lat: -29.964065516082552, lon: -51.177074429909574},

  ];

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map("map").setView([-30.0346, -51.2177], 7);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      mapRef.current = map;

      const customIcon = L.icon({
        iconUrl: marcador, // Substitua pelo caminho da sua imagem
        iconSize: [38, 32],
        iconAnchor: [16, 32],
      });

      // Adicione marcadores com o ícone personalizado
      locations.forEach((location) => {
        L.marker([location.lat, location.lon], { icon: customIcon })
          .addTo(map)
          .bindPopup(location.name);
      });
    }
  }, [locations]);

  return <div id="map" style={{ width: "100%", height: "90vh" }}></div>;
};

export default Map;
