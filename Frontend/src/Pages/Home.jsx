import { Link } from 'react-router-dom';
import Testimonials from "../CompoCollector/Testimonials";
import Button from "@mui/material/Button";
import Features from '../Components/Features';
import { Box, Typography, Container } from "@mui/material";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Slider from "react-slick"; // for image carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";



delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const mockUser = { lat: 19.0537, lng: 72.9106, name: "You" };
const mockMidpoint = { lat: 19.9514, lng: 75.1214, name: "Midpoint" };
 
const slides = [
  {
    image: i2,
    title: "Bring people together effortlessly",
    subtitle: "Easily create and organize meetings with friends or colleagues",
    buttons: [
      { text: "Create Meeting", link: "/createmeeting" }
    ]
  },
  {
    image: i1,
    title: "Find the perfect midpoint",
    subtitle: "Our smart algorithm suggests the best meeting point for everyone",
    buttons: [
      { text: "Try Map Preview", link: "/map" }
    ]
  },
  {
    image: i3,
    title: "Stay in control of your meetings",
    subtitle: "Manage invitations, attendees, and meeting details with ease",
    buttons: [
      { text: "Dashboard", link: "/dashboard" }
    ]
  },
  {
    image: i4,
    title: "This part isn't ready yet",
    subtitle: "Due to some errors",
    buttons: [
      { text: "Try Notes", link: "/notes" }
    ]
  }
];

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  };

  return (
    <>
      <Box sx={{ position: "relative", height: "900px", mb: 10 }}>
        <Slider {...sliderSettings}>
          {slides.map((slide, idx) => (
            <Box
              key={idx}
              sx={{
                height: "900px",
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "30%",
                  left: "5%",
                  color: "white",
                  zIndex: 2,
                  maxWidth: "500px"
                }}
              >
                <Typography variant="h3" gutterBottom>
                  {slide.title}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {slide.subtitle}
                </Typography>
                <Box className="flex flex-row gap-4 mt-4">
                  {slide.buttons.map((btn, i) => (
                    <Link key={i} to={btn.link}>
                      <Button variant="contained" color="primary">
                        {btn.text}
                      </Button>
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>

      <Features />

      <Testimonials />

      <Box id="map-preview"  sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Map Preview
        </Typography>
        <Typography variant="body2" align="center" mb={2}>
          Mock user location & midpoint
        </Typography>
        <Container sx={{ height: 400 }}>
          <MapContainer
            center={[mockUser.lat, mockUser.lng]}
            zoom={5}
            scrollWheelZoom
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[mockUser.lat, mockUser.lng]}>
              <Popup>{mockUser.name}</Popup>
            </Marker>
            <Marker position={[mockMidpoint.lat, mockMidpoint.lng]}>
              <Popup>{mockMidpoint.name}</Popup>
            </Marker>
          </MapContainer>
        </Container>
      </Box>
    </>
  );
}
