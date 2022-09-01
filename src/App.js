import './App.css';
import Dispositivo from './components/Dispositivo';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
      <h1>Dispositivos y herramientas desarrolladas durante las guerras</h1>
      <Dispositivo
        imagen="torre-de-control"
        nombre="Torre de control"
        fecha="1916"
        lugar="Estados Unidos"
        to='/TorreControl'
      />
      <Dispositivo
        imagen="camara-digital"
        nombre="Cámara digital"
        fecha="1971"
        lugar="Estados Unidos"
        to='/'
      />
      <Dispositivo
        imagen="ambulancia"
        nombre="Ambulancia"
        fecha="1917"
        lugar="Estados Unidos"
      />
      <Dispositivo imagen="dron" nombre="Dron" fecha="1942" lugar="Austria" />
      <Dispositivo
        imagen="horno-microondas"
        nombre="Horno microondas"
        fecha="1946"
        lugar="Estados Unidos"
      />
      <Dispositivo
        nombre="Computador"
        fecha="1947"
        lugar="Estados Unidos"
        imagen="computador"
      />
      </div>
    </div>
  );
}

export default App;
