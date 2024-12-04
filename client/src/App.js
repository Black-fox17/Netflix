import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Home,
  Signin,
  MovieDetail,
  MovieList,
  ProfileList,
  ProfileCreate,
  ShowMovie,
  Signup
} from "./pages";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Signin />}/>
        <Route path='/signup' element = {<Signup />}/>
        <Route path='/profilelist' element = {<ProfileList />}/>
        <Route path="/moviedetail" element={<MovieDetail />}/>
        <Route path="/MovieList" element={<MovieList />}/>
        <Route path="/profielcreate" element={<ProfileCreate />}/>
        <Route path="/showmovie" element={<ShowMovie />}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
