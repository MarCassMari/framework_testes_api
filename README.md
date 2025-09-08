# Framework de Testes de API

Este é um projeto de automação de testes de API, construído do zero utilizando as tecnologias **Playwright**, **Cucumber** e **Node.js** com base na linguagem JavaScript. O objetivo é validar o comportamento de endpoints da API REST tasks_to_do e qualquer outra API que precisa ter seus métodos, status e payload de retorno testados, garantindo que as funcionalidades de criação, leitura, atualização e exclusão de tarefas estejam rodando corretamente.

O projeto segue as melhores práticas de arquitetura de automação, como o **API Object Model**, garantindo um código limpo, modular e de fácil manutenção.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Playwright**: Ferramenta de automação para realizar requisições de API.
- **Cucumber**: Framework BDD (Behavior-Driven Development) para escrever testes em linguagem natural (Gherkin).

## 🛠️ Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1.  Clone o repositório:

    ```bash
    git clone [https://github.com/MarCassMari/framework_testes_api.git](https://github.com/MarCassMari/framework_testes_api.git)
    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd framework_testes_api
    ```

3.  Instale as dependências:
    ```bash
    npm install
    ```

## ⚙️ Configuração

As configurações do projeto são gerenciadas por variáveis de ambiente para garantir a flexibilidade e a segurança.

1.  Crie um arquivo `.env` na raiz do projeto.
2.  Adicione a `baseURL` da API que será testada.

    ```
    Conteúdo do arquivo .env
    API_BASE_URL=[https://tasks-to-do-list-api.herokuapp.com](https://tasks-to-do-list-api.herokuapp.com)
    ```

    > **Atenção:** O arquivo `.env` já está configurado para ser ignorado pelo Git (via `.gitignore`), mantendo suas informações confidenciais seguras.

## ▶️ Como Rodar os Testes

Para executar os testes de API, use o seguinte comando no terminal:

```bash
npm run start:dev
```
