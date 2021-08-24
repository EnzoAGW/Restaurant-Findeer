import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo.svg';
import { Container, Search, Wrapper, CarousselTitle, Carosel } from './styles';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, Modal, RestaurantCard, Map } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false); 

  const set = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <img src={logo} alt="logo do app" style={{ margin: '20px' }} />
          <TextField
            label="Pesquisar"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarousselTitle>Aqui!</CarousselTitle>
          <Carosel {...set}>
            <Card photo={restaurante} title="Casa da mãe joana" />

            <Card photo={restaurante} title="Judas perdu as botas" />

            <Card photo={restaurante} title="lege..." />

            <Card photo={restaurante} title="espera um pouquinho" />
            <Card photo={restaurante} title="...dário" />

            <Card photo={restaurante} title="clailton" />
          </Carosel>
        </Search>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />

      </Container>
      <Map></Map>
      {/* <Modal open={modalOpen} onClose={() => setModalOpen(!modalOpen)} /> */}
    </Wrapper>
  );
};

export default Home;
