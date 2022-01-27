Este é um projeto [Next.js](https://nextjs.org/) criado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Começando

Primeiramente, execute o comando para instalar todas as dependências utilizadas no projeto:

```bash
yarn
```

Depois de fazer isso, execute o comando para iniciar um servidor local:

```bash
yarn dev
```

Abra o projeto no seu navegador [http://localhost:3000](http://localhost:3000) para ver o resultado.

Depois disso, você deve instalar a ferramenta webhook client do stripe. Para isso, acesse a documentação no [site](https://stripe.com/docs/webhooks/test)

Por último, execute o comando para escutar os eventos no stripe:

```bash
stripe listen --forward-to localhost:3000/api/webhooks
```

## Configurando email público no github
TODO

## Configurando faunadb
TODO

## Configurando stripe
TODO
