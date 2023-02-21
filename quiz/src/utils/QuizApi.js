class QuizApi {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
    this._api = config.api;
  }

  _checkPromise(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getQiuz(difficulty, category, limit) {
    return fetch(`${this._baseUrl}`, {
      body: `apiKey=${this._api}&difficulty=${difficulty}&category=${category}}&limit=${limit || 20}`,
      headers: this._headers,
    }).then(res => this._checkPromise(res))
  }
}


const quizApi = new QuizApi({
  baseUrl: 'https://quizapi.io/api/v1/questions',
  api: '26NmUsrnx150w4r642YzhdXyyTga6o7ufhzXCg13',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export default quizApi;
