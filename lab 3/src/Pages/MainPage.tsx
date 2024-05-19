import { useEffect, useState } from "react";
import FormFloatingLayoutExample from "../Components/FormFloating";
import { Card } from "../Components/Card";
import { useAppSelector } from "../redux/hooks";

export default function MainPage() {
    const [card, setCard] = useState<Card>();
  
    const selector = useAppSelector((state) => state.counter.value);

    useEffect(() =>
    {
      fetch('https://fakestoreapi.com/carts/' + String(selector))
        .then((res) => res.json())
        .then((json) => setCard(json))
      .catch(() => console.log('error'))
    }, [selector]);
  
    return (
        <>
          {FormFloatingLayoutExample()}
          <br />
          <h3>Id карточки: {card?.id}</h3>
          <h3>Id пользователя: {card?.userId}</h3>
          <h3>Дата: {card?.date}</h3>
        </>
    );
  }