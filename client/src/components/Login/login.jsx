import React from "react";

import "./login.css";
import Main from "../template/Main";

export default () => {
  return (
    <div>
      <Main icon="home" title="Tela de Login">
        <form className="login-form">
          <input type="email" name="email" placeholder="Digite o seu e-mail" />
          <input
            type="password"
            name="senha"
            placeholder="Digite a sua senha"
          />
          <button type="submit">Login</button>
        </form>
      </Main>
    </div>
  );
};
