const { getRandomValues } = require("crypto");

function signUpUser(firstName, lastName) {
    return new Promise((resolve, reject) => {
        const obj = {
            firstName: firstName,
            lastName: lastName,
        }
        resolve(`firsName: ${obj.firstName}, lastName: ${obj.lastName}`);
    })
}