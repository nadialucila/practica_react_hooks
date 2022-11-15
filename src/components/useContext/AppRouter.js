import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <NavBar />
            <Routes>
                <Route exact path='/about' element={<AboutPage />}/>
                <Route exact path='/login' element={<LoginPage />}/>
                <Route exact path='/' element={<HomePage />}/>
                <Route element={<HomePage />}/> {/*aca se pone un 404*/}
                {/* Tambien se hace con <Redirect></Redirect> */}
            </Routes>
        </div>
    </Router>
  )
}
