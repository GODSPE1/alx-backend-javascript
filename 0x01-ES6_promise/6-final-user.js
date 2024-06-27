import signUpUser from "./4-user-promise.js"
import uploadPhoto from "./5-photo-reject.js"

function handleProfileSignup(firstName, lastName, fileName) {
    return new Promise.race([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => {
        const [signUPResoponse, uploadPhotoResponse] = result;
        return (result);
    })
   
}