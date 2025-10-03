import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Card, CardContent, Typography, Button, Grid, Box } from "@mui/material";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const calculateMidpoint = (locations) => {
  const sumLat = locations.reduce((acc, loc) => acc + loc.lat, 0);
  const sumLng = locations.reduce((acc, loc) => acc + loc.lng, 0);
  return { lat: sumLat / locations.length, lng: sumLng / locations.length };
};

const calculateDistance = (loc1, loc2) => {
  const R = 6371;
  const dLat = ((loc2.lat - loc1.lat) * Math.PI) / 180;
  const dLng = ((loc2.lng - loc1.lng) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((loc1.lat * Math.PI) / 180) *
      Math.cos((loc2.lat * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(2);
};

const randomizeAttendees = (attendees) =>
  attendees.map((att) => ({ ...att, lat: att.lat + (Math.random() - 0.5) * 0.2, lng: att.lng + (Math.random() - 0.5) * 0.2 }));

const generateNearbyPlaces = (point, count = 3) =>
  Array.from({ length: count }, (_, i) => ({
    lat: point.lat + (Math.random() - 0.5) * 0.01,
    lng: point.lng + (Math.random() - 0.5) * 0.01,
    name: `Place ${i + 1}`,
    type: ["Cafe", "Restaurant", "Park"][i % 3],
  }));

function MapPan({ target }) {
  const map = useMap();
  useEffect(() => {
    if (target) map.flyTo([target.lat, target.lng], 8, { duration: 1.5 });
  }, [target, map]);
  return null;
}

export default function MeetingLocationMUI() {
  const [userLocation, setUserLocation] = useState(null);
  const [mockAttendees, setMockAttendees] = useState([
    { lat: 19.076, lng: 72.8777, name: "Mumbai User" },
    { lat: 28.7041, lng: 77.1025, name: "Delhi User" },
    { lat: 12.9716, lng: 77.5946, name: "Bangalore User" },
  ]);
  const [suggestions, setSuggestions] = useState([]);
  const [places, setPlaces] = useState([]);
  const [highlightedSuggestion, setHighlightedSuggestion] = useState(null);

  const fetchUserLocation = () => {
    if (!navigator.geolocation) return alert("Geolocation not supported.");
    navigator.geolocation.getCurrentPosition(
      (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude, name: "You" }),
      (err) => alert(err.message)
    );
  };

  const generateSuggestions = () => {
    if (!userLocation) return;
    const allLocations = [...mockAttendees, userLocation];
    const midpoint = calculateMidpoint(allLocations);
    const alternatives = [
      { lat: midpoint.lat + 0.02, lng: midpoint.lng + 0.02 },
      { lat: midpoint.lat - 0.02, lng: midpoint.lng - 0.02 },
    ];
    const newSuggestions = [
      { ...midpoint, name: "Midpoint" },
      ...alternatives.map((alt, i) => ({ ...alt, name: `Alternative ${i + 1}` })),
    ];
    setSuggestions(newSuggestions);
    setPlaces(newSuggestions.flatMap((sug) => generateNearbyPlaces(sug, 3)));
  };

  useEffect(() => { if (userLocation) generateSuggestions(); }, [userLocation, mockAttendees]);

  const refreshAttendees = () => setMockAttendees(randomizeAttendees(mockAttendees));

  return (
    <Card className="max-w-[95%] mx-auto p-4 my-6 bg-white shadow-md">
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Meeting Location Map
        </Typography>

        <Box className="flex flex-col sm:flex-row justify-center gap-2 mb-4">
          <Button variant="contained" color="primary" onClick={fetchUserLocation} className="mb-2 sm:mb-0">
            Fetch My Location
          </Button>
          <Button variant="outlined" color="secondary" onClick={refreshAttendees}>
            Refresh Attendees
          </Button>
        </Box>

        {userLocation && (
          <Typography align="center" mb={2}>
            Your Location: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
          </Typography>
        )}

        {userLocation && (
          <div className="w-full h-[400px] sm:h-[450px] mb-4 rounded overflow-hidden">
            <MapContainer center={[userLocation.lat, userLocation.lng]} zoom={4} scrollWheelZoom style={{ height: "100%", width: "100%" }}>
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {mockAttendees.map((att, i) => <Marker key={i} position={[att.lat, att.lng]}><Popup>{att.name}</Popup></Marker>)}
              <Marker position={[userLocation.lat, userLocation.lng]}><Popup>{userLocation.name}</Popup></Marker>
              {suggestions.map((sug, i) => (
                <Marker key={i} position={[sug.lat, sug.lng]} opacity={highlightedSuggestion?.name === sug.name ? 1 : 0.7}>
                  <Popup>{sug.name}</Popup>
                </Marker>
              ))}
              {userLocation && suggestions.map((sug, i) => <Polyline key={i} positions={[[userLocation.lat, userLocation.lng], [sug.lat, sug.lng]]} color={i === 0 ? "green" : "blue"} />)}
              {places.map((place, i) => <Marker key={`place-${i}`} position={[place.lat, place.lng]}><Popup>{place.name} ({place.type})</Popup></Marker>)}
              {highlightedSuggestion && <MapPan target={highlightedSuggestion} />}
            </MapContainer>
          </div>
        )}

        <Grid container spacing={2}>
          {suggestions.map((sug, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card
                className={`p-3 cursor-pointer ${highlightedSuggestion?.name === sug.name ? "bg-green-100" : "bg-green-50"}`}
                onMouseEnter={() => setHighlightedSuggestion(sug)}
                onMouseLeave={() => setHighlightedSuggestion(null)}
              >
                <Typography variant="subtitle1" align="center" gutterBottom>{sug.name}</Typography>
                <Typography align="center">Lat: {sug.lat.toFixed(4)}, Lng: {sug.lng.toFixed(4)}</Typography>
                {userLocation && <Typography align="center">Distance: {calculateDistance(userLocation, sug)} km</Typography>}
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
