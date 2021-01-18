# greengrocer

This app is designed to provide services to greengrocer employees

# instalando o docker e linkando com o mySQL (Fonte: https://medium.com/@chrischuck35/how-to-create-a-mysql-instance-with-docker-compose-1598f3cc1bee)

-   No terminal executar os seguintes comandos:

-   INSTALANDO O REPOSITÓRIO DOCKER

-   {sudo apt -get update}

-   {sudo apt-get install \
     apt-transport-https \
     ca-certificates \
     curl \
     software-properties-common}

-   {curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -}

-   INSTALANDO O DOCKER EM SI

-   {sudo apt-get update && sudo apt-get install docker-ce\}

-   {sudo curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && sudo chmod +x /usr/local/bin/docker-compose
    } // esta parte instala o Docker Compose

-   {docker-compose --version} // Esta parte verifica se a instalação foi concluida corretamente

-   CRIANDO UM ARQUIVO .yml DENTRO DO SEU PROJETO

-   Crie um arquivo chamado 'docker-compose.yml';

-   Dentro deste arquivo coloque o seguinte código:

{
version: '3.3'
services:
db:
image: mysql:5.7
restart: always
environment:
MYSQL_DATABASE: 'db' # So you don't have to use root, but you can if you like
MYSQL_USER: 'user' # You can use whatever password you like
MYSQL_PASSWORD: 'password' # Password for root access
MYSQL_ROOT_PASSWORD: 'password'
ports: # <Port exposed> : < MySQL Port running inside container> - '3306:3306'
expose: # Opens port 3306 on the container - '3306' # Where our data will be persisted
volumes: - my-db:/var/lib/mysql

# Names our volume

volumes:
my-db:
}

- Então, no terminal, rode o seguinte comando: sudo docker-compose up -d
