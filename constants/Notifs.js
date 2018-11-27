// $0 es el tbody (de cada tabla)
// [...$0.children].slice(2).map(x => {
// 	const cols = [...x.children]
// 	const [materia, sedeCat, obs, comienzo, fin, fecha, finRat, sede] = cols.map(c => c.textContent);
// 	return {id FALTA, materia, sedeCat,obs,comienzo,fin,fecha,finRat,sede}
// })
// .reduce((prev, curr) => {
// 	const startEndEvent = { title: `Inscripción a Final ${curr.materia}`, materiaId: curr.id, materia: curr.materia, sedeCat: curr.sedeCat, obs: curr.obs, start: curr.comienzo, end: curr.fin, sede: curr.sede };
// 	prev.push(startEndEvent);
// 	const finalEvent = { title: `Final de ${curr.materia}`, materiaId: curr.id, materia: curr.materia, sedeCat: curr.sedeCat, obs: curr.obs, start: curr.fecha, end: null, sede: curr.sede };
// 	prev.push(finalEvent)
// 	const ratificacionEvent = { title: `Ratificación de ${curr.materia}`, materiaId: curr.id, materia: curr.materia, sedeCat: curr.sedeCat, obs: curr.obs, start: curr.finRat, end: null, sede: curr.sede };
// 	prev.push(ratificacionEvent);
// 	return prev;
// }, []);
const notifs = [
  {
    materiaId: '038',
    materia: 'BIOETICA I',
    sedeCat: '00-04',
    obs: 'Final Diciembre. Capuano.',
    comienzo: '20/11/2018',
    fin: '28/11/2018',
    fecha: '03/12/2018',
    finRat: '29/11/2018',
    sede: 'FACULTAD'
  },
  {
    materiaId: '038',
    materia: 'BIOETICA I',
    sedeCat: '00-08',
    obs: 'Final Diciembre- Sorokin.',
    comienzo: '20/11/2018',
    fin: '28/11/2018',
    fecha: '03/12/2018',
    finRat: '29/11/2018',
    sede: 'FACULTAD'
  },
  {
    materiaId: '026',
    materia: 'FISIOLOGIA Y BIOFISICA',
    sedeCat: '00-01',
    obs: 'Final Diciembre',
    comienzo: '22/11/2018',
    fin: '26/11/2018',
    fecha: '03/12/2018',
    finRat: '28/11/2018',
    sede: 'FACULTAD'
  },
  {
    materiaId: '023',
    materia: 'QUIMICA BIOLOGICA II - BIOQUIM',
    sedeCat: '00-00',
    obs: '1er. Final Diciembre 2018',
    comienzo: '22/11/2018',
    fin: '28/11/2018',
    fecha: '06/12/2018',
    finRat: '30/11/2018',
    sede: 'FACULTAD'
  },
  {
    materiaId: '010',
    materia: 'ANATOMIA',
    sedeCat: '00-01',
    obs: '1er. Final Diciembre 2018 ',
    comienzo: '23/11/2018',
    fin: '27/11/2018',
    fecha: '03/12/2018',
    finRat: '29/11/2018',
    sede: 'FACULTAD'
  },
  {
    materiaId: '010',
    materia: 'ANATOMIA',
    sedeCat: '00-02',
    obs: 'Final Diciembre',
    comienzo: '23/11/2018',
    fin: '27/11/2018',
    fecha: '03/12/2018',
    finRat: '29/11/2018',
    sede: 'FACULTAD'
  },
  {
    materiaId: '010',
    materia: 'ANATOMIA',
    sedeCat: '00-03',
    obs: 'Final Diciembre',
    comienzo: '23/11/2018',
    fin: '27/11/2018',
    fecha: '03/12/2018',
    finRat: '29/11/2018',
    sede: 'FACULTAD'
  },
  {
    materiaId: '033',
    materia: 'FARMACOLOGIA II',
    sedeCat: '00-02',
    obs: 'Final Diciembre 2018 Dr. Belloso 17 hs',
    comienzo: '23/11/2018',
    fin: '26/11/2018',
    fecha: '11/12/2018',
    finRat: '28/11/2018',
    sede: 'FACULTAD'
  },
  {
    materiaId: '026',
    materia: 'FISIOLOGIA Y BIOFISICA',
    sedeCat: '00-02',
    obs: 'Final Diciembre',
    comienzo: '23/11/2018',
    fin: '27/11/2018',
    fecha: '05/12/2018',
    finRat: '29/11/2018',
    sede: 'FACULTAD'
  },
  {
    materiaId: '049',
    materia: 'INMUNOLOGIA HUMANA',
    sedeCat: '00-01',
    obs: 'Final Noviembre 2018',
    comienzo: '23/11/2018',
    fin: '26/11/2018',
    fecha: '30/11/2018',
    finRat: '28/11/2018',
    sede: 'FACULTAD'
  },
  {
    materiaId: '027',
    materia: 'PATOLOGIA I',
    sedeCat: '00-00',
    obs: 'Final Diciembre',
    comienzo: '23/11/2018',
    fin: '26/11/2018',
    fecha: '03/12/2018',
    finRat: '28/11/2018',
    sede: 'FACULTAD'
  },
  {
    materiaId: '015',
    materia: 'SALUD PUBLICA I',
    sedeCat: '00-00',
    obs: 'Final Diciembre.',
    comienzo: '23/11/2018',
    fin: '27/11/2018',
    fecha: '10/12/2018',
    finRat: '04/12/2018',
    sede: 'FACULTAD'
  },
  {
    materiaId: '052',
    materia: 'SALUD PUBLICA II',
    sedeCat: '00-00',
    obs: 'Final Diciembre.',
    comienzo: '23/11/2018',
    fin: '27/11/2018',
    fecha: '10/12/2018',
    finRat: '04/12/2018',
    sede: 'FACULTAD'
  },
  {
    materiaId: '049',
    materia: 'INMUNOLOGIA HUMANA',
    sedeCat: '00-02',
    obs: '2do. Final Diciembre 2018 Dr. Alonso',
    comienzo: '25/11/2018',
    fin: '27/11/2018',
    fecha: '10/12/2018',
    finRat: '30/11/2018',
    sede: 'FACULTAD'
  },
  {
    materiaId: '069',
    materia: 'MICRO y PARASITO II',
    sedeCat: '00-02',
    obs: '2do. Final Diciembre 2018 Dr. Gonzalez',
    comienzo: '25/11/2018',
    fin: '28/11/2018',
    fecha: '11/12/2018',
    finRat: '03/12/2018',
    sede: 'FACULTAD'
  },
  {
    materiaId: '059',
    materia: 'MICRO Y PARASITO I',
    sedeCat: '00-01',
    obs: 'Final Diciembre - Cat. 1',
    comienzo: '26/11/2018',
    fin: '28/11/2018',
    fecha: '04/12/2018',
    finRat: '30/11/2018',
    sede: 'FACULTAD'
  },
  {
    materiaId: '059',
    materia: 'MICRO Y PARASITO I',
    sedeCat: '00-02',
    obs: '2do. Final Diciembre 2018 Dr. Alonso',
    comienzo: '26/11/2018',
    fin: '29/11/2018',
    fecha: '12/12/2018',
    finRat: '04/12/2018',
    sede: 'FACULTAD'
  },
  {
    materiaId: '069',
    materia: 'MICRO y PARASITO II',
    sedeCat: '00-01',
    obs: 'Final Diciembre - Cat. 1',
    comienzo: '26/11/2018',
    fin: '28/11/2018',
    fecha: '05/12/2018',
    finRat: '30/11/2018',
    sede: 'FACULTAD'
  }
];

export default notifs;
