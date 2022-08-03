import React from 'react';
import "./App.css";
import {
    Configuration,
    Sidebar,
    Visualize
} from "./components"
// import

const App: React.FC = () => {
    return (
        <Configuration 
            Visualize={Visualize}
            Sidebar={Sidebar}
        />
    )
}

export default App;