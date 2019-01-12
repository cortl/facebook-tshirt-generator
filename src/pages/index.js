import React from "react"
import {TShirtGenerator } from '../components/TShirtGenerator.js'

import '../styles/main.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default () => (
    <div className='app container'>
        <div className='col-md-10 offset-1 text-center'>
            <h1>Facebook T-Shirt Generator</h1>
        </div>
        <TShirtGenerator />
    </div>)
