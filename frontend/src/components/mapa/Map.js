import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Importe o CSS do Leaflet
import marcador from "../../assets/marcador.png";
import CommentForm from "../comentarios/CommentForm"; // Certifique-se de importar o componente CommentForm
import Modal from 'react-modal';

const Map = () => {
  const mapRef = useRef(null);
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  const [isCommentVisible, setCommentVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [comments, setComments] = useState({}); // Inicialize comments como um objeto vazio

  // Função para adicionar um comentário
  function addComment(comment) {
    if (selectedLocation) {
      setComments({
        ...comments,
        [selectedLocation.name]: [...(comments[selectedLocation.name] || []), comment],
      });
      setCommentVisible(false);
    }
  }

  useEffect(() => {
    const locations = [
      { name: "Fashion Outlet Novo Hamburgo", lat: -29.664539166913862, lon: -51.141864779604965 },
      { name: "Hotel Swan Novo Hamburgo", lat: -29.675837354489673, lon: -51.11299949423229 },
      { name: "Selet Iluminação", lat: -29.681604750336117, lon: -51.122410177836954 },
      { name: "Excelsior Pneus", lat: -29.693018270968054, lon: -51.12894254548885 },
      { name: "Savarauto Jeep", lat: -29.711484728863407, lon: -51.146554663285016 },
      { name: "Iesa Bmw", lat: -29.710009801577712, lon: -51.146922451078694 },
      { name: "QSI Engenharia Elétrica", lat: -29.71238435761904, lon: -51.1415018461397 },
      { name: "Garfão", lat: -29.712253930113203, lon: -51.136392094703695 },
      { name: "Valencia Energia Sustentável", lat: -29.77219419654456, lon: -51.15275486260122 },
      { name: "Macromix Atacado", lat: -29.787160293173947, lon: -51.14450515650238 },
      { name: "Barber House Barbearia", lat: -29.818895107590993, lon: -51.15007694638726 },
      { name: "Cassol", lat: -29.905105644576732, lon: -51.163960604143625 },
      { name: "Ibis Canoas Shopping", lat: -29.91079015427316, lon: -51.184361404856205 },
      { name: "Park Canoas Shopping", lat: -29.915650955962978, lon: -51.164780829416806 },
      { name: "Rissul", lat: -29.937380721409077, lon: -51.17530817726318 },
      { name: "Cubo Self Storage", lat: -29.964065516082552, lon: -51.177074429909574 },
    ];

    // Função para exibir o formulário de comentários
    function showComments(location) {
      setSelectedLocation(location);
      setCommentVisible(true);
    }

    if (!mapRef.current) {
      const map = L.map("map").setView([-30.0346, -51.2177], 7);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      mapRef.current = map;

      const customIcon = L.icon({
        iconUrl: marcador,
        iconSize: [38, 32],
        iconAnchor: [16, 32],
      });

      locations.forEach((location) => {
        const content = 
          `<div> 
            <strong>${location.name}</strong><br>
            <a onClick=${openModal}>Adicionar Comentário</a>
          </div>`
        ;

        //` + onClick={() => showComments(location)} +`

        L.marker([location.lat, location.lon], { icon: customIcon })
          .addTo(map)
          .bindPopup(content);
      });
    }
  }, [comments]);

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "90vh"}}></div>
      {isCommentVisible && selectedLocation && (
        <div className="comment-form">
          <h3>Adicionar Comentário para {selectedLocation.name}</h3>
          <CommentForm onSubmit={addComment} /> {/* Renderize o componente CommentForm */}
          {comments[selectedLocation.name] && (
            <div>
              <h4>Comentários:</h4>
              <ul>
                {comments[selectedLocation.name].map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}        
        contentLabel="Example Modal"
      >
        
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input type={Text}></input>
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>

    </div>

    
  );
};

export default Map;
