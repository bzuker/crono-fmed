// Arma el listado de materias con cátedras a partir de los eventos.
const eventos = require('../hosting/eventos.json');

const run = _ => {
  const materias = eventos.reduce((prev, curr) => {
    let materia = prev.find(x => x.id === curr.materiaId);
    const catedra = curr.sedeCat.slice(3);
    if (materia) {
      if (!materia.catedras.includes(catedra)) {
        materia.catedras.push(catedra);
      }
    } else {
      prev.push({
        name: curr.materia,
        id: curr.materiaId,
        catedras: [catedra]
      });
    }

    return prev;
  }, []);

  console.log(JSON.stringify(materias));
};

run();
