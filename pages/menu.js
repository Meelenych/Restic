import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

const Menu = () => {
  const initialDishes = [];

  const [dishes, setDishes] = useState(initialDishes);

  useEffect(() => {
    axios
      .get('http://localhost:3001/dishes')
      .then(res => {
        setDishes(res.data);
      })
      .catch(error => {
        console.error('Error fetching dishes:', error);
      });
  }, []);

  return (
    <Layout>
      <h1>Menu Page</h1>
      <ul>
        {dishes.map(dish => (
          <li key={dish.id}>
            <p>Item {dish.id}: {dish.title}</p>
            <p>Description: {dish.description}</p>
            <Image s
              src={dish.image} 
              alt={`Image of ${dish.title}`} 
              width={400} 
              height={300}
              unoptimized
            />
            <img src='../assets/images/webp/Celestial_Quiche.webp' alt='' width={100} height={70}/>        </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Menu;
