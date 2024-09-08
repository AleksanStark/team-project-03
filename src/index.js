import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider
import { store, persistor } from './redux/store.js'; // Import your Redux store
import App from './components/App'; // Make sure the import path is correct
import './index.css';
import 'modern-normalize';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

// Get the root element
const rootElement = document.getElementById('root');

if (rootElement) {
    // Create a root using ReactDOM.createRoot
    const root = ReactDOM.createRoot(rootElement);

    // Render the application
    root.render(
        <Provider store={store}>
            {' '}
            {/* Wrap App with Provider */}
            <PersistGate loading={null} persistor={persistor}>
                <Router basename="/team-project-03">
                    {' '}
                    {/* Wrap with Router and set basename */}
                    <App />
                </Router>
            </PersistGate>
        </Provider>,
    );
} else {
    console.error('Root element not found');
}
