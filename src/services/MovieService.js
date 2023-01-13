
import axios from 'axios';

export default class MovieService {
  static async getMovies(query = '', by = 'title', page = 0) {
    const res = await axios.get(
      `http://127.0.0.1/api/films`,
    );
    return res.data;
  }
}