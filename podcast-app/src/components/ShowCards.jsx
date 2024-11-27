import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
      </div>
    </Link>
  );
}

ShowCard.propTypes = {
  show: PropTypes.object.isRequired
};

export default ShowCard;