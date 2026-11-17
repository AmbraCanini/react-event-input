import { useState } from 'react'
import EventLampadina from './components/EventLampadina.jsx'
import Color from './components/Color.jsx'
import './App.css'

function App() {
    return (
        <div className="App">
            <EventLampadina />
            <Color />
        </div>
    );
} 


export default App
