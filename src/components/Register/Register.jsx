import { useDispatch } from 'react-redux';
import { register } from 'Redux/Auth/authOperations';
import {FormContainer, FormTitle, Label, Input, Button, InputBox, Form } from './Register.styled'

export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    name.value = '';
    email.value = '';
    password.value = '';
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit} autoComplete="on">
        <FormTitle>Sign Up</FormTitle>
        <InputBox>
          <Label>
            Username
            <Input type="text" name="name" />
          </Label>
          <Label>
            Email
            <Input type="email" name="email" />
          </Label>
          <Label>
            Password
            <Input type="password" name="password" />
          </Label>
        </InputBox>
        <Button type="submit">Register</Button>
      </Form>
    </FormContainer>
  );
}
