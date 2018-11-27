const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');
admin.initializeApp();

const eventosUrl = 'https://crono-fmed.firebaseapp.com/eventos.json';

const onMateriaAdded = async (snapshot, ctx) => {
  console.log(`Usuario: ${ctx.params.userId}`);
  console.log(`Materia agregada ${ctx.params.materiaId}`);
  const eventosRef = admin.database().ref(`users/${ctx.params.userId}/eventos`);

  // Obtengo cuáles son los eventos para esa materia.

  const response = await axios.get(eventosUrl);
  const events = response.data;
  const relevantEvents = events.filter(
    x => x.materiaId === ctx.params.materiaId
  );

  // Las agrego
  let updates = {};
  for (var evt of relevantEvents) {
    // Obtengo una nueva key
    const { key } = eventosRef.push();

    // Para esa key, genero el evento
    updates[key] = evt;
  }

  console.log(`Agregando ${relevantEvents.length} eventos`);
  return eventosRef.update(updates);
};

module.exports = functions.database
  .ref('users/{userId}/materias/{materiaId}')
  .onCreate(onMateriaAdded);
