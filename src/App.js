import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Template from "./components/Template/Template";
import Arizalar from "./components/Template/Main/Arizalar";
import Yetkazilgan from "./components/Template/Main/Yetkazilgan";
import Statistika from "./components/Template/Main/Statistika";
import Qoshish from "./components/Template/Main/QoshishSec/Qoshish";
import Foydalanuvchilar from "./components/Template/Main/Foydalanuvchilar";
import Kategoriya from "./components/Template/Main/QoshishSec/Kategoriya";
import Taom from "./components/Template/Main/QoshishSec/Taom";
import Qoshilganlar from "./components/Template/Main/QoshishSec/Qoshilganlar";
import Admin from "./components/Template/Admin";
import Landing from "./components/Landing";
import Page404 from "./components/Page404";


function App() {
  const isLogin = useSelector((state) => state.layout.isLogin);

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>

          {isLogin ? (
            <Route path="/dashboard" element={<Template/>}>
              <Route index element={<Admin/>}/>
              <Route path="arizalar" element={<Arizalar/>}/>
              <Route path="yetkazilgan" element={<Yetkazilgan/>}/>
              <Route path="statistika" element={<Statistika/>}/>

              <Route path="qoshish" element={<Qoshish/>}>
                <Route path="kategoriya" element={<Kategoriya/>}/>
                <Route index element={<Kategoriya/>}/>
                <Route path="taom" element={<Taom/>}/>
                <Route path="qoshilganlar" element={<Qoshilganlar/>}/>
              </Route>

              <Route path="admin" element={<Admin/>}/>
              <Route path="foydalanuvchilar" element={<Foydalanuvchilar/>}/>
            </Route>
          ) : (
            <Route path="*" element={<Page404/>}/>
          )}
        </Routes>
      </BrowserRouter>
  );
}

export default App;