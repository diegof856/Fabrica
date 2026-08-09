# Levantamento de Requisitos e Especificação Técnica - Bico Digital

> **Documento de Engenharia de Requisitos (IEEE 830 / ISO 25010)**  
> **Sistema**: BICO DIGITAL  
> **Autores**: Equipe de Engenharia de Software e Produtos (UNIFACOL / NazaTech)

---

## 1. Backlog de Requisitos Funcionais (RF)

| ID | Módulo | Nome do Requisito | Descrição Técnica e Comportamental | Prioridade | Est. (Pts) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **RF01** | Publicação | Criação de Demanda (Bounty) | O sistema deve permitir que o cliente publique uma oferta informando título, descrição detalhada, categoria, geolocalização no mapa e o valor fixo da recompensa em BRL. | MÉDIA | 5 |
| **RF02** | Inteligência | Cálculo do Oráculo de Preços | O sistema deve calcular a média aritmética dos valores de serviços concluídos na mesma categoria e num raio geográfico $X$ km, exibindo uma sugestão de preço justo na tela de publicação. | ALTA | 13 |
| **RF03** | Exploração | Mapeamento Interativo de Demandas | O sistema deve integrar-se à API do Google Maps para plotar os marcadores de ofertas ativas, filtradas em tempo real com base no GPS do prestador. | ALTA | 8 |
| **RF04** | Negociação | Aceite Imediato em Um Clique | O sistema deve fornecer um botão de aceite que, ao ser acionado pelo prestador, altera atomicamente o status para `EM_ANDAMENTO` e remove a oferta de outros prestadores. | MÉDIA | 3 |
| **RF05** | Comunicação | Bloqueio Condicional de Chat | O sistema deve manter o módulo de conversa desativado por padrão. O chat só deve ser ativado via banco de dados caso a condição `status == 'EM_ANDAMENTO'` seja verdadeira. | MÉDIA | 3 |
| **RF06** | Pagamento | Retenção de Valores em Custódia | O sistema deve integrar-se a um Gateway de Pagamentos para debitar e reter o valor exato da recompensa na conta do cliente no momento da publicação da oferta. | ALTA | 13 |
| **RF07** | Pagamento | Liberação Automática de Fundos | O sistema deve transferir o valor retido em custódia para a carteira digital do prestador de forma automática assim que a confirmação de conclusão for efetuada pelo cliente. | ALTA | 13 |
| **RF08** | Avaliação | Sistema de Avaliação RPG | O sistema deve permitir que o cliente avalie o prestador de 0 a 10 em 5 atributos fixos: *Pontualidade, Qualidade, Profissionalismo, Comunicação e Resolutividade*. | MÉDIA | 3 |
| **RF09** | Perfil | Geração do Gráfico em Barras RPG | O sistema deve compilar a média aritmética acumulada dos atributos do prestador e renderizar um gráfico em barras dinâmico em seu perfil público. | MÉDIA | 5 |
| **RF10** | Segurança | Validação Algorítmica de CPF/CNPJ | O sistema deve validar os dígitos verificadores dos documentos no momento do cadastro para garantir unicidade e consistência no banco de dados. | ALTA | 5 |
| **RF11** | Profissional | Filtragem por Competência | O sistema deve restringir a visualização de serviços no mapa exclusivamente à categoria cadastrada pelo profissional (ex: eletricista só vê demandas elétricas). | ALTA | 5 |
| **RF12** | Profissional | Cadastro de Experiência e Perfil | Permite ao profissional configurar suas categorias de atuação, nível de experiência e visualizar seus termos de serviço. | ALTA | 5 |
| **RF13** | Recomendação| Motor de Recomendação Inteligente | Algoritmo que ordena e apresenta as ofertas mais adequadas considerando categoria, localização, reputação RPG e histórico de conclusões. | MÉDIA | 13 |
| **RF14** | Dashboard | Painel do Profissional | Interface com consolidação de ganhos totais, histórico de serviços prestados, gráfico RPG, conquistas e reputação acumulada. | MÉDIA | 13 |
| **RF15** | Negociação | Envio de Contraproposta Formal | Permite ao prestador submeter uma proposta formal de ajuste de valor justificada (deslocamento/complexidade), que requer aprovação prévia do cliente para debate. | ALTA | 13 |
| **RF16** | Contrato | Formalização Digital de Contrato | Geração automática de acordo digital de prestação de serviços com termos de valor, prazo, descrição e aceite eletrônico. | ALTA | 8 |
| **RF17** | Validação | Registro Fotográfico de Conclusão | Permite que o prestador envie uma foto do serviço finalizado como evidência técnica para liberação da custódia. | BAIXA | 3 |
| **RF18** | Avaliação | Avaliação Mútua e Espelhada | Permite que o prestador também avalie o cliente em 4 atributos: *Respeito, Clareza, Acolhimento e Colaboração*. | MÉDIA | 5 |
| **RF19** | Financeiro | Histórico Financeiro e Extrato | Exibe detalhamento de transações, taxas da plataforma, repasses efetuados e ticket médio por categoria. | MÉDIA | 8 |

---

## 2. Requisitos Não-Funcionais (RNF)

1. **RNF01 (Desempenho)**: Carregamento do PWA em dispositivos móveis < 2.0 segundos sob rede 4G.
2. **RNF02 (Disponibilidade)**: Sistema web disponível em 99,5% do tempo.
3. **RNF03 (Segurança & LGPD)**: Armazenamento seguro com encriptação de senhas (`bcrypt`/`Argon2`) e mascaramento de dados pessoais.
4. **RNF04 (Autenticação)**: Sessões protegidas por Tokens JWT (*JSON Web Tokens*) com tempo de expiração configurado.
5. **RNF05 (Compatibilidade)**: Responsividade total otimizada para navegadores Chrome, Safari, Firefox e Edge (Mobile e Desktop).
6. **RNF06 (Confiabilidade Preditiva)**: O Oráculo de Preços deve responder requisições de estimativa em tempo inferior a 300ms.
7. **RNF07 (Manutenibilidade)**: Código fonte estruturado sob padrão MVC com documentação de API Swagger/OpenAPI.
8. **RNF08 (Usabilidade)**: Fluxo de aceite de proposta executável com no máximo 2 toques na tela.

---

## 3. Regras de Negócio (RN)

- **RN01 (Bloqueio de Categoria)**: Um profissional cadastrado na categoria X não pode visualizar nem aceitar serviços da categoria Y.
- **RN02 (Reset de Histórico ao Trocar de Profissão)**: Se o prestador alterar sua categoria cadastrada, seu histórico específico e conquistas de especialista serão congelados/resetados para manter a integridade da reputação.
- **RN03 (Chat Desativado por Padrão)**: Não existe conversa aberta antes da formalização do serviço. Mensagens só são trafegadas quando `demanda.status == 'EM_ANDAMENTO'`.
- **RN04 (Custódia Obrigatória Escrow)**: O valor pago pelo cliente fica bloqueado na plataforma e só é transferido ao prestador após o aceite de conclusão.
- **RN05 (Avaliação Qualitativa em Barras)**: Proibido o uso de estrelas genéricas. A reputação é formada exclusivamente pelas médias dos atributos da Ficha RPG.
- **RN06 (Conclusão por Foto)**: O encerramento do chamado exige obrigatoriamente o upload de 1 foto comprovatória da prestação do serviço.

---

## 4. Matriz de Estórias de Usuário (User Stories)

```carousel
### US01 - Publicação de Recompensa
- **Ator**: Cliente
- **Ação**: Cadastrar serviço definindo valor fixo em BRL.
- **Benefício**: Garantir agilidade imediata sem receber centenas de orçamentos desconexos.
- **Critérios de Aceite**: Retenção do saldo via cartão/PIX; validação dos campos obrigatórios; inserção no mapa regional.
<!-- slide -->
### US02 - Aceite Num Clique
- **Ator**: Prestador de Serviços
- **Ação**: Clicar no botão "Aceitar Recompensa".
- **Benefício**: Garantir a contratação instantânea sem negociação prévia.
- **Critérios de Aceite**: Alteração de status para `EM_ANDAMENTO`; bloqueio do serviço para terceiros; ativação imediata do chat.
<!-- slide -->
### US03 - Sugestão do Oráculo de Preços
- **Ator**: Cliente
- **Ação**: Visualizar faixa de preço sugerida ao selecionar a categoria.
- **Benefício**: Evitar publicar valores discrepantes ou fora da realidade do mercado regional.
- **Critérios de Aceite**: Exibição da faixa em R$ com base nos últimos 50 serviços concluídos no raio de 15km.
```
