"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Home() {

  useEffect(() => {

    const map = L.map("map").setView([38.4780, -0.7970], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(map);

    const bares = [
      { nombre:"O'Sullivan", coords:[38.4780,-0.7970] },
      { nombre:"Bar Diego", coords:[38.4783,-0.7965] },
      { nombre:"Taberna de Karlos", coords:[38.4786,-0.7960] },
      { nombre:"Bar La Tasca del Pive", coords:[38.4790,-0.7968] },
      { nombre:"Cervecería Enrique", coords:[38.4775,-0.7980] },
      { nombre:"Bar Ca Tomás", coords:[38.4768,-0.7975] },
      { nombre:"Cervecería Bar Llopis", coords:[38.4788,-0.7978] }
    ];

    bares.forEach(bar => {
      L.marker(bar.coords)
        .addTo(map)
        .bindPopup(`<b>${bar.nombre}</b><br/>🔒 Check solo con QR`);
    });

  }, []);

  return (
    <div>
      <h1 style={{textAlign:"center"}}>🍻 Ruta de Bares – Petrer</h1>
      <p style={{textAlign:"center"}}>
        El check-in solo se puede realizar escaneando el QR del bar.
      </p>
      <div id="map" style={{height:"80vh"}}></div>
    </div>
  );
}
