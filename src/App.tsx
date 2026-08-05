import './App.css';

function App() {
  // Função simples para evitar o recarregamento da página ao enviar o formulário
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-wrapper">
      <main className="login-card">
        
        <header className="login-header">
          <h2>Bem-vindo de volta</h2>
          <p>Insira seus dados para acessar sua conta</p>
        </header>

        <form onSubmit={handleSubmit} className="login-form">
          {/* Campo de E-mail */}
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              placeholder="exemplo@email.com" 
              required 
            />
          </div>

          {/* Campo de Senha */}
          <div className="input-group">
            <div className="label-row">
              <label htmlFor="password">Senha</label>
              <a href="#esqueci-senha" className="forgot-password">Esqueceu a senha?</a>
            </div>
            <input 
              type="password" 
              id="password" 
              placeholder="Digite sua senha" 
              required 
            />
          </div>

          {/* Botão de Entrar */}
          <button type="submit" className="btn-submit">
            Entrar
          </button>
        </form>

        <footer className="login-footer">
          <p>Não tem uma conta? <a href="#cadastro">Cadastre-se</a></p>
        </footer>

      </main>
    </div>
  );
}

export default App;
