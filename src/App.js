import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Navbar from './components/Navbar/Navbar';
import MovieForm from './pages/MovieDetails/MovieForm/MovieForm';
import CoursList from './pages/MovieDetails/CoursList/CoursList';
import Wellcome from './components/Wellcome/Wellcome';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Wellcome />}></Route>
      </Routes>
      <Routes>
        <Route path='/coursesList' element={<CoursList />}></Route>
      </Routes>
      <Routes>
        <Route path='/movieList' element={<MovieList />}></Route>
      </Routes>

      <Routes>
        <Route path='/movieForm' element={<MovieForm />}></Route>
      </Routes>

      <Routes>
        <Route path='/movieDetails/:id' element={<MovieDetails />}></Route>
      </Routes>
      {/* <MovieForm /> */}
    </div>
  );
}

export default App;
