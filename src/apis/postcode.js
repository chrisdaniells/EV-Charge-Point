import { POSTCODE_API_PATH } from '../config/paths';

export default class PostcodeApi {
    static fetchPostcodeCoords = (postcode) => {
        return new Promise((resolve, reject) => {
            fetch(POSTCODE_API_PATH + postcode, {
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   }
                })
                .then(response => response.json())
                .then(json => resolve({
                    longitude: json.result.longitude,
                    latitude: json.result.latitude
                }))
                .catch(error => {
                    reject(error);
                });
        });
    }
}
