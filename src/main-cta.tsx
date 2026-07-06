import React from 'react';
import ReactDOM from 'react-dom/client';
import FastConsultationButton from './components/FastConsultationButton';
import './index.css';

const rootElement = document.getElementById('react-cta-root');

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <FastConsultationButton />
        </React.StrictMode>
    );
}
