import React from "react";
import {Button, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bootstrap() {
    return ( 
        <div>
            <h1>Install Bootstrap</h1>
            {/* <button onClick={() => alert("Hello")}>Click Me</button>
            <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button> */}

{[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
        </div>
     );
}

export default Bootstrap;