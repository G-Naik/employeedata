import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import AdminHome from './Components/AdminHome';
import EditEmployee from './Components/EditEmployee';
import Homepage from './Components/Homepage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Homepage/>}/>
           <Route path="/admin/*" element={<AdminHome/>}/>
           <Route path="/admin/emp/:id" element={<EditEmployee/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
