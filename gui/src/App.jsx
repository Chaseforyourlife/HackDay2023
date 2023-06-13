import Test from '/src/components/Test'
import React from 'react';

export default function App(){
    return(
        <Router>
            <div className="App" id="App">
                <meta httpEquiv="Cache-Control" content=" no-cache, no-store, must-revalidate"></meta>
                <header className="App-header" id="App-header">
                    <Routes>
                        <Route path="/" element={<Test/>} />
                    </Routes>

                </header>
            </div>
        </Router>
    )




}