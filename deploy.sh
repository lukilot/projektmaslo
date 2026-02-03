#!/bin/bash
echo "--- START DEPLOY ---" > deploy_log.txt
echo "Timestamp: $(date)" >> deploy_log.txt
echo "PWD: $(pwd)" >> deploy_log.txt

echo "1. Git Status:" >> deploy_log.txt
git status >> deploy_log.txt 2>&1

echo "2. Git Add:" >> deploy_log.txt
git add . >> deploy_log.txt 2>&1

echo "3. Git Commit:" >> deploy_log.txt
git commit -m "Update Valentine's Offer and Order Builder" >> deploy_log.txt 2>&1

echo "4. Git Push:" >> deploy_log.txt
git push >> deploy_log.txt 2>&1

echo "--- END DEPLOY ---" >> deploy_log.txt
echo "✅ Check deploy_log.txt for results"
