const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello bakers!");
// });

const createNotification = (notification => {
  return admin.firestore().collection('activity')
    .add(notification)
    .then(document => console.log('notification added', document));
});

exports.recipeCreated = functions.firestore
  .document('recipes/{recipeId}')
  .onCreate(document => {

    const recipe = document.data();
    const notification = {
      content: 'Added a new recipe',
      user: `${recipe.ownerFirstName} ${recipe.ownerLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
});

exports.userJoined = functions.auth.user()
  .onCreate(user => {

    return admin.firestore().collection('users')
      .doc(user.uid).get().then(document => {

        const newUser = document.data();
        const notification = {
          content: 'Joined the app',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification);

      });

});
