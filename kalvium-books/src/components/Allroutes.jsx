/* eslint-disable react/prop-types */

import RegistrationForm from './RegistrationForm'
import { Route, Routes } from 'react-router-dom'
import Books from './Books'
import LoginForm from './LoginForm'

function Allroutes(props) {


    return (
        <Routes>
            <Route path='/kalvium-books' element={<Books searchResults={props.searchResults} loading={props.loading} />} />
            <Route path='/kalvium-books/sign-up' element={<RegistrationForm/>} />
            <Route path='/kalvium-books/login' element={<LoginForm/>} />
        </Routes>
    )

}

export default Allroutes