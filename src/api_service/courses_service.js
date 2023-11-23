import axios from 'axios';

const api_base_courses =
  'https://655c93c025b76d9884fd90f6.mockapi.io/apiCourse';

const coursesService = {
  getAll() {
    return axios.get(api_base_courses).then((res) => res.data);
  },

  getById(id) {
    return axios.get(api_base_courses + `/${id}`).then((res) => res.data);
  },
  deleteById(id) {
    return axios.delete(api_base_courses + `/${id}`).then((res) => res.data);
  },
  createCourse(data) {
    return axios.post(api_base_courses, data).then((res) => res.data);
  },
};
export default coursesService;
