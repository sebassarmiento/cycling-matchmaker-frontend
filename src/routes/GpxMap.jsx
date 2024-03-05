// Import necessary modules and styles
import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import gpxParser from 'gpxparser';

// Modify the GpxMap component
const GpxMap = () => {
  const [routeData, setRouteData] = useState(null);

  const handleFileSelect = async () => {
    try {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';

      fileInput.addEventListener('change', async (event) => {
        const file = event.target.files[0];

        if (file) {
          try {
            const reader = new FileReader();

            reader.onload = function (e) {
              const gpxContent = e.target.result;
              const parser = new gpxParser();
              parser.parse(gpxContent);

              // Extract required information from the parsed GPX data
              const routeInfo = {
                points: parser.tracks[0].points.map((point) => ({
                  lat: point.lat,
                  lon: point.lon,
                  ele: point.ele,
                })),
                elevation: parser.tracks[0].points.map((point) => ({
                  ele: point.ele,
                })),
                max_elevation: parser.tracks[0].elevation.max,
                min_elevation: parser.tracks[0].elevation.min,
                total_elevation_gain: parser.tracks[0].elevation.max - parser.tracks[0].elevation.min,

                startCoordinates: [parser.tracks[0].points[0].lat, parser.tracks[0].points[0].lon],
                endCoordinates: [
                  parser.tracks[0].points[parser.tracks[0].points.length - 1].lat,
                  parser.tracks[0].points[parser.tracks[0].points.length - 1].lon,
                ],
              };

              // Set the route data state
              setRouteData(routeInfo);

              // Now you can use routeInfo to create an event or perform other actions
              console.log('Route Information:', routeInfo);
            };

            reader.readAsText(file);
          } catch (error) {
            console.error('Error parsing GPX:', error);
          }
        }
      });

      fileInput.click();
    } catch (error) {
      console.error('Error loading GPX file:', error);
    }
  };

  if (!routeData) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={handleFileSelect}>Select GPX File</button>
      </div>
    );
  }

  // Render the map with the extracted route data
  return (
    <div style={{ textAlign: 'center' }}>
      <MapContainer
        center={routeData.startCoordinates}
        zoom={9}
        scrollWheelZoom={false}
        style={{ height: '300px', width: '250px', margin: '20px auto' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Polyline
          pathOptions={{ fillColor: 'red', color: 'blue' }}
          positions={routeData.points}
        />
      </MapContainer>
    </div>
  );
};

export default GpxMap;
