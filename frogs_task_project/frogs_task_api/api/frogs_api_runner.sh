#!/bin/bash

clear
sudo kill -9 $(sudo lsof -t -i:8000)
./manage.py runserver
clear
