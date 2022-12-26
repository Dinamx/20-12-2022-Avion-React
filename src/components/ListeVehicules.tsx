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
import { useEffect, useRef, useState } from 'react';
import { baseUrl } from '../hooks/BaseUrl';
import { OverlayEventDetail } from '@ionic/core/components';


import useData from "./getData";
import Login from './Login';
import React from 'react';

import { getSData } from '../hooks/getStaticData';


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
        setisModalOpen(true);
    };

    const state = {
        imageBase64: ''
    };

    const [isDisabled, setIsDisabled] = useState(false);
    const [isModalOpen, setisModalOpen] = useState(false);



    // const { data, error } = useData(baseUrl("/avions"));
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        setData(getSData());

    }, []);

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
                                <IonItem button onClick={() => voirplus(item.id)} key={item.id}>
                                    <IonLabel><h3>{item.immatriculation}</h3>

                                    </IonLabel>

                                </IonItem>
                            );
                        })}
                    </IonList>
                </IonRow>
            </IonGrid><IonModal isOpen={isModalOpen}>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                            </IonButtons>
                            <IonTitle>Log in</IonTitle>
                            <IonButtons slot="end">
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <Login></Login>
                </IonModal></>






        )
    }
};

export default ListeVehicules;