import axios from 'axios';
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('doner');
  const [orgName, setOrgName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/register', {
        email,
        role,
        orgName,
      });
      console.log('Success:', res.data);
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <select onChange={e => setRole(e.target.value)}>
        <option value="doner">Doner</option>
        <option value="receiver">Receiver</option>
      </select>
      <input type="text" placeholder="Organization Name" onChange={e => setOrgName(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
