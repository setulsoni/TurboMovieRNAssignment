import axios from "axios";
import { routes } from "./routes";

export class MovieController {

  MovieController() {
  }

  fetchMovieListAPI = () => {
    return new Promise((resolve, reject) => {
      axios.get(routes.getMovieListUrl).then((result) => {
        console.log('fetchMovieList success', result.data);
        if (result.data.status == "ok")
          resolve(result.data.data);
        else
          reject('Something went wrong');
      }).catch((e) => {
        console.log('fetchMovieList success', e);
        reject('Something went wrong');
      });
    });
  }

}

export default new MovieController();
