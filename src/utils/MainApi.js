class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(res.status);
  }

  getMovies({ jwt }) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: {
        ...this._headers,
        "Authorization": `Bearer ${jwt}`
      },
    }).then(this._checkResponse);
  }

  postMovie({ country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId, jwt }) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        ...this._headers,
        "Authorization": `Bearer ${jwt}`
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId
      }),
    }).then(this._checkResponse);
  }

  deleteMovie({ id, jwt }) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        "Authorization": `Bearer ${jwt}`
      },
    }).then(this._checkResponse);
  }

  postRegister(password, email, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password,
        email,
        name
      }),
    }).then(this._checkResponse);
  }

  postLogin(password, email) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password,
        email
      }),
    }).then(this._checkResponse);
  }

  checkToken(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        ...this._headers,
        "Authorization": `Bearer ${jwt}`
      }
    }).then(this._checkResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.skoroxod.nomoredomains.monster",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
