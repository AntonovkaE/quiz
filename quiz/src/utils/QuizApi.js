class QuizApi {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _checkPromise(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getQuiz(category, difficulty, limit=20) {
    const categoryProps = (category !== 'any' && category !== '') ? `category=${category}` : '';
    const difficultyProps = difficulty ? `&difficulty=${difficulty}` : '';
    return fetch(`${this._baseUrl}?${categoryProps}${difficultyProps}&limit=${limit}`, {
      headers: this._headers
    }).then(res => this._checkPromise(res))
  }
}


const quizApi = new QuizApi({
  baseUrl: 'https://quizapi.io/api/v1/questions',
  headers: {
    "X-Api-Key": '26NmUsrnx150w4r642YzhdXyyTga6o7ufhzXCg13'
  },
});

export default quizApi;
