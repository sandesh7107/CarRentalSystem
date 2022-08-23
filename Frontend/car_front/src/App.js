
import './App.css';

import Content from './components/Content';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <>
   
   <BrowserRouter>
     
     <Content/>
    
     </BrowserRouter>
   
   </>
  );
}

export default App;
