import { useParams } from 'react-router-dom';
import cities from '../data/spanishCities.json';

export const PageSpain = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <div className="pageSpain">
      <p>Welcome to the Spain page.</p>

      <p className="cityChoices">There are {cities.length} cities to visit:</p>
      <p className="cities">
        {cities.map((c) => (
          <div className="city">
            <div className="name">{c.name}</div>
            <div className="description">{c.description}</div>
          </div>
        ))}
      </p>
    </div>
  );
};
