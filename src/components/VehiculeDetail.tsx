import React, { useEffect, useState } from 'react';
import { IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

const CarDetail = (props) => {
    const { id } = props; // déstructurer la prop ID de l'objet props
    const [car, setCar] = useState<any>([]); // utiliser useState pour stocker les détails de la voiture

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.example.com/cars/${id}`);
            const json = await response.json();
            setCar(json);
        };
        fetchData();
    }, [id]); // spécifier l'ID comme dépendance pour recharger les détails de la voiture lorsque l'ID est mis à jour

    if (!car) {
        return <div>Loading...</div>;
    }

    return (
        <IonContent>
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>{car.make}</IonCardSubtitle>
                    <IonCardTitle>{car.model}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <p>Year: {car.year}</p>
                    <p>Color: {car.color}</p>
                    <p>Mileage: {car.mileage}</p>
                </IonCardContent>
            </IonCard>
        </IonContent>
    );
};

export default CarDetail;
