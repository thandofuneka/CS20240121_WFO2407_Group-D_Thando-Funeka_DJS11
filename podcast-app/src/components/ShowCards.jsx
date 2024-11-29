import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { genreTitles } from './genreTitles';

function ShowCard({ show }) {
  return (
    <Link to={`/show/${show.id}`} className="show-card">
      <img 
        src={show.image} 
        alt={show.title} 
        className="show-image"
      />
      <div className="show-info">
        <h3>{show.title}</h3>
        <p>{show.description}</p>
        <div className="show-seasons">
          Seasons: {show.seasons}
        </div>
        <div className="show-genres">
          Genres: {show.genres.map(genreId => genreTitles[genreId]).join(', ')} 
        </div> 
      </div>
    </Link>
  );
}

ShowCard.propTypes = {
  show: PropTypes.object.isRequired
};

export default ShowCard;