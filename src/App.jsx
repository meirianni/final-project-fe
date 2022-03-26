import "./App.css";
import "./index.scss";
import Auth from './pages/login';
import Admin from './pages/admin';
import Kasir from './pages/kasir';
import Kitchen from './pages/kitchen';

import {
  Routes,
  Route,
  useLocation,
  Navigate,
  BrowserRouter
} from 'react-router-dom'

function NotFound() {
  return (
    <div className="home">
      <p>
        NOT FOUND 404
        <br />
        return to <a href='/'> HomePage </a> ?
      </p>
    </div>
  );
}

function RequireAuth() {
  let auth = localStorage.getItem('mini-pos:token');
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  //Renders child route's element, jika ada.
  return <Admin />;
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>

          <Route>
            
            <Route path="/kasir" element={<Kasir />} />
            <Route path="/kichen" element={<Kitchen />} />


            <Route path="/login" element={<Auth />} />
            <Route element={<RequireAuth />}>
              <Route path="/" element={<Admin />} />
              <Route index path="/admin" element={<Admin />} />
            </Route>

          </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default App;
