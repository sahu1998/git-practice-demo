import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Shows from './components/Shows';
import CardCareusol from './components/Shows/cardCareusol';
import popular from 'S:/frontend/react_learning/netflix-clone/src/components/Shows/popular.json';
import toprated from 'S:/frontend/react_learning/netflix-clone/src/components/Shows/toprated.json';
import Footer from './components/Footer';
import Navbar from './components/Navbar/test';


function App() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <div style={{ position: "relative" }}>
        <Navbar />
        <Banner />
      </div>
      <CardCareusol category="POPULAR" shows={popular} />
      <CardCareusol category="TOP RATED" shows={toprated} />
      <CardCareusol category="HIGHEST GROSSING" shows={popular} />
      <CardCareusol category="NEW RELEASES" shows={popular} />
      <CardCareusol category="MOST LIKED" shows={popular} />
      <CardCareusol category="TRENDING NOW" shows={popular} />

      <Footer />


    </div>
  );
}

export default App;
