import { build } from 'search-params';

import { OPENCHARGEMAP_API_PATH, OPENCHARGEMAP_API_KEY } from '../config';

export default class OpenChargeMapApi {
    static fetchPublicChargers(latitude, longitude) {
        return new Promise((resolve, reject) => {
            const params = {
                maxresults: 10,
                latitude,
                longitude,
            };

            fetch(OPENCHARGEMAP_API_PATH + 'poi?' + build(params), {
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-API-Key': OPENCHARGEMAP_API_KEY
                   }
                })
                .then(response => response.json())
                .then(json => resolve(json))
                .catch(error => reject(error));
        });
    }
}
