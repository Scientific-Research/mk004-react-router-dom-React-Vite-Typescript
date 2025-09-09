import { NavLink, useParams } from 'react-router-dom';
import cities from '../data/spanishCities.json';

export const PageSpain = () => {
  const { id } = useParams();

  // console.log(id);

  return (
    <div className="pageSpain">
      <p>Welcome to the Spain page.</p>

      <p>displaying id:{id}</p>

      <p className="cityChoices">There are {cities.length} cities to visit:</p>
      <div className="cities">
        {cities.map((c) => (
          <div className="city" key={c.id}>
            <div className="name">
              <NavLink to={String(c.id)}>{c.name}</NavLink>
            </div>
            <div className="description">{c.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
