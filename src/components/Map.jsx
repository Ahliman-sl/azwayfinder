/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

const center = {
  lat: 40.4093, // Baku, Azerbaijan'ın koordinatları
  lng: 49.8671,
};

function Routing({ startCoordinates, endCoordinates, onRouteCalculated }) {
  const map = useMap();

  useEffect(() => {
    if (!startCoordinates || !endCoordinates) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(startCoordinates.lat, startCoordinates.lng),
        L.latLng(endCoordinates.lat, endCoordinates.lng),
      ],
      createMarker: () => null, // Markerları gizlemek için
      routeWhileDragging: false,
      show: false, // Kontrol panelini gizlemek için
      addWaypoints: false, // Kullanıcının waypoint eklemesini engellemek için
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      lineOptions: {
        styles: [{ color: "blue", opacity: 1, weight: 2 }],
      },
    }).addTo(map);

    routingControl.on("routesfound", function (e) {
      const routes = e.routes;
      if (routes.length > 0) {
        const route = routes[0];
        const distance = route.summary.totalDistance / 1000; // Kilometreye çevir
        const duration = route.summary.totalTime / 60; // Dakikaya çevir
        onRouteCalculated(distance.toFixed(2), duration.toFixed(2)); // Mesafe ve süreyi üst bileşene ilet
      }
    });

    return () => {
      map.removeControl(routingControl);
    };
  }, [startCoordinates, endCoordinates, map, onRouteCalculated]);

  return null;
}

function Map({
  startCoordinates,
  endCoordinates,
  startCity,
  endCity,
  onRouteCalculated,
}) {
  return (
    <MapContainer center={center} zoom={7} className="w-full h-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {startCoordinates && (
        <Marker position={startCoordinates}>
          {" "}
          <Popup>{startCity}</Popup>
        </Marker>
      )}
      {endCoordinates && (
        <Marker position={endCoordinates}>
          <Popup>{endCity}</Popup>
        </Marker>
      )}
      {startCoordinates && endCoordinates && (
        <Routing
          startCoordinates={startCoordinates}
          endCoordinates={endCoordinates}
          onRouteCalculated={onRouteCalculated}
        />
      )}
    </MapContainer>
  );
}

export default Map;
