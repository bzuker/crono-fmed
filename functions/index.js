const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.onMateriaAdded = functions.database
  .ref('users/{userId}/materias/{materiaId}')
  .onCreate((snapshot, ctx) => {
    console.log(`Usuario: ${ctx.params.userId}`);
    console.log(`Materia agregada ${ctx.params.materiaId}`);
    const notifsRef = admin.database().ref(`users/${ctx.params.userId}/notificaciones`);
    // Obtengo cuáles son las notificaciones para esa materia.
    const notifs = [
      {
        title: 'Inscripción a Final de Anatomía',
        comment: 'Cátedra 10',
        start: '10/10/2018',
        end: '12/10/2018'
      },
      {
        title: 'Inscripción a Final de Embrio',
        comment: 'Cátedra 11',
        start: '12/10/2018',
        end: '14/10/2018'
      }
    ];

    // Las agrego
    let updates = {};
    for (var n of notifs) {
      // Obtengo una nueva key
      const { key } = notifsRef.push();

      // Para esa key, genero la notificación
      updates[key] = n;
    }

    console.log(`Agregando ${notifs.length} notificaciones`);
    return notifsRef.update(updates);
  });
