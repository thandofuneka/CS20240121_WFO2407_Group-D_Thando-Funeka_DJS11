import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ShowDetails from '../pages/ShowDetails';
import Favorites from '../pages/Favorites';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/show/:id" element={<ShowDetails />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default AppRoutes;