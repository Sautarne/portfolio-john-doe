import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/general/Navigation.jsx';
import Accueil from './pages/Accueil/Accueil.jsx';
import Services from './pages/Services/Services.jsx';
import Realisations from './pages/Réalisations/Réalisations.jsx';
import Blog from './pages/Blog/Blog.jsx';
import MeContacter from './pages/Me contacter/Me contacter.jsx';
import MentionsLégales from './pages/Mentions légales/Mentions légales.jsx';
import Footer from './components/general/Footer.jsx';
import BoutonRetourEnHaut from './components/general/Bouton retour en haut.jsx';

function App() {
  return (  
    <div className='app'>
      <Navigation/>

      <Routes>
          <Route path='/' element={<Accueil />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/realisations' element={<Realisations />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/me-Contacter' element={<MeContacter />}></Route>
          <Route path='/mentions-légales' element={<MentionsLégales />}></Route>
      </Routes>
      
      <BoutonRetourEnHaut/>

      <Footer/>


    </div>
  );
}

export default App;
