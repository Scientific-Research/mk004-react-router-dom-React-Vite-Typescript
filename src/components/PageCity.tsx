import { useOutletContext } from 'react-router-dom';

interface ICitiy {
  name: string;
  description: string;
  idCode: string;
}

export const PageCity = () => {
  const city: ICitiy = useOutletContext();
  console.log(city);

  return (
    <div className="city">
      <img src={`/images/${city.idCode}.png`} alt="" />
      <div className="info">
        <div className="name">{city.name}</div>
        <div className="description">{city.description}</div>
      </div>
    </div>
  );
};
