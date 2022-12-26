import React, { useEffect, useState } from "react";

export const search = (idavion: number) => {
    const data = getSData();
    return isPlane(data, idavion);
}

export const isPlane = (fruit, idavion: number) => {
    return fruit.id === idavion;
}


export const getSData = () => {
    // const [data, setData] = useState<[]>;

    return [
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


}

