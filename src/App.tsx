import React from 'react';
//import logo from "./logo.svg";
import './App.css';
import { Button, Switch } from '@mui/material';
import { BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Mail from './pages/Mail';
import NotFound from './pages/Notfound'
import UserPage from './pages/UserPage';
import RegistAdress from './pages/RegistAdress';
import MailList from './pages/MailList';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<SignIn />} />
                    <Route path = "/SignIn" element = {<SignIn />}/>
                    <Route path = "/SignUP" element = {<SignUp />}/>
                    <Route path ="/Mail" element = {<Mail />}/>
                    <Route path ="/MailList/:id" element = {<MailList />}/>
                    <Route path = "/UserPage/:id" element = {<UserPage />} />
                    <Route path = "/RegistAdress" element = {<RegistAdress />} />
                    <Route path = "*" element = {<NotFound />}/>
                </Routes>
            </BrowserRouter>
        </div>
        
    );
}

function Home(){
    return <h1> HELLO BROWSER ROUTER WORLD!!</h1>
}

export default App;
