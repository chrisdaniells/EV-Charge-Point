import { EVENERGY_API_PATH } from '../config';

export default class EVEnergyApi {
    static startChargingSession(chargerId) {
        return new Promise((resolve, reject) => {
            fetch(EVENERGY_API_PATH , {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({
                        user: 'userId',
                        car_id: 'userCarId',
                        charger_id: chargerId
                    })
                })
                .then(response => response.json())
                .then(json => resolve(json))
                .catch(error => reject(error));
        });
    }
}
