# Guia de Implementação e Backlog de Tarefas - Bico Digital

> **Roteiro de Desenvolvimento & Task Backlog para Engenheiros de Software**  
> **Sistema**: BICO DIGITAL  
> **Responsáveis**: Diego Felipe da Silva Avelino (Dev Lead), Wanderllan Santos (PO), João Victor (QA)

---

## 1. Visão Geral para a Equipe de Desenvolvimento

Esta documentação fornece o guia completo para a execução técnica do projeto **Bico Digital**. Todos os desenvolvedores devem utilizar esta especificação como roteiro obrigatório para implementação dos módulos, testes e entrega contínua (CI/CD).

---

## 2. Checklist do Backlog de Desenvolvimento (Sprint Tasks)

### Módulo 1: Setup & Autenticação (LGPD)
- [ ] **DEV-01**: Inicializar a estrutura base do projeto PWA Web no Frontend e API REST no Backend.
- [ ] **DEV-02**: Executar migrations para criação das tabelas no banco de dados relacional (`tb_usuarios`, `tb_demandas`, `tb_transacoes_escrow`, `tb_avaliacoes_rpg`, `tb_conquistas`, `tb_mensagens_chat`).
- [ ] **DEV-03**: Criar lógica de cadastro de clientes e prestadores com validação rigorosa de dígitos verificadores de CPF e CNPJ.
- [ ] **DEV-04**: Implementar autenticação via JWT (*JSON Web Token*) com hash de senhas em `bcrypt`.

### Módulo 2: Motor de Ofertas (Bounty) & Oráculo de Preços
- [ ] **DEV-05**: Implementar formulário/endpoint de criação de demanda com valor pré-fixado em BRL.
- [ ] **DEV-06**: Desenvolver o algoritmo do **Oráculo de Preços** (cálculo da média aritmética dos serviços concluídos na mesma categoria em um raio geográfico pré-definido).
- [ ] **DEV-07**: Integrar API do Google Maps no formulário para geolocalização e captura de latitude/longitude.

### Módulo 3: Mapeamento Interativo & Aceite Num Clique
- [ ] **DEV-08**: Desenvolver a tela de mapa interativo plotando os marcadores das demandas ativas.
- [ ] **DEV-09**: Implementar trava de visualização: profissional só enxerga demandas da sua categoria cadastrada.
- [ ] **DEV-10**: Criar o mecanismo de **Aceite Imediato em Um Clique** (operação atômica que altera o status para `EM_ANDAMENTO` e reserva a tarefa).
- [ ] **DEV-11**: Implementar regra de negócio de troca de categoria: congelamento/reset de histórico específico ao mudar de profissão declarada.

### Módulo 4: Custódia Financeira (Escrow) & Pagamentos
- [ ] **DEV-12**: Integrar Gateway de Pagamento (PIX / Cartão de Crédito) para efetuar a cobrança e retenção no ato da publicação da oferta.
- [ ] **DEV-13**: Implementar carteira digital do usuário e extrato de transações.
- [ ] **DEV-14**: Criar serviço automatizado de repasse dos fundos em custódia para a carteira do prestador após finalização do serviço.

### Módulo 5: Chat Condicional (Observer Pattern)
- [ ] **DEV-15**: Desenvolver módulo de mensagens em tempo real.
- [ ] **DEV-16**: Aplicar o padrão **Observer** para bloquear acesso e envio de mensagens enquanto `status != 'EM_ANDAMENTO'`.
- [ ] **DEV-17**: Implementar fluxo de contraproposta formal justificada para aprovação do cliente.

### Módulo 6: Avaliação Gamificada (Ficha RPG) & Validação por Foto
- [ ] **DEV-18**: Implementar envio de foto comprovatória de finalização da tarefa pelo prestador.
- [ ] **DEV-19**: Criar formulário de avaliação mútua (5 atributos para o prestador: *Pontualidade, Qualidade, Profissionalismo, Comunicação, Resolutividade*; 4 para o cliente).
- [ ] **DEV-20**: Desenvolver componente dinâmico de gráfico em barras espelhado no perfil público.
- [ ] **DEV-21**: Implementar gatilho automático de concessão de **Medalhas de Conquista** (ex: *Especialista em Conserto de Tomadas*).

---

## 3. Instruções para Execução do Ambiente Local (Setup)

### Pré-requisitos
- java-21 / react.js
- Banco de Dados Relacional (PostgreSQL / MySQL / SQLite)

### Passos de Inicialização
1. Clonar o repositório do projeto:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd fabrica_teste
   ```
2. Configurar o arquivo de ambiente `.env`:
   ```env
   PORT=3000
   DATABASE_URL=postgresql://user:password@localhost:5432/bico_digital_db
   JWT_SECRET=sua_chave_secreta_jwt_aqui
   GOOGLE_MAPS_API_KEY=sua_chave_google_maps
   PAYMENT_GATEWAY_TOKEN=seu_token_gateway
   ```
3. Instalar dependências e rodar migrations:
   ```bash
   npm install
   npm run db:migrate
   ```
4. Iniciar o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

---

## 4. Estratégia e Matriz de Testes para QA (João Victor)

| Módulo de Teste | Tipo de Teste | Critério de Aceite Principal |
| :--- | :--- | :--- |
| **Autenticação** | Unitário / E2E | Cadastro rejeitado para CPF/CNPJ inválidos; emissão correta de token JWT. |
| **Oráculo de Preços** | Unitário | Cálculo correto da média aritmética descartando valores discrepantes (*outliers*). |
| **Aceite Num Clique** | Integração | Garantir concorrência: se 2 prestadores clicarem simultaneamente, apenas 1 obtém o aceite. |
| **Chat Condicional** | E2E | Requisição de mensagem em demanda com status `CRIADA` deve retornar `403 Forbidden`. |
| **Custódia Escrow** | Integração | Repasse de fundos liberado apenas após evento de confirmação de conclusão com foto. |
| **Ficha RPG** | E2E | Gráfico em barras atualizado em tempo real no perfil após o envio da nota de 0 a 10. |
