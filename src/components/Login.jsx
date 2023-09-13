import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`Email: ${email}, Senha: ${password}`);
    };
    return (
        <div className={styles.login}>
          <h1>Entrar</h1>
          <p>Entre com seu usuário e senha</p>
          <div>
             <form onSubmit={handleSubmit}>
                <div>
                 <label htmlFor="email"></label>
                 <input
                     type="email"
                    id="email"
                    placeholder="Email:"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                 />
                </div>
                