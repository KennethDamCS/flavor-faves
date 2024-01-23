import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Search from './components/Search'
import RestaurantList from './components/RestaurantList';

function App() {
  

  return (
    <Router>
      <div>
        <Search />
        <RestaurantList />
      </div>
    </Router>
  )
}

export default App
