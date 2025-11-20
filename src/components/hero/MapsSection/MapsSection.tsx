'use client';

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";

const POSITION: LatLngTuple = [-8.6538302, 115.1538869];

const CUSTOM_MARKER = new Icon({
  iconUrl: "/icon.png", // from public folder
  iconSize: [108, 108],
  iconAnchor: [16, 32],
});

export default function MapsSection() {
  return (
    <MapContainer
      center={POSITION}
      zoom={15}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={POSITION} icon={CUSTOM_MARKER}>
        <Popup>Kaulu Concept HQ Office</Popup>
      </Marker>
    </MapContainer>
  );
}
