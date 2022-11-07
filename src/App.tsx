import React from 'react';
//import logo from "./logo.svg";
import './App.css';
import { Button, Switch } from '@mui/material';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Mail from './pages/Mail';
import NotFound from './pages/Notfound'

function App() {
    return (
        <div>
            
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<SignIn />} />
                    <Route path = "/SignIn" element = {<SignIn />}/>
                    <Route path = "/SignUP" element = {<SignUp />}/>
                    <Route path ="/Mail" element = {<Mail />}/>
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
