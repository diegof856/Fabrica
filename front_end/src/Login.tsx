import './App.css'

type LoginProps = {
  onShowRegister?: () => void
}

export default function Login({ onShowRegister }: LoginProps) {
  return (
    <main className="login-screen">
      <div className="login-card">
        <h1>
          Faça seu Login no <span>BicoDigital</span>
        </h1>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <label className="form-field">
            <span className="field-icon">🔍</span>
            <input type="email" placeholder="Email" aria-label="Email" />
          </label>

          <label className="form-field">
            <span className="field-icon">🔒</span>
            <input type="password" placeholder="Password" aria-label="Password" />
          </label>

          <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
            <button className="button button-primary" type="submit">
              Login
            </button>
          </div>
        </form>

        <hr style={{ margin: '1.75rem 0', border: 'none', borderTop: '1px solid rgba(15,23,42,0.06)' }} />

        <div className="register-footer">
          Não possui conta ?{' '}
          <button
            className="text-link"
            onClick={(e) => {
              e.preventDefault()
              onShowRegister && onShowRegister()
            }}
          >
            Cadastre - se
          </button>
        </div>
      </div>
    </main>
  )
}
