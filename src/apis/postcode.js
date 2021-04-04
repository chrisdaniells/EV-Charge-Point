export default class PostcodeApi {
    constructor() {
        this.apiUrl = 'https://api.postcodes.io/postcodes/';
    }

    fetchPostcodeCoords = (postcode = '') => {
        return fetch(this.apiUrl + postcode)
            .then((response) => response.json())
            .then((json) => {
                return {
                    longitude: json.longitude,
                    latitude: json.latitude
                };
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
