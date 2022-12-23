import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import useData from '../components/getData';
import './Tab3.css';



const Tab3: React.FC = () => {
  const { data, error } = useData("http://localhost:8080/voitures");
  console.log("NIBJO");
  console.log(data);

  localStorage.setItem("mix", "stuff");


  const [isDisabled, setIsDisabled] = useState(false);



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>CardExamples</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>

            <IonAccordionGroup expand="inset" disabled={isDisabled} >
              <IonAccordion >
                <IonItem slot="header" color="dark" >
                  <IonLabel><h2>Testeur</h2></IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">

                  <p>Bonjour</p>
                </div>
              </IonAccordion>
              <IonAccordion >
                <IonItem slot="header" color="dark" >
                  <IonLabel><h2>Testeur</h2></IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">

                  <p>Bonjour</p>
                </div>
              </IonAccordion>
            </IonAccordionGroup>

            <IonCard>
              {data.map(element =>
                <IonCardHeader>

                  <IonCardSubtitle>{element.id}</IonCardSubtitle>
                  <IonCardTitle>{element.marque}</IonCardTitle>
                </IonCardHeader>

              )}

              <IonCardContent>Bojou</IonCardContent>
            </IonCard>
          </IonContent>
        </IonPage>

      </IonContent >
    </IonPage >
  );
};

export default Tab3;
