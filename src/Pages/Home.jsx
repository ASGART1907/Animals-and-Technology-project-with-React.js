import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Animals from '../Components/Animals';
import Technologyes from '../Components/Technologyes';
import FirstPage from '../Components/FirstPage';

function Home() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<FirstPage/>} />
          <Route path='/animals' element={<Animals/>}/>
          <Route path='/technologyes'element={<Technologyes/>}/>
        </Routes>
    </div>
  )
}

export default Home