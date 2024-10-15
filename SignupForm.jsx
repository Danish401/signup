
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from './UserContext';
import { TextField, Button, Box } from '@mui/material';

const SignupForm = () => {
  const { setUser } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Save user data to localStorage (or send it to a backend server)
    localStorage.setItem('userData', JSON.stringify(data));
    setUser(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 3 }}>
      <h2>Sign Up</h2>
      <TextField
        fullWidth
        label="Name"
        {...register('name', { required: 'Name is required' })}
        error={!!errors.name}
        helperText={errors.name ? errors.name.message : ''}
        margin="normal"
      />
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
        {...register('password', { required: 'Password is required', minLength: 6 })}
        error={!!errors.password}
        helperText={errors.password ? 'Password must be at least 6 characters' : ''}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Sign Up
      </Button>
    </Box>
  );
};

export default SignupForm;
