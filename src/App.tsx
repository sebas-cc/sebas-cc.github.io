import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { CookieBanner } from "./components/CookieBanner";

function App() {
  return (
    <>
      <Header />
      <Home />
      <CookieBanner />
    </>
  );
}

export default App;