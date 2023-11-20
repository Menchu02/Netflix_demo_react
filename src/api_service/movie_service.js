import axios from 'axios';

const api_base = 'https://63d9187974f386d4efe47837.mockapi.io/movies';
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
  //   getAllCurs() {
  //     return axios.get(api_base, { params }).then((res) => console.log(res.data));
  //   },
  // getAllLastTen() {
  //   return axios.get(api_base).then((res) => {
  //     // Ordena los datos por el campo deseado en orden descendente
  //     const sortedData = res.data.sort(
  //       (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  //     );

  //     // Toma solo los primeros 10 elementos
  //     const lastTen = sortedData.slice(11, 22);

  //     return lastTen;
  //   });
  // },
  getAllLastTen() {
    return axios.get(api_base).then((res) => {
      const slicedData = res.data.slice(11, 22);

      return slicedData;
    });
  },

  getAllMovies() {
    return fetch(api_base)
      .then((res) => res.json())
      .then((data) => console.log(data, 'data'))
      .catch((error) => console.error('Error al obtener datos:', error));
  },

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
