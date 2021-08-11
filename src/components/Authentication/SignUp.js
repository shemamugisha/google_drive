import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';
import Container from './CenterContainer';

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const { signup } = useAuth();

  async function handlerSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match');
    }

    try {
      setError('');
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/login');
    } catch (error) {
      console.log(error);
      setError('Failed to create an account');
    }

    setLoading(false);
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign Up</h2>

          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handlerSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Form.Group id='password-confirmation'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type='password' ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className='w-100 mt-2' type='submit'>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className='w-100 text-center mt-2'>
        Already have an account ? <Link to='/login'>Log In</Link>
      </div>
    </Container>
  );
}

export default SignUp;
