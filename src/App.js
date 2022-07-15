import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./componenets/layouts/NavBar";
import Footer from "./componenets/layouts/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Alert from "./componenets/layouts/Alert";
import { GithubProvider } from "./context/github/GithubContext";
import {AlertProvider} from './context/alert/AlertContext'
import User from "./pages/User";
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <NavBar />
          <main className="container mx-auto px-3">
            <Alert/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:login" element={<User />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
