import React, { useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { requestPost, setToken } from 'utils/request';

import { Block, Button, Field, Form, H1, Input, Label } from 'components/ui';

import './index.css';

const Login = React.memo(() => {
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {}, []);

  const handleSubmit = useCallback(() => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      requestPost('users/api-token-auth/', { username: email, password })
        .then(([data]) => {
          if (data?.type === 'object' && data?.value['token']) {
            const token = data.value['token'];

            if (typeof token === 'string') {
              setToken(token);
              navigate('/');
            }
          }
        })
        .catch((error) => {
          console?.error('Error on login', error);
        });
    }
  }, [navigate]);

  return (
    <div className="login">
      <Block className="login-card" inset insetSize="lg">
        <H1>Log in</H1>

        <Form offset offsetSize="lg">
          <Field>
            <Label>Email address</Label>
            <div className="controls">
              <Input type="text" ref={emailRef} />
            </div>
          </Field>

          <Field>
            <Label>Password</Label>
            <div className="controls">
              <Input type="password" ref={passwordRef} />
            </div>
          </Field>

          <Field>
            <Button isPrimary onClick={handleSubmit}>Submit</Button>
          </Field>
        </Form>
      </Block>
    </div>
  );
});

export default Login;
