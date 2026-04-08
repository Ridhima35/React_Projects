import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = formData.email !== '' && formData.password !== '';

  return (
    <div className="h-full flex flex-col p-6 pt-10">
      <div className="mb-10">
        <h1 className="text-[28px] leading-tight font-medium text-popx-text mb-3">
          Signin to your<br />PopX account
        </h1>
        <p className="text-[18px] text-popx-muted leading-relaxed w-10/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="flex-1">
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
        />
        <TextInput
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className="pb-6">
        <Button 
          variant={isFormValid ? 'primary' : 'disabled'} 
          onClick={() => isFormValid && navigate('/profile')}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
