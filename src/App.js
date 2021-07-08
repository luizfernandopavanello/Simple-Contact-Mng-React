import logo from './logo.svg';
import './App.css';
import Header from './Header'

function App() {
  return (
    <main className="App">
      <section className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
      </section>
    </main>
  );
}

export default App;
