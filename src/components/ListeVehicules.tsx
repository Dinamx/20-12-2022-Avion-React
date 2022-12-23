import {
    IonApp,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonButton,
    IonPage,
    IonCol,
    IonGrid,
    IonRow,
    IonItem,
    IonAccordion,
    IonAccordionGroup,
    IonLabel,
    IonInput,
    IonModal,
    IonButtons,
    IonImg,
    IonList,
    IonSegment,
    IonFab
} from '@ionic/react';
import { useRef, useState } from 'react';
import { baseUrl } from '../hooks/BaseUrl';
import { OverlayEventDetail } from '@ionic/core/components';


import useData from "./getData";
import Login from './Login';
import React from 'react';



const ListeVehicules: React.FC = () => {

    const fileInput = useRef(null);

    const modal = useRef<HTMLIonModalElement>(null);


    // Base 64
    const [imageBase64, setImageBase64] = useState<string>("");


    const input = useRef<HTMLIonInputElement>(null);


    const [message, setMessage] = useState(
        'This modal example uses triggers to automatically open a modal when the button is clicked.'
    );

    function confirm() {
        if (localStorage.getItem('token')) {
            console.log('dina');
            setIsDisabled(false);
            setisModalOpen(false);
        }
        else {
            setisModalOpen(true);
        }
    }
    const voirplus = (id: string) => {
        console.log("bonjour" + id);

    };

    const state = {
        imageBase64: ''
    };

    const [isDisabled, setIsDisabled] = useState(false);
    const [isModalOpen, setisModalOpen] = useState(false);



    // const { data, error } = useData(baseUrl("/avions"));

    const data = [
        {
            id: '1',
            immatriculation: 'ABC123',
            imageavion: 'https://picsum.photos/200',
            marque: 'Boeing',
            modele: '737',
            kilometrageentree: 10000
        },
        {
            id: '2',
            immatriculation: 'DEF456',
            imageavion: 'https://picsum.photos/200',
            marque: 'Airbus',
            modele: 'A320',
            kilometrageentree: 20000
        },
        {
            id: '3',
            immatriculation: 'GHI789',
            imageavion: 'https://picsum.photos/200',
            marque: 'Bombardier',
            modele: 'CRJ900',
            kilometrageentree: 30000
        }, {
            id: '4',
            immatriculation: 'JKL012',
            imageavion: 'https://picsum.photos/200',
            marque: 'Embraer',
            modele: 'E195',
            kilometrageentree: 40000
        },
        {
            id: '5',
            immatriculation: 'MNO345',
            imageavion: 'https://picsum.photos/200',
            marque: 'Cessna',
            modele: 'Citation X',
            kilometrageentree: 50000
        },
        {
            id: '6',
            immatriculation: 'PQR678',
            imageavion: 'https://picsum.photos/200',
            marque: 'Piper',
            modele: 'PA-28 Cherokee',
            kilometrageentree: 60000
        },
        {
            id: '7',
            immatriculation: 'STU901',
            imageavion: 'https://picsum.photos/200',
            marque: 'Beechcraft',
            modele: 'King Air',
            kilometrageentree: 70000
        }

    ];


    if (!data) {
        return <h1>Loading...</h1>;
    } else {
        return (


            <><IonGrid>
                {/* <IonButton onClick={voirTout}>Bouton</IonButton> */}
                <IonRow>
                    <IonList inset={true}>
                        {data.map(item => {
                            return (
                                <IonItem button onClick={() => voirplus(item.id)} key={item.id} >
                                    <IonLabel><h3>{item.immatriculation}</h3>
                                    </IonLabel>

                                </IonItem>
                            );
                        })}
                    </IonList>
                </IonRow>
            </IonGrid>
                <IonModal isOpen={isModalOpen}
                //  onWillDismiss={(ev) => onWillDismiss(ev)}
                >
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                            </IonButtons>
                            <IonTitle>Log in</IonTitle>
                            <IonButtons slot="end">
                                <IonButton strong={true} onClick={() => confirm()}>
                                    Confirm
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <Login></Login>
                </IonModal></>






        )
    }
};

export default ListeVehicules;