import type { NextPage } from 'next';
import { useEffect } from 'react';
import { Calendar } from '../components/Calendar';
import { Cover } from '../components/Cover';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Map } from '../components/Map';
import { Photos } from '../components/Photos';
import { ServicesContainer } from '../components/ServicesContainer';
import Aos from 'aos';
import 'aos/dist/aos.css'

import { Title } from '../components/Title';
import { AppContainer } from '../components/AppContainer';

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <AppContainer>
      <Header />
      <Cover />
      <Title text="Serviços" id="services"/>
      <ServicesContainer/>
      <Title text="Nosso portifólio" id="portifolio"/>
      <Photos />
      <Title text="Agende um horário" id="calendar"/>
      <Calendar />
      <Title text="Nos encontre" id="map"/>
      <Map />
      <Footer />
    </AppContainer>
  )
}

export default Home
