function getResponseFromAPI(args) {
  return new Promise((resolve, reject) => {
    if (args === true) {
      resolve(console.log({ status: 200, body: 'Success' }));
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
