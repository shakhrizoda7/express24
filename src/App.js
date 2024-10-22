import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
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
import Login from "./components/Login";
import Page404 from "./components/Page404";

const LoginContext = createContext({islogin: false, setLogin: () => {}})

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <LoginContext.Provider value={{isLogin, setLogin}}>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Landing/>}/>
          {isLogin && (
            <Route path="/dashboard" element={<Template/>}>
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
          )}
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export {LoginContext}
export default App;