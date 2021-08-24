import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto} from './style';
import restaurante from '../../assets/restaurante-fake.png';


const RestaurantCard = () =>(
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do Restaurante</Title>
      <ReactStars count={5} isHalf edit={false} value={3.5} activeColor="#e7711c" />
      <Address>Rua Major Evangelista , 70</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante} />
  </Restaurant>
); 

export default RestaurantCard;
