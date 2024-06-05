import { Component } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';

class App extends Component{
    render() {
        return <h3>App component works!</h3>
    }
}

const root = createRoot(document.getElementById('app'));
root.render(<App/>)
