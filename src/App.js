import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "./components/Template/Template";
import Arizalar from "./components/Template/Main/Arizalar";
import Yetkazilgan from "./components/Template/Main/Yetkazilgan";
import Statistika from "./components/Template/Main/Statistika";
import Qoshish from "./components/Template/Main/QoshishSec/Qoshish";
import Foydalanuvchilar from "./components/Template/Main/Foydalanuvchilar";
import Kategoriya from "./components/Template/Main/QoshishSec/Kategoriya";
import Taom from "./components/Template/Main/QoshishSec/Taom";
import Qoshilganlar from "./components/Template/Main/QoshishSec/Qoshilganlar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template/>}>
          <Route path="arizalar" element={<Arizalar/>}/>
          <Route path="yetkazilgan" element={<Yetkazilgan/>}/>
          <Route path="statistika" element={<Statistika/>}/>
          <Route path="qoshish" element={<Qoshish/>}>
            <Route path="kategoriya" element={<Kategoriya/>}/>
            <Route index element={<Kategoriya/>}/>
            <Route path="taom" element={<Taom/>}/>
            <Route path="qoshilganlar" element={<Qoshilganlar/>}/>
          </Route>
          <Route path="foydalanuvchilar" element={<Foydalanuvchilar/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;