import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Container, Box } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <div className='Navbar' style= {{ height: '70px', backgroundColor: 'grey'}}>
    <Container style= {{display: 'flex', justifyContent: 'space-between', textAlign :`center`, alignItems :'center', height : `100%`}}>
      <div className='Title'>
         <Link to = '/' style= {{ textDecoration : `none`, color :`black`, fontSize :`20px`, backgroundColor :`white`, padding : `10px`}}>Home</Link>
      </div>
      <div className='Search-bar'>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField className = 'Search-Textfield' id="input-with-sx" label="Search" variant="standard" />
      </Box>
      </div>
    </Container>
    </div>
    </>
  )
}

export default Navbar