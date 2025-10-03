import Button from "@mui/material/Button"; 
import Logo from "../Components/Logo";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Badge from "@mui/material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import ProductsDropdown from "../Components/ProdutsDropdown";
import Select from "@mui/material/Select"; 
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [navOption, setNavOption] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavChange = (e) => {
    const value = e.target.value;
    setNavOption(value);
    if (value) navigate(value);
  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleFeaturesClick = () => {
    if (location.pathname === "/home") {
      const element = document.getElementById("features-section");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/home", { state: { scrollToFeatures: true } });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black px-4 py-2 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex items-center justify-between w-full sm:w-auto gap-4">
        <Link to="/home"><Logo /></Link>
        <nav className="hidden sm:flex items-center gap-4 md:gap-6">
          <Link to="/home"><Button variant="text">Home</Button></Link>
          <Link to="/aboutUs"><Button variant="text">About Us</Button></Link>

          <div onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)} className="relative">
            <Button variant="text">Products <KeyboardArrowDownIcon /></Button>
            {showDropdown && <div className="absolute top-full right-0 z-50 pt-2"><ProductsDropdown /></div>}
          </div>

          <Button variant="text" onClick={handleFeaturesClick}>
            Features
          </Button>

          <Select
            value={navOption}
            onChange={handleNavChange}
            displayEmpty
            sx={{
              minWidth: 160,
              height: "36px",
              color: "blue",
              bgcolor: "transparent",
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              "&:hover": { bgcolor: "transparent" },
              "& .MuiSvgIcon-root": { color: "black" },
            }}
          >
            <MenuItem value=""><em>Quick Actions</em></MenuItem>
            <MenuItem value="/createMeeting">Create Meeting</MenuItem>
            <MenuItem value="/dashboard">Dashboard</MenuItem>
            <MenuItem value="/invitationList">Invitation List</MenuItem>
          </Select>
        </nav>
      </div>

      <div className="flex items-center gap-4 mt-2 sm:mt-0">
        <Link to="/subscription">
          <Badge
            badgeContent="Pro"
            color="success"
            overlap="rectangular"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Logo />
          </Badge>
        </Link>

        <AccountCircleIcon
          fontSize="large"
          className="cursor-pointer"
          onClick={handleMenuOpen}
        />
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={() => { handleMenuClose(); navigate("/profile"); }}>Profile</MenuItem>
          <MenuItem onClick={() => { handleMenuClose(); navigate("/dashboard"); }}>Dashboard</MenuItem>
          <MenuItem onClick={() => { handleMenuClose(); navigate("/settings"); }}>Settings</MenuItem>
          <MenuItem onClick={() => { handleMenuClose(); navigate("/logout"); }}>Logout</MenuItem>
        </Menu>
      </div>
    </header>
  );
}
