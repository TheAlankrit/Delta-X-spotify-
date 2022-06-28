import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddSong from "./pages/AddSong";
import './App.css'

function App() {
  return (
    
<BrowserRouter>
<Routes>
  <Route path = '/' element = {<Home/>}></Route>
  <Route path = '/add-song' element = {<AddSong/>}></Route>
</Routes>

</BrowserRouter>


    );
}

export default App;
