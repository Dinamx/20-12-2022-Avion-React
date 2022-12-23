import { camera, trash, close } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonLabel,
  IonButton,
  IonMenu,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './MainPage.css';

// Import hooks
import { useState } from 'react';
import { Redirect } from 'react-router';


import ListeVehicules from '../components/ListeVehicules';


import axios from "axios";


const Tab2: React.FC = () => {
  const [items, setItems] = useState([{ id: 0, value: 'OKee' }, { id: 1, value: 'Bulbizarre' }, { id: 3, value: 'Pikachu' }, { id: 4, value: 'ok' }, { id: 5, value: 'nah Bro' }, { id: 6, value: 'Bonjour' },]);
  // const [pokemons, setPokemons] = useState([{ id: 0, value: 'OKee' }, { id: 1, value: 'Bulbizarre' }, { id: 3, value: 'Pikachu' }, { id: 4, value: 'ok' }, { id: 5, value: 'nah Bro' }, { id: 6, value: 'Bonjour' },]);
  console.log(localStorage.getItem('token'));

  const voirAssurance = (nombre: string) => {
    console.log(nombre);


  };

  const disconnect = () => {
    localStorage.removeItem('token');
    localStorage.clear();
  }

  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonItem>
              <IonButton href="/ListeAssurance/1">Assurances expirées dans 1 mois</IonButton>
            </IonItem>
            <IonItem>
              <IonButton href="/ListeAssurance/3">Assurances expirées dans 3 mois</IonButton>
            </IonItem>
            <IonItem>
              <IonButton href="/ListeAssurance/3">Page3</IonButton>
            </IonItem>
            <IonItem>
              <IonButton onClick={disconnect}>disconnect</IonButton>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <ListeVehicules></ListeVehicules>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab2;
