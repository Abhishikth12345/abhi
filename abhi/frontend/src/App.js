// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';
import Home from './Components/Home';
import Profile from './Components/Profile';
import AddQuestation from './Components/AddQuestation';
import Welcome from './Components/Welcome';
import SettingsPage from './Components/SettingsPage';
import AccountPage from './Components/AccountPage';
// import LoginComponent from './Components/LoginComponent';
// import RegistrationComponent from './Components/RegistrationComponent';

function App() {
  return (
    


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/signup' element={<SignUpForm />}/>
         <Route path='/home' element={<Home />}/>
         <Route path='/profile' element={<Profile/>}/>
         <Route path='/addQuestation' element={<AddQuestation />}/>
         <Route path='/settings' element={<SettingsPage />}/>
         <Route path='/accounts' element={<AccountPage/>}/>

         {/* <Route path='/login' element={<LoginComponent />}/>
         <Route path='/register' element={<RegistrationComponent />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;