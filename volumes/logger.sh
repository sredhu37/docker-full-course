#!/bin/sh

mkdir -p logs

while true; do
  echo "$(date) :: App is running" >> logs/app.log
  sleep 2
done
