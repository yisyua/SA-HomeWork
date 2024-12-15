# 開發環境建置

* inspectdb DB  

  ```bash
  npx sequelize-auto -h localhost -d SA-Homework -u sa -p 1433 -x My_P@ssw0rd! -e mssql -o ./models
  ```

* docker run

  ```bash
   docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=My_P@ssw0rd!' \
    -p 1433:1433 --name mssql-container \
    -d mcr.microsoft.com/mssql/server:2022-latest
  ```
