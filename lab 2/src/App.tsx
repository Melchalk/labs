import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Card } from './Components/Card';
import FormFloatingLayoutExample from './Components/FormFloating';

export default function App() {
  const [stateId, setStateId] = useState<number>(1);
  const [card, setCard] = useState<Card>();

  useEffect(() =>
  {
    fetch('https://fakestoreapi.com/carts/' + String(stateId))
      .then((res) => res.json())
      .then((json) => setCard(json))
    .catch(() => console.log('error'))
  }, [stateId]);

  return (
      <>
        {FormFloatingLayoutExample(stateId, setStateId)}
        <br />
        <h3>Id карточки: {card?.id}</h3>
        <h3>Id пользователя: {card?.userId}</h3>
        <h3>Дата: {card?.date}</h3>
      </>
  );
}