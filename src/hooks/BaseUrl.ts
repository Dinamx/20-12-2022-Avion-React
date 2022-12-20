import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';
import { stringify } from 'querystring';



export async function baseUrl(concat: string): Promise<string> {
    return "http://localhost:8080" + concat;
}
// export async function baseUrl(concat: string): Promise<string> {
//     return new Promise((resolve, reject) => {
//         resolve(`http://localhost:8080${concat}`);
//     });
// }