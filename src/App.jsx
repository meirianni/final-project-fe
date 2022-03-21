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
  let auth = sessionStorage.getItem('logged');
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

            {/* PUBLIC ROUTES
            Pages yang bisa di akses oleh siapa pun pengunjung website
            */}
          <Route>
            <Route path="/" element={<Admin />} />
            <Route path="/kasir" element={<Kasir />} />
            <Route path="/kichen" element={<Kitchen />} />


            <Route path="/login" element={<Auth />} />
            {/* <Route element={<RequireAuth />}>
              <Route index path="/admin" element={<Admin />} />
            </Route> */}

          </Route>
            {/* NOT FOUND PAGE
            end point yang tak terdapaftar akan dialihkan ke page not found
            */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default App;