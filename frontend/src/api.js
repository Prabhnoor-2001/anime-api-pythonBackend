import request from "superagent";

const serverURL = "http://localhost:4000/";

export function showAnimeList(name) {
  // name = 'Naruto'
  if (name === "") {
    return request.get(`${serverURL}Naruto`).then((response) => {
      response.body.results = [];
      return response.body;
    });
  } else {
    return request.get(`${serverURL}${name}`).then((response) => response.body);
  }
}
