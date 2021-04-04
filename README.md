## React Native Expo Application

### Project Details

API's Used:
- https://api.postcodes.io/
- https://api.openchargemap.io/

Tested On:
- Web Browser
- Expo Go

Install:
- run `npm i`
- run `npm start`

Some Potential Code Improvements:
- Use of typescript to strongly type data from API's and between components
- Splitting out of API response handling from HomeScreen (screens/home.jsx)
- Universal Styling Constants/Scss
- Postcode validation data entry
- There is a console error shown when testing in browser: `React does not recognize the 'enterKeyHint' prop on a DOM element...` After doing a bit of investigation, this error is apparently not present on actual devices, and is a quirk of testing a Native app via a browser. It would be nice to fix/hide this however.

Some Potential Environment Improvements:
- Testing on real devices

### Design Choices

**API Service Classes**

I separated the API classes in `/apis`. This might itself be kept in a `/services` parent directory, for example, should further none-API related Services be introduced.

I chose to use classes for these services to allow for future expansion, such as additional fetching methods, extra class properties, etc. Returning a Promise for each fetch class method allows for easily handling returned data/error. Alternatively, async methods could be used instead should the project complexity increase sufficiently to require them.

**Components & Screens**

I chose to use to functional components over class-based ones due to the relatively simplicity of the ones used for this project. The HomeScreen component, however, did grow more complex than originally intended, but the improvement suggested above of splitting out the endpoint response handling logic would reduce the length & complexity of this component.

**Config**

Whilst the scope of this project might not neccesarily require the API paths and keys to be kept separately, I thought it best to do so to emulate how a bigger project would usually handle CONSTs and config properties. I would not usually keep API Keys and other secret strings in a file pushed to the repo though!
