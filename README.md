# Rentcars
Aplicação web para uma locadora de veículos que permite ao usuário se registrar, logar e reservar um carro por um determinado período.

### Tecnologias usadas
O frontend da aplicação foi feito inteiramente com React (Typescript). <br />
Já o backend, com Srpingboot (RestAPI) e MongoDB (banco de dados NoSQL).

### Acesse a aplicação

Para a inicialização do app, é necessário clonar o repositório.
```bash
$ git clone https://github.com/guilhermecappi/desafio-sulamerica-rentcars.git
```
Instale o <a href="https://www.mongodb.com/" target="_blank">MongoDB</a> e importe o banco de dados rentcarsdb, localizado na pasta **"mongo-db"**, como mongodump folder. <br />
É recomendado fazer a instalação do <a href="https://studio3t.com/download/" target="_blank">Studio 3T</a> para importar o arquivo de forma mais prática. <br />
<br />
Execute a aplicação SpringBoot, localizada na pasta **"backend"**, em servidor local (port:8080). <br />
<br />
Agora, execute os comandos abaixo na pasta **"frontend"**:
```bash
# Para instalar as dependências
$ yarn

# Para iniciar o projeto
$ yarn start
```
