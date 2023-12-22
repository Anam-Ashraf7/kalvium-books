/* eslint-disable react/prop-types */

import RegistrationForm from './RegistrationForm'
import { Route, Routes } from 'react-router-dom'
import Books from './Books'

function Allroutes(props) {


    return (
        <Routes>
            <Route path='/' element={<Books searchResults={props.searchResults} loading={props.loading} />} />
            <Route path='/sign-up' element={<RegistrationForm/>} />
        </Routes>
    )

}

export default Allroutes