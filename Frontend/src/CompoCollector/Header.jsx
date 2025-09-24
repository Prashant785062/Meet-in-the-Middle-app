import Button from '@mui/material/Button';
import Logo from '../Components/Logo'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';


export default function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white text-black border-b border-black px-4 py-2">

      <Link to='/'>
        <Logo />
      </Link>



      <nav className="mr-140 mt-1">
        <Link to='/'>
          <Button variant="text">Home</Button>
        </Link>
        <Link to='/aboutUs'>
          <Button variant="text">About Us</Button>
        </Link>
        <Button variant="text">Products <KeyboardArrowDownIcon /> </Button>
        <Button variant="text">Features</Button>
      </nav>

      <Link to='/subscription'>
        <Badge badgeContent="Pro"
          color="success"
          overlap="rectangular"
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Logo />
        </Badge>
      </Link>

      {!isLoggedIn && (

      <div className="flex mt-1">
        <Link to='/signin'>
          <Button variant="text">Sign in</Button>
        </Link>
        <Link to='/signup'>
          <Button variant="text">Sign up</Button>
        </Link>
      </div>
      )}

      <AccountCircleIcon fontSize="large" />


    </header>
  );
}
