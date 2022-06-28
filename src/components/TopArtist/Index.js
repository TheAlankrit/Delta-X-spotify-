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
import './TopArtist.css';
import { useEffect } from 'react';
import { FetchArtist, FetchSongs } from '../../apiConfig/api';
import { useState } from 'react';
import { Skeleton } from '@mui/material';

const Index = () => {
  const [ArtistData, setArtistData] = useState([]);
  const [SongData, setSongData] = useState([]);
  const [loading, setloading] = useState(false);
  const [particularSong, SetParticularsong] = useState();
  useEffect(() => {
    FetchSongs().then((response) => {
      setSongData(response.data.message);
    })
    setloading(true)
    FetchArtist().then((response) => {
      let arr = [];
      let a = response.data.message
      if (a) {
        for (let i = 0; i <= 10; i++) {
          if (a[i] === undefined)
            break
          arr.push(a[i])
        }
      }
      setArtistData(arr)
      setloading(false)
    })


  }, [])

  let data1 = ArtistData.map((ele) => ele.ArtistName);

  let data2 = SongData.filter((item) => data1.includes(item.Artist));

  const columns = [
    { label: 'Artist', id: 'artist' },
    { label: 'Date of Birth', id: '' },
    { label: 'Songs' },
  ]


  const rows = ArtistData.map((item, index) => ({
    ArtistName: item.ArtistName,
    dateOfbirth: item.dateOfbirth,
    Songs: SongData.map(ele => ele.Artist === item.ArtistName && ele.SongName).filter(Boolean)
  }
  ))
  console.log('rows =>>', rows);

  return (
    <>
      <div className='Songs-heading' style={{ display: 'flex', justifyContent: 'space-between', margin: `20px 0px 20px 0px` }}>
        <h1 >Top 10 Artist</h1>

      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: `grey` }}>
              {columns.map(column => (
                <TableCell align='left' >{column.label} </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>

            {rows.length > 0 && rows.length > 0 ? (<>
              {!loading ? (<>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align='left'>
                      {row.ArtistName}
                    </TableCell>
                    <TableCell align="left">{row.dateOfbirth.slice(0, 10)}</TableCell>
                    <TableCell component="th" scope="row" align='left'>
                      {row.Songs.length === 0 ? '-' : row.Songs.join(' , ')}
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
              </>)}</>) : (<> <TableRow>
                <TableCell align='center' colspan={3}>
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