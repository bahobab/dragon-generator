#!/bin/bash

source dev.sh

export PGPASSWORD=$DB_PASSWORD

dropdb -U node_user dragonstackdb
createdb -U node_user dragonstackdb

echo 'Configuring dragonstackdb'

psql -U node_user dragonstackdb < ./bin/sql/generation.sql
psql -U node_user dragonstackdb < ./bin/sql/dragon.sql
psql -U node_user dragonstackdb < ./bin/sql/trait.sql
psql -U node_user dragonstackdb < ./bin/sql/dragonTrait.sql

node ./bin/insertTraits.js

echo 'Done Configuring dragonstackdb'
