#!/bin/sh
ansible-playbook ./deploy-drone.yml -i ./hosts -u root "$@"
