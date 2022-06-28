import React from 'react';
import { Container } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Box } from '@mui/material';
import { PostSong } from '../apiConfig/api';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import './index.css'
import { Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import Navbar from '../components/Navbar/Index'
import { PostArtist } from '../apiConfig/api';
import { useEffect } from 'react';
import { FetchArtist } from '../apiConfig/api';
import Modal from '../components/Modals/Index'
// import Navbar from '../components/Navbar';

const ITEM_HEIGHT = 40
const ITEM_PADDING_TOP = 8
const MenuProps = { PaperProps: { style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 200 } }, getContentAnchorEl: null }


const AddSong = () => {

    const Navigate = useNavigate()
    const [SongName, setSongName] = useState('');
    const [DateReleased, setDateReleased] = useState('');
    const [Artwork, setArtwork] = useState('');
    const [Artist, setArtist] = useState('');
    const [Rating, setRating] = useState('');
    const [ArtistName, setArtistName] = useState('');
    const [birthdate, setbirthdate] = useState('');
    const [bio, setBio] = useState('');
    const [songs,setsongs] = useState('');
    const [Allartistname, setallArtistname] = useState();
    const [open_Modal, setOpenModal] = useState(false);

    const ArtistData = {
        "ArtistName": ArtistName,
        "dateOfbirth": birthdate,
        "Bio": bio,
        "Songs" : songs
    }
    const SongData = {
        "SongName": SongName,
        "DateOfRelease": DateReleased,
        "Artwork": Artwork,
        "Artist": Artist,
        "Rating": Rating
    }
    useEffect(() => {
        FetchArtist().then((response) => { setallArtistname(response.data.message) });
    }, [setallArtistname, setOpenModal, open_Modal])
    const SaveSong = () => {
        if (SongName === '' || DateReleased === '' || Artwork === "" || Artist === "" || Rating === "") {
            alert('Please fill all details');
        }
        else {
            PostSong(SongData).then((response) => { console.log(response) })
            Navigate('/')
        }
    }
    const SumbitArtist = () => {

        if (ArtistData.ArtistName === '' || ArtistData.dateOfbirth === '') {
            alert('Please Fill all details')
        }
        else {

            PostArtist(ArtistData).then((response) => { console.log(response) })
            setArtistName('')
            setbirthdate('')
            setBio('')
            setOpenModal(false);
        }

    }
    return (
        <div>
            <Navbar />
            <Container>
                <h1 style={{ marginBottom: `50px` }}>Add a new Song</h1>
                <div style={{ display: 'flex', width: `50%`, justifyContent: 'space-between', marginBottom: `40px`, alignItems: 'center' }}>
                    <h3>Song Name</h3>
                    <TextField varaint='outlined' onChange={(e) => setSongName(e.target.value)} />
                </div>
                <div style={{ display: 'flex', width: `50%`, justifyContent: 'space-between', marginBottom: `40px`, alignItems: 'center' }}>
                    <h3>Date Released</h3>
                    {/* <TextField varaint='outlined' onChange={(e) => setDateReleased(e.target.value)} /> */}
                    <input style={{ marginTop: `10px`, width: `38%`, border: '2px solid lightgrey', borderRadius: `4px`, height: `30px` }} type="date" id="start" name="trip-start" min="1800-06-23" max="2022-07-26" onChange={(e) => setDateReleased(e.target.value)}></input>
                </div>
                <div style={{ display: 'flex', width: `50%`, justifyContent: 'space-between', marginBottom: `40px`, alignItems: 'center' }}>
                    <h3>Artwork</h3>
                    <TextField varaint='outlined' type='file' style={{ width: `38%` }} onChange={(e) => setArtwork(e.target.value)} />
                </div>
                <div style={{ display: 'flex', width: `70%`, justifyContent: 'space-between', marginBottom: `40px`, alignItems: 'center' }}>
                    <h3>Artist</h3>
                    <div style={{ display: `flex`, width: `56%` }}>            <TextField
                        className="Textfield"
                        id="outlined-basic"
                        label="Search"
                        select
                        variant="outlined"


                        // value={HandleSignUp.values.CompanyIndustry}
                        // onChange={HandleSignUp.handleChange}
                        fullWidth
                        SelectProps={{ MenuProps }}
                        onChange={(e) => setArtist(e.target.value)}
                        style={{ width: `49%` }}


                    >
                        {Allartistname ? (Allartistname.map((option) => (<MenuItem key={option.id} value={option.ArtistName}>
                            {option.ArtistName}
                        </MenuItem>))) : (<MenuItem>
                            No Data Found
                        </MenuItem>)}
                    </TextField>
                        <Button variant="contained" style={{ height: `38px`, margin: `10px` }} onClick={() => setOpenModal(true)}><AddIcon style={{ marginRight: `10px` }} />Add Artist</Button>
                    </div>
                 
                    <Modal open={open_Modal}>
                       
                            <Box style={{ height: `fit-content`, width: `50%`, backgroundColor: 'white' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h3 style={{ margin: `10px` }}>Add Artist</h3>
                                    <CloseIcon style={{ cursor: `pointer`, margin: `10px` }} onClick={() => setOpenModal(false)} />
                                </div>
                                <Divider />
                                <div style={{ display: 'flex', width: `50%`, justifyContent: 'space-between', margin: `40px`, alignItems: 'center' }}>
                                    <h3>Artist Name</h3>
                                    <TextField varaint='outlined' onChange={(e) => setArtistName(e.target.value)} />
                                </div>
                                <div style={{ display: 'flex', width: `50%`, justifyContent: 'space-between', margin: `40px`, alignItems: 'center' }}>
                                    <h3>Date of Birth</h3>
                                    <input style={{ marginTop: `10px`, width: `57%`, border: '2px solid lightgrey', borderRadius: `4px`, height: `30px` }} type="date" id="start" name="trip-start" min="1800-06-23" max="2022-07-26" onChange={(e) => setbirthdate(e.target.value)}></input>
                                </div>
                                <div style={{ display: 'flex', width: `50%`, justifyContent: 'space-between', margin: `40px`, alignItems: 'center' }}>
                                    <h3>Bio</h3>
                                    <TextField varaint='outlined' className='Bio-Textfield'
                                        multiline
                                        row={1}
                                        width={57}  
                                        onChange={(e) => setBio(e.target.value)}
                                        inputProps={{
                                            style: {
                                                height: `100px`,
                                            },
                                        }} />
                                </div>
                                {/* <div style={{ display: 'flex', width: `50%`, justifyContent: 'space-between', margin: `40px`, alignItems: 'center' }}>
                                    <h3>Songs Released</h3>
                                    <TextField varaint='outlined' className='Bio-Textfield'
                                        multiline
                                        row={1}
                                        width='57%'
                                        onChange={(e) => setsongs(e.target.value)}
                                        inputProps={{
                                            style: {
                                                height: `100px`,
                                            },
                                        }} />
                                </div> */}

                                <div style={{ display: 'flex', width: `40%`, justifyContent: 'space-around', margin: `40px 0px `, float: 'right' }}>
                                    <Button variant="contained" onClick={() => setOpenModal(false)} style={{ marginRight: `10px` }}>Cancel</Button>
                                    <Button variant="contained" onClick={SumbitArtist}>Done</Button>

                                </div>

                            </Box>
                       
                    </Modal>

                </div>


                <div style={{ display: 'flex', width: `50%`, justifyContent: 'space-between', marginBottom: `40px`, alignItems: 'center' }}>
                    <h3>Rating</h3>
                    <TextField
                        className="Textfield"
                        id="outlined-basic"
                        label="Rating"
                        select
                        variant="outlined"
                        fullWidth
                        SelectProps={{ MenuProps }}
                        onChange={(e) => setRating(e.target.value)}
                        style={{ width: `38%` }}

                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </TextField>
                </div>
                <div style={{ display: 'flex', width: `30%`, justifyContent: 'space-between', marginBottom: `40px` }}>
                    <Button variant="contained" onClick={() => Navigate('/')}>Cancel</Button>
                    <Button variant="contained" onClick={SaveSong}>Save</Button>
                </div>
            </Container>
        </div>

    )
}

export default AddSong