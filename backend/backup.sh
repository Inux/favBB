#!/bin/bash

source ./.pw
export PGPASSWORD=$FAVBB_POSTGRES_PWD

FILENAME=favbb_backup_$(date "+%F-%T")

#pg_dump -h localhost -p 5432 -U app_user favbb | gzip > $FILENAME.gz
pg_dump -h localhost -p 5432 -U app_user -C -f backups/$FILENAME.sql favbb

# Restore with (in case the DB is corrupted or accidentially deleted...)
# pgsql h localhost -p 5432 -U app_user favbb < backup/$LATEST_BACKUP.sql
