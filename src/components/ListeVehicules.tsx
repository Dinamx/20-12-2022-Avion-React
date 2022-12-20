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
    IonLabel
} from '@ionic/react';
import { baseUrl } from '../hooks/BaseUrl';


import useData from "./getData";


const ListeVehicules: React.FC = () => {

    const voirplus = (idVoiture: string) => {
        console.log(idVoiture);
        // console.log(localStorage.getItem('token'));
    };



    const { data, error } = useData(baseUrl("/voitures"));

    if (!data) {
        return <h1>Loading...</h1>;
    } else {
        return (

            <IonGrid>
                <IonRow>
                    {data.map(item => {
                        return (
                            <><IonAccordionGroup expand="inset" >
                                <IonAccordion >
                                    <IonItem slot="header" color="dark">
                                        <IonLabel><h2>{item.immatriculation}</h2></IonLabel>
                                    </IonItem>
                                    <div className="ion-padding" slot="content">

                                        <p>{item.marque} {item.modele}</p>
                                        <p>acquisition :  {item.acquisition}</p>
                                        <p>à  {item.kilometrageentree} km</p>
                                    </div>
                                </IonAccordion>
                            </IonAccordionGroup>
                                <IonCol size='10'>
                                </IonCol></>
                        )
                    })}
                </IonRow>
            </IonGrid>







        )
    }
};

export default ListeVehicules;