# favBB

Find the next connection of your favourite open transport connections!

## Setup (Windows 10)

* Install [Docker](https://docs.docker.com/install/)
* As we use Postgres for persistency we need to create a volumne in Docker so that our
  data is also available when we restart the container again.

  ```cmd
  docker volume create x
  ```

* Set FAVBB_POSTGRES_PWD environment variable with a strong password! It will be the Postgres password!

## Run Backend (Windows 10)

* Change to 'src/backend'

  ```cmd
  cd src/backend
  ```

* Run Docker containers (Postgres, PostgREST and Swagger UI)

  ```cmd
  docker-compose up
  ```
