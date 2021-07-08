import React from './React';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  return (
    <main className="App">
      <section className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <AddContact />
        <ContactList />
      </section>
    </main>
  );
}

export default App;
