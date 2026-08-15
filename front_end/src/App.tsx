import { useState, useRef, useEffect, type MouseEvent } from 'react'
import './App.css'
import Login from './Login'
import Fade from './Fade'

function App() {
  const [showRegistration, setShowRegistration] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const registerFirstRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (showRegistration) {
      // focus the first interactive control in the register card for accessibility
      registerFirstRef.current?.focus()
    }
  }, [showRegistration])

  const openRegistration = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    event.preventDefault()
    setShowRegistration(true)
    setShowLogin(false)
  }

  const closeRegistration = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setShowRegistration(false)
  }

  const openLogin = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    event.preventDefault()
    setShowLogin(true)
    setShowRegistration(false)
  }

  const closeLogin = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setShowLogin(false)
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">BicoDigital</div>

        <nav className="nav-links" aria-label="Página principal">
          <a href="#inicio" className="nav-link-primary" onClick={() => { setShowRegistration(false); setShowLogin(false); }}>
            Início
          </a>
          <a href="#servicos" className="nav-link-accent">
            Nazztech
          </a>
        </nav>

        <div className="header-actions">
          <button className="link-button button-link-blue" onClick={openRegistration}>
            Cadastre-se
          </button>
          <button className="button button-primary" onClick={openLogin}>
            Login
          </button>
        </div>
      </header>

      {showRegistration ? (
        <Fade show={showRegistration} className="register-wrap">
          <main className="register-screen">
            <div className="register-card">
            <h1>
              Faça seu Cadastro no <span>BicoDigital</span>
            </h1>
            <div className="register-actions">
              <button ref={registerFirstRef} type="button" className="button button-secondary">Prestador</button>
              <button className="button button-secondary">Contratante</button>
            </div>
            <div className="register-footer">
              Já possui conta?{' '}
              <button className="text-link" onClick={openLogin}>
                Login
              </button>
            </div>
          </div>
        </main>
          </Fade>
      ) : showLogin ? (
        <Fade show={showLogin}>
          <Login onShowRegister={() => { setShowRegistration(true); setShowLogin(false); }} />
        </Fade>
      ) : (
        <main>
          <section className="hero-section" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow">BEM VINDO AO BICODIGITAL</span>
            <h1>
              A plataforma que transforma tarefas do dia a dia em
              <span>oportunidade.</span>
            </h1>
            <button className="button button-primary hero-button" onClick={openRegistration}>
              Cadastre-se
            </button>
            <div className="hero-meta">
              <span>+1000 Trabalhos Diversos</span>
              <strong>#BicoDigital</strong>
            </div>
          </div>

          <div className="hero-gallery">
            <div className="hero-card hero-card-shelf">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=80"
                alt="Estante com objetos decorativos"
              />
            </div>
            <div className="hero-card hero-card-grass">
              <img
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
                alt="Jardim bem cuidado"
              />
            </div>
            <div className="hero-card hero-card-boxes">
              <img
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=700&q=80"
                alt="Caixas empilhadas para entrega"
              />
            </div>
            <div className="hero-card hero-card-bedroom">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80"
                alt="Quarto arrumado"
              />
            </div>
            <div className="hero-card hero-card-mop">
              <img
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=700&q=80"
                alt="Serviço de limpeza doméstica"
              />
            </div>
            <div className="hero-card hero-card-movers">
              <img
                src="https://images.unsplash.com/photo-1519741497687-8d0b4aa2cc4f?auto=format&fit=crop&w=900&q=80"
                alt="Equipe movimentando caixas"
              />
            </div>
            <div className="hero-card hero-card-light">
              <img
                src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=700&q=80"
                alt="Mão trocando uma lâmpada"
              />
            </div>
            <div className="hero-card hero-card-plumber">
              <img
                src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=700&q=80"
                alt="Técnico consertando cano"
              />
            </div>
          </div>
        </section>

        <section className="work-section">
          <div className="work-panel">
            <span className="eyebrow">100+ Trabalhos em Sua região</span>
            <h2>
              Encontre o trabalho ideal perto de você e faça uma renda extra
              agora.
            </h2>
            <p>
              Conectamos tarefas locais a profissionais preparados, com um fluxo
              claro para conquistar mais oportunidades importantes para a sua
              rotina.
            </p>
          </div>
          <div className="work-visual">
            <div className="work-image work-image-large">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Profissional em uniforme organizando um depósito"
              />
            </div>
            <div className="work-image work-image-side">
              <img
                src="https://images.unsplash.com/photo-1519741497687-8d0b4aa2cc4f?auto=format&fit=crop&w=800&q=80"
                alt="Técnico consertando um encanamento"
              />
            </div>
          </div>
        </section>

        <section className="features-section" id="servicos">
          <div className="section-header">
            <h2>Nossas 3 Principais Ferramentas</h2>
            <p className="section-copy">
              Define ambitious service benchmarks that challenge your team to
              strive for excellence. These benchmarks should be both aspirational
              and achievable, inspiring everyone to aim higher and constantly
              improve.
            </p>
          </div>

          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>O Cráculo de Preços</h3>
              <p>
                Descubra preços justos e claros para cada serviço, com mais
                segurança e ganho real em cada trabalho.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Sistema RPO</h3>
              <p>
                Sistema de gestão para que você acompanhe pedidos, entregas e
                resultados no mesmo lugar.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Pagamento Blindado</h3>
              <p>
                Pagamentos protegidos e liberados somente após a conclusão do
                serviço, garantindo confiança e segurança para todos.
              </p>
            </article>
          </div>
        </section>

        <section className="cta-section">
          <h2>Caminhe para o seu sucesso !</h2>
          <p>
            O BicoDigital é a ponte entre quem busca novas oportunidades e quem
            quer contratar com segurança e agilidade.
          </p>
        </section>

      </main>
      )}

      <footer className="page-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-logo">BicoDigital</p>
            <p>
              A plataforma que transforma tarefas do dia a dia em
              oportunidade.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                F
              </a>
              <a href="#" aria-label="Twitter">
                T
              </a>
              <a href="#" aria-label="Instagram">
                I
              </a>
              <a href="#" aria-label="YouTube">
                Y
              </a>
            </div>
          </div>

          <div>
            <p className="footer-heading">Quick Links</p>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Shipping Info</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-heading">Categories</p>
            <ul>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Trabalhos</a>
              </li>
              <li>
                <a href="#">Perfil</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 BicoDigital. All rights reserved.</span>
          <div className="footer-policy">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
