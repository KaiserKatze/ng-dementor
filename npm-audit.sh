#!/bin/bash

PATTERN="found 0 vulnerabilities"

# Check the number of vulnerabilities
npm audit | grep PATTERN;
if [ $? -ne 0 ]; # found some vulnerabilities
then
  # Fix the vulnerabilities
  npm audit fix --force
  # Double-check if all the vulunerabilities have been fixed
  npm audit
fi
