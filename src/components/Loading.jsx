import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../styles/Loading.css';

function Loading() {
  return (
    <div className="loading-container">
      <Spinner animation="border" role="status" variant="success" className="center" />
    </div>
  );
}

export default Loading;
