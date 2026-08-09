# Especificação de Banco de Dados Relacional - Bico Digital

> **Documento de Modelagem de Banco de Dados (Relacional / ERD)**  
> **Sistema**: BICO DIGITAL  
> **Autores**: Equipe de Engenharia de Banco de Dados

---

## 1. Diagrama de Entidade e Relacionamento (ERD)

```mermaid
erDiagram
    TB_USUARIOS ||--o{ TB_DEMANDAS : publica
    TB_USUARIOS ||--o{ TB_DEMANDAS : executa
    TB_USUARIOS ||--o{ TB_AVALIACOES_RPG : avalia_ou_recebe
    TB_USUARIOS ||--o{ TB_CONQUISTAS : possui
    TB_DEMANDAS ||--o{ TB_MENSAGENS_CHAT : contem
    TB_DEMANDAS ||--o| TB_TRANSACOES_ESCROW : custodia
    TB_DEMANDAS ||--o| TB_AVALIACOES_RPG : gera

    TB_USUARIOS {
        uuid id PK
        string nome
        string email
        string senha_hash
        string cpf_cnpj
        string tipo_usuario
        string categoria_profissional
        decimal saldo_carteira
        timestamp criado_em
    }

    TB_DEMANDAS {
        uuid id PK
        uuid cliente_id FK
        uuid prestador_id FK
        string titulo
        text descricao
        string categoria
        decimal valor_recompensa
        double latitude
        double longitude
        string status
        string url_foto_validacao
        timestamp criado_em
    }

    TB_TRANSACOES_ESCROW {
        uuid id PK
        uuid demanda_id FK
        decimal valor
        string status_custodia
        string gateway_transaction_id
        timestamp retido_em
        timestamp liberado_em
    }

    TB_AVALIACOES_RPG {
        uuid id PK
        uuid demanda_id FK
        uuid avaliador_id FK
        uuid avaliado_id FK
        int pontualidade
        int qualidade
        int profissionalismo
        int comunicacao
        int resolutividade
        text relato_justificativo
        timestamp criado_em
    }

    TB_CONQUISTAS {
        uuid id PK
        uuid usuario_id FK
        string nome_medalha
        string categoria_associada
        timestamp conquistada_em
    }

    TB_MENSAGENS_CHAT {
        uuid id PK
        uuid demanda_id FK
        uuid remetente_id FK
        text conteudo
        timestamp enviado_em
    }
```

---

## 2. Dicionário de Dados

### 2.1 Tabela `tb_usuarios`
- `id` (`UUID`, Primary Key): Identificador único do usuário.
- `nome` (`VARCHAR(150)`, NOT NULL): Nome completo do usuário.
- `email` (`VARCHAR(150)`, UNIQUE, NOT NULL): E-mail de login.
- `senha_hash` (`VARCHAR(255)`, NOT NULL): Hash da senha (`bcrypt`).
- `cpf_cnpj` (`VARCHAR(18)`, UNIQUE, NOT NULL): CPF ou CNPJ validado por algoritmo.
- `tipo_usuario` (`VARCHAR(20)`, NOT NULL): Enum (`'CLIENTE'`, `'PRESTADOR'`).
- `categoria_profissional` (`VARCHAR(50)`, NULLABLE): Categoria ativa de trabalho (ex: `'ELETRICA'`, `'TI'`).
- `saldo_carteira` (`DECIMAL(10,2)`, DEFAULT 0.00): Saldo digital em BRL.

### 2.2 Tabela `tb_demandas`
- `id` (`UUID`, Primary Key): Identificador único da oferta Bounty.
- `cliente_id` (`UUID`, Foreign Key -> `tb_usuarios.id`): ID do cliente contratante.
- `prestador_id` (`UUID`, Foreign Key -> `tb_usuarios.id`, NULLABLE): ID do prestador que aceitou a oferta.
- `titulo` (`VARCHAR(150)`, NOT NULL): Título resumido da tarefa.
- `descricao` (`TEXT`, NOT NULL): Detalhamento do serviço.
- `categoria` (`VARCHAR(50)`, NOT NULL): Categoria profissional da tarefa.
- `valor_recompensa` (`DECIMAL(10,2)`, NOT NULL): Valor pré-fixado pelo cliente em BRL.
- `latitude` (`DOUBLE PRECISION`, NOT NULL): Coordenada de latitude para o mapa.
- `longitude` (`DOUBLE PRECISION`, NOT NULL): Coordenada de longitude para o mapa.
- `status` (`VARCHAR(30)`, NOT NULL): Enum (`'CRIADA'`, `'EM_ANDAMENTO'`, `'CONCLUIDA'`, `'CANCELADA'`).
- `url_foto_validacao` (`VARCHAR(255)`, NULLABLE): URL da foto de comprovação do serviço.

### 2.3 Tabela `tb_transacoes_escrow`
- `id` (`UUID`, Primary Key): Identificador da custódia.
- `demanda_id` (`UUID`, Foreign Key -> `tb_demandas.id`): ID da demanda vinculada.
- `valor` (`DECIMAL(10,2)`, NOT NULL): Montante retido.
- `status_custodia` (`VARCHAR(30)`, NOT NULL): Enum (`'RETIDO'`, `'LIBERADO_PARA_PRESTADOR'`, `'ESTORNADO'`).

### 2.4 Tabela `tb_avaliacoes_rpg`
- Armazena as notas individuais (0 a 10) nos 5 atributos de reputação do profissional e nos 4 atributos do cliente, utilizadas para gerar o gráfico em barras espelhado no perfil público.
