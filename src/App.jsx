import React from 'react';
import './App.css';

function App() {
    return (
        <>

        <div>
    <form>
        <label htmlFor="form-massage">
            Bericht:
            <input
                type="text"
                id="form-massage"
                name="message"
                placeholder="Laat hier een kort bericht achter"
                onChange={(e) => console.log(e.target.value)}
            />

        </label>
    </form>
        </div>




</>
    );
}

export default App;
