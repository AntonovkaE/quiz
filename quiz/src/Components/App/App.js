import './App.css';
import StartForm from '../StartForm/StartForm';
import quizApi from '../../utils/QuizApi';

function App() {
  quizApi.getQuiz().then(res => console.log(res))
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <StartForm/>
    </div>
  );
}

export default App;
