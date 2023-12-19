docker build --no-cache -f SQL\Dockerfile.PostgreSql -t otel6-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t otel6-java/app ../../..
