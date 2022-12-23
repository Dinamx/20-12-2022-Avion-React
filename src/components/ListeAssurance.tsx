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
    IonImg,
    IonLabel,
    IonRow,
    IonItem
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { baseUrl } from '../hooks/BaseUrl';


import useData from "./getData";

interface NombreMois
    extends RouteComponentProps<{
        nombreMois: string;
    }> { }

const ListeAssurance: React.FC<NombreMois> = ({ match }) => {
    const voirplus = () => {
        console.log(localStorage.getItem('token'));

    };

    console.log(match.params.nombreMois);


    const { data, error } = useData(baseUrl("/AssuranceAvion/") + match.params.nombreMois);

    if (!data) {
        return <h1>Loading...</h1>;
    } else {
        return (
            <IonPage>
                <IonContent>

                    <IonGrid>
                        <IonRow>
                            {data.map(item => {
                                return (
                                    <IonCol size='10'>

                                        <IonCard key={item.idassurance}>
                                            <IonCardHeader>
                                                <IonCardTitle>{item.marque} {item.modele}</IonCardTitle>
                                                <IonCardSubtitle>{item.immatriculation}</IonCardSubtitle>
                                                <IonCardContent>Date de fin : {item.dateFinValidite}</IonCardContent>
                                                <IonButton onClick={voirplus}>VoirDetails</IonButton>
                                            </IonCardHeader>
                                        </IonCard>
                                    </IonCol>
                                )
                            })}
                        </IonRow>
                    </IonGrid>


                </IonContent>
            </IonPage>





        )
    }
};

export default ListeAssurance;