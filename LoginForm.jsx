// src/LoginForm.jsx
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from './UserContext';
import { TextField, Button, Box } from '@mui/material';

const LoginForm = () => {
  const { setUser } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && storedUserData.email === data.email && storedUserData.password === data.password) {
      setUser(storedUserData);
      alert('Login successful');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 3 }}>
      <h2>Login</h2>
      <TextField
        fullWidth
        label="Email"
        {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
        error={!!errors.email}
        helperText={errors.email ? 'Invalid email address' : ''}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        {...register('password', { required: 'Password is required' })}
        error={!!errors.password}
        helperText={errors.password ? 'Password is required' : ''}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
