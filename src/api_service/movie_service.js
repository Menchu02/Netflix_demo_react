import axios from 'axios';

const api_base = 'https://63d9187974f386d4efe47837.mockapi.io/movies';
//const api_base = 'http://localhost:8090/api/v1/movie';

// fetch(api_base)
//   .then((res) => res.json())
//   .then((response) => console.log(response));

const movieService = {
  //   getAllMovies() {
  //     return fetch(api_base)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data, 'data'))
  //       .catch((error) => console.error('Error al obtener datos:', error));
  //   },

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
