import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/Auth/authOperations';
import {FormContainer, FormTitle, Label, Input, Button, InputBox} from './Login.styled'

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const { email, password } = event.target.elements;
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
    email.value = '';
    password.value = '';
  };

  return (
      <FormContainer>
        <form onSubmit={handleSubmit} autoComplete="on">
          <FormTitle>Log In </FormTitle>
          <InputBox>
            <Label>
              Email
            <Input type="email" name="email" />
            </Label>
            <Label>
              Password
            <Input type="password" name="password" />
            </Label>
          </InputBox>
          <Button type="submit">Login</Button>
        </form>
      </FormContainer>
  );
};