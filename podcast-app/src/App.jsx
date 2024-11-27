import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from './context/FavouritesContext';
import AppRoutes from './components/AppRoutes';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <div className="app">
          <Navbar />
          <main className="container">
            <AppRoutes />
          </main>
        </div>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;






























