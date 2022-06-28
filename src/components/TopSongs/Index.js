
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './TopSongs.css';
import  {useNavigate}  from "react-router-dom";
import { useEffect, useState } from 'react';
import { FetchSongs } from '../../apiConfig/api';
import {Skeleton} from '@mui/material';
import Rating from '@mui/material/Rating';






const Index = () => {
    const Navigate = useNavigate();
    const [SongsData, setSongsData] = useState([]);
    const [loading,setloading] = useState(false);
    useEffect(() =>{

 FetchSongs().then((response) => 
 {
  setloading(true)
  let arr =[]
  let a = response.data.message;
  if(a)
  {
    for(let i = 0 ; i<= 10; i++) {
      if(a[i] === undefined)
      break
     arr.push(a[i])
  }
}
setSongsData(arr);
setloading(false);
console.log('Songs data', SongsData);
}
 )
    },[])
  console.log('SongsData =>', SongsData)
  return (
    <>
    <div className = 'Songs-heading' style ={{ display: 'flex', justifyContent: 'space-between', margin: `20px 0px 20px 0px`}}>
    <h1 >Top 10 Songs</h1>
    <Button variant="contained" onClick = {() => Navigate('/add-song')}><AddIcon style = {{ marginRight : `10px`}} />Add Song</Button>
     </div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow style = {{backgroundColor : `grey`}}>
          <TableCell align = 'left' >Artwork    </TableCell>
          <TableCell align="left">Song</TableCell>
          <TableCell align="center">Date of Release</TableCell>
          <TableCell align="center">Artist</TableCell>
          <TableCell align="center">Rate</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
            
      {SongsData .length > 0 ? (<>
              {!loading ? (<>
            {SongsData.map((row) => (
              <TableRow 
                key={row.SongName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                 <TableCell align="left">
                  <img src ={row.Artwork}></img>
                 </TableCell>
                 <TableCell component="th" scope="row" align='left'>
                  {row.SongName}
                </TableCell>
                <TableCell component="th" scope="row" align='center'>
                  {row.DateOfRelease.slice(0, 10)}
                </TableCell>
                <TableCell component="th" scope="row" align='center'>
                  {row.Artist}
                </TableCell>
                {/* <TableCell align="left">{row.dateOfbirth.slice(0, 10)}</TableCell> */}
                <TableCell align="center">
                <Rating name="read-only" value={row.Rating} readOnly />
                </TableCell>
               
              </TableRow>))}
          </>) : (<>
         <TableRow>
            <TableCell colSpan={3}>
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />

              <Skeleton animation="wave" />
              </TableCell> 
        
            </TableRow>
          </>)}</>):(<> <TableRow>
            <TableCell align = 'center' colspan = {5}>
              No Data Found 
            </TableCell>
            </TableRow></>)}
           
      </TableBody>
    </Table>
  </TableContainer>
  </>
  )
}

export default Index