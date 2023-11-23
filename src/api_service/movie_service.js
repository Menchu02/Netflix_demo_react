import axios from 'axios';

//APIS MOVIES Y COURSES
const api_base = 'https://63d9187974f386d4efe47837.mockapi.io/movies';

//LLAMADAS PARA TRABAJAR CON SPRINGBOOT Y H2
//const api_base = 'http://localhost:8090/api/v1/movie';

// fetch(api_base)
//   .then((res) => res.json())
//   .then((response) => console.log(response));

// const movieService = {
//   getAllMovies() {
//     return fetch(api_base)
//       .then((res) => res.json())
//       .then((data) => console.log(data, 'data'))
//       .catch((error) => console.error('Error al obtener datos:', error));
//   },

//   getAll() {
//     return axios.get(api_base + '/getAllMovies').then((res) => res.data);
//   },

//   getById(id) {
//     return axios
//       .get(api_base + '/getMovieById'`/${id}`)
//       .then((res) => res.data);
//   },
//   deleteById(id) {
//     return axios
//       .delete(api_base + '/deleteMovieById'`/${id}`)
//       .then((res) => res.data);
//   },
//   createMovie(data) {
//     return axios.post(api_base + '/createMovie', data).then((res) => res.data);
//   },
// };
// Parámetros de consulta
// const params = {
//   limit: 10, // Obtener los últimos 10 objetos
// };
const movieService = {
  //LLAMADA PARA TRAER EN CONCRETO UNOS ITEMS DE LA API
  getAllLastTen() {
    return axios.get(api_base).then((res) => {
      const slicedData = res.data.slice(11, 22);

      return slicedData;
    });
  },

  //LLAMADA HECHA CON UN FETCH CONVENCIONL
  getAllMovies() {
    return fetch(api_base)
      .then((res) => res.json())
      .then((data) => console.log(data, 'data'))
      .catch((error) => console.error('Error al obtener datos:', error));
  },

  //LLAMADAS CON AXIOS
  getAll() {
    return axios.get(api_base).then((res) => res.data);
  },

  getById(id) {
    return axios.get(api_base + `/${id}`).then((res) => res.data);
  },
  deleteById(id) {
    return axios.delete(api_base + `/${id}`).then((res) => res.data);
  },
  createMovie(data) {
    return axios.post(api_base, data).then((res) => res.data);
  },
};

export default movieService;
