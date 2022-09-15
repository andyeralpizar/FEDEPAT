import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ListaEquipos from './ListaEquipos';
import RegistrarUsuarioEquipo from './RegistrarUsuarioEquipo';
import EditarUsuarioEquipo from './EditarUsuarioEquipo';
function App() {
  return (
    <div className="App">
      <h1>Hola</h1>
      <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">FEDEPAT</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Usuarios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/registrarusuarioequipo">Registrar Equipo</a>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaEquipos/>} exact></Route>
          <Route path='/registrarusuarioequipo' element={<RegistrarUsuarioEquipo/>} exact></Route>
          <Route path='/editarusuarioequipo/:idusuario' element={<EditarUsuarioEquipo/>} exact></Route>
        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
