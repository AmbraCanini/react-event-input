import { useState } from 'react'
import EventLampadina from './components/EventLampadina.jsx'
import Color from './components/Color.jsx'
import PasswordChanger from './components/PasswordChanger.jsx'
import Newsletter from './components/Newsletter.jsx'
import Preventivo from './components/Preventivo.jsx'
import './App.css'

function App() {
    return (
        <div className="App">
            <EventLampadina />
            <Color />
            <PasswordChanger />
            <Newsletter />
            <Preventivo />
        </div>
    );
} 


export default App
