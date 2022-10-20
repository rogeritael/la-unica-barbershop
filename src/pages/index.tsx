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

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <div>
      <Header />
      <Cover />
      <Title text="Serviços" />
      <ServicesContainer/>
      <Title text="Nosso portifólio" />
      <Photos />
      <Title text="Agende um horário" />
      <Calendar />
      <Title text="Nos encontre" />
      <Map />
      <Footer />
    </div>
  )
}

export default Home
