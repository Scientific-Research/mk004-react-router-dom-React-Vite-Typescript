import { useOutletContext } from 'react-router-dom';

interface ICitiy {
  name: string;
  description: string;
}

export const PageCity = () => {
  const city: ICitiy = useOutletContext();
  console.log(city);

  return (
    <div className="city">
      <div className="name">{city.name}</div>
      <div className="description">{city.description}</div>
    </div>
  );
};
