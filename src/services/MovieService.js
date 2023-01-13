
import axios from 'axios';

export default class MovieService {
  static async getMovies(query = '', by = 'title', page = 0) {
    const res = await axios.get(
      `http://lara.loc/api/films`,
    );
    return res.data;
  }
}