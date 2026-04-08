import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col justify-end p-6 pb-12">
      <div className="mb-6">
        <h1 className="text-[28px] font-medium text-popx-text mb-3">Welcome to PopX</h1>
        <p className="text-[18px] text-popx-muted leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Button variant="primary" onClick={() => navigate('/register')}>
          Create Account
        </Button>
        <Button variant="secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
};

export default Landing;
