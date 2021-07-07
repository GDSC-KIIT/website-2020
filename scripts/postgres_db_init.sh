createuser strapi-user-2021 --login --echo

psql << EOF
CREATE DATABASE "strapi-db-2021";
ALTER USER "strapi-user-2021" WITH ENCRYPTED PASSWORD 'internal-database-password';
GRANT ALL PRIVILEGES ON DATABASE "strapi-db-2021" TO "strapi-user-2021";
EOF
