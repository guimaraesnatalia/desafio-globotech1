#Para Rodar a aplicação no Docker

1- Buildando a imagem:
$ docker build -t sample:dev .

2- Criando o container
$ docker run -it -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev

3- Acessando a aplicação
Acesse no seu navegador: localhost:3001