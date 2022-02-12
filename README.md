Este é um projeto [Next.js](https://nextjs.org/) criado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Sobre o projeto

Ignews é um projeto desenvolvido do zero no curso do ignite da rocketseat a partir da trilha do reactjs.
Trata-se de um blog de notícias por assinatura.

## Layout web
TODO

## Layout mobile
TODO

## Tecnologias

### front-end
- [axios](https://www.npmjs.com/package/axios)
- [prismic](https://prismic.io)
- [typescript](https://www.typescriptlang.org)
- [axios](https://www.npmjs.com/package/axios)
- [framer-motion](https://www.npmjs.com/package/framer-motion)
- [next]()
- [next-auth](https://next-auth.js.org)
- [nextjs-progressbar](https://www.npmjs.com/package/nextjs-progressbar)
- [react]()
- [react-icons](https://react-icons.github.io/react-icons/)
- [javascript]()
- [sass]()

### back-end
- [faunadb](https://fauna.com)
- [stripe](https://stripe.com/br)

## 🚀 Como executar o projeto

💡 Como o back-end está em serverless não é necessário executar nenhuma configuração separada para ele.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git]()
- [Node.js]()
- [VSCode]() ou outro editor de códigos
- [stripe webhook test](https://stripe.com/docs/webhooks/test)

### 🧭 Rodando a aplicação
⚠️ Quando clonar a aplicação, não se esqueça de:

- Criar um arquivo .env com os seguintes dados:
    - Stripe
        - STRIPE_API_KEY
        - NEXT_PUBLIC_STRIPE_PUBLIC_KEY
        - STRIPE_WEBHOOK_SECRET
        - STRIPE_SUCCESS_URL
        - STRIPE_CANCEL_URL
    - Github
        - GITHUB_CLIENT_ID
        - GITHUB_CLIENT_SECRET
    - Faunadb
        - FAUNADB_KEY
    - Prismic CMS
        - PRISMIC_ENDPOINT
        - PRIMIC_ACCESS_TOKEN

### Configurando email público no github
TODO

### Configurando faunadb
TODO

### Configurando stripe
TODO

### Configurando prismic CMS
TODO

```bash
# Clone este repositório
$ git clone https://github.com/alexandronrossi/ignews.git
# Acesse a pasta do projeto no seu terminal/cmd
$ cd ignews

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação será aberta na porta:3000 - acesse [http://localhost:3000](http://localhost:3000)

# Execute em um terminal a parte, o webhook de test do stripe para escutar as actions do usuário no stripe.
$ stripe listen --forward-to localhost:3000/api/webhooks

```
---

