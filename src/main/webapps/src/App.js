import './App.css';
import AddPatientRecord from './component/AddPatientRecord';
import PatientList from './component/PatientList';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navigationbar from './component/Navigationbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path='/adddata' element={<AddPatientRecord />}/>
          <Route path='/patientlist' element={<PatientList />}/>
          <Route path='/patient/:patientId' element={<AddPatientRecord />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
