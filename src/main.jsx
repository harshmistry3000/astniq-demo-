import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    
    // Attempt to log to our local server
    fetch('http://localhost:9999/log', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: `ERROR: ${error.toString()}\nSTACK: ${errorInfo.componentStack}`
    }).catch(e => console.error("Failed to send log", e));
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', color: 'red', background: '#fee' }}>
          <h2>Something went wrong.</h2>
          <p>Please check the console or the developer agent server for logs.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
