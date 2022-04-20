import {Route, Routes} from 'react-router-dom';
import './styles/global.scss';

import { Home } from './pages/home';
import { Contact } from './pages/contact';
import { OneWork } from './pages/oneWork';
import { Login } from './pages/login';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<OneWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  )
}

export default App;