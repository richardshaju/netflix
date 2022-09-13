import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import '../App.css'
import Banner from '../Components/Banner/Banner';
import RowPost from '../Components/RowPost/RowPost';
import Footer from '../Components/Footer/Footer';
import {
  originals,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
} from '../urls'
function Home() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Orginals' />
      <RowPost url={actionMovies} title='Action Movies' />
      <RowPost url={comedyMovies} title='Comedy Movies' />
      <RowPost url={horrorMovies} title='Horror Movies' />
      <RowPost url={documentaries} title='Animation' />
      <RowPost url={romanceMovies} title='Romance Movies' />
      <Footer/>
    </div>
  );
}

export default Home;
