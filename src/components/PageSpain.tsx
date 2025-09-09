import { useParams } from 'react-router-dom';
import cities from '../data/spanishCities.json';

export const PageSpain = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <div className="pageSpain">
      <p>Welcome to the Spain page.</p>
      <h3>we want to show city {id}.</h3>
    </div>
  );
};
