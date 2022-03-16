import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {
  BrowserRouter as Router
} from "react-router-dom";
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <Router>
    <ScrollToTop/>
    <div className="App">
      <Header />
      <Main />
    </div>
    </Router>
  );
}

export default App;
