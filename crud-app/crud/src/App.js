import Adduser from "./components/Adduser";
import Alluser from "./components/Alluser";
import EditUser from "./components/EditUser";
import Codeforinterview from "./components/Codeforinterview";
import Navbar from "./components/Navbar";


import {BrowserRouter , Routes , Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Codeforinterview/>} />
        <Route path='/all' element={<Alluser/>} />
        <Route path='/add' element={<Adduser/>} />
        <Route path='/edit/:name' element={<EditUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
