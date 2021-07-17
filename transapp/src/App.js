import './App.css';
import TranslateForm from './components/TranslateForm';
import Header from './components/Header';

function App() {
  return (
    <div className="App container d-flex flex-column justify-content-center align-items-center">
          <Header />
      <TranslateForm />
    </div>
  );
}

export default App;
