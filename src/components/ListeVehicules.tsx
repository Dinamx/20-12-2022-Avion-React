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
    IonImg
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
    const voir = () => {
        if (localStorage.getItem('token')) {
            console.log('misy token');
            console.log(localStorage.getItem('token'));
        }
        else {
            console.log('tsisy token');
            setIsDisabled(true);
            setisModalOpen(true);
        }
    };

    const state = {
        imageBase64: ''
    };
    // setState({ imageBase64: e.target.result });


    // setState({ imageBase64: e.target.result });



    // const onFileChange = (id: any, event: any) => {
    //     console.log('onfileChange');
    //     console.log(event);

    //     if (event && event.target && event.target.files && event.target.files.length > 0) {
    //         const file = event.target.files[0];
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             console.log("photo en base 64");
    //             console.log(e.target?.result);
    //             if (typeof e.target?.result === 'string') {
    //                 // Mettez ?? jour la valeur de imageBase64 dans l'??tat de votre composant avec le r??sultat de la conversion
    //                 setImageBase64(e.target.result);
    //                 console.log('ok');
    //                 console.log(e.target.result);
    //                 console.log('id of the avion ' + id);

    //                 // console.log(`Identifiant de l'avion: ${id}`);
    //             }
    //         };

    //         reader.readAsDataURL(file);
    //     }
    // };

    const onFileChange = (id: string) => {
        console.log('onfileChange');
        console.log(`Identifiant de l'avion: ${id}`);


        const file = fileInput.current.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            console.log("photo en base 64");
            console.log(e.target?.result);
            if (typeof e.target?.result === 'string') {
                // Mettez ?? jour la valeur de imageBase64 dans l'??tat de votre composant avec le r??sultat de la conversion
                setImageBase64(e.target.result);
                console.log('ok');
                console.log(e.target.result);
            }
        };

        reader.readAsDataURL(file);
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
                    <><IonAccordionGroup onClick={voir} expand="inset" id="open-modal" disabled={isDisabled}>
                        {data.map(item => {
                            return (
                                <IonAccordion key={item.id} >
                                    <IonItem slot="header" color="dark">
                                        <IonLabel><h2>{item.immatriculation}</h2></IonLabel>
                                    </IonItem>
                                    <div className="ion-padding" slot="content">
                                        <IonImg src={item.imageavion} ></IonImg>
                                        <p>{item.marque} {item?.modele}</p>
                                        {/* <p>acquisition: {item.acquisition}</p> */}
                                        <p>??  {item.kilometrageentree} km and id {item.id}</p>
                                        <>
                                            <input
                                                ref={fileInput}
                                                hidden
                                                type="file"
                                                accept="image/*"
                                                onChange={(event) => {
                                                    onFileChange(item.id);
                                                }}
                                                onClick={() => { }}
                                            />

                                            <IonButton
                                                color="primary"
                                                onClick={(event) => {
                                                    // @ts-ignore
                                                    fileInput.current?.click();
                                                    onFileChange(item.id);
                                                }}
                                            >
                                                Changer l'image
                                            </IonButton>

                                        </>

                                    </div>


                                </IonAccordion>
                            );
                        })}
                    </IonAccordionGroup>
                        <IonCol size='10'>
                        </IonCol>

                    </>
                </IonRow>
            </IonGrid>
                {/* Ion Modal */}
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
                    {/* <IonContent className="ion-padding">
                        <IonItem>
                            <IonLabel position="stacked">Enter your name</IonLabel>
                            <IonInput ref={input} type="text" placeholder="Your name" />
                        </IonItem>
                    </IonContent> */}
                </IonModal></>






        )
    }
};

export default ListeVehicules;