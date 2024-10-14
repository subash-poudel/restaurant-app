#!/bin/bash

if [ $# -lt 1 ]; then
  echo "Usage: $0 token"
  exit 1
fi

# Variables
TOKEN=$1
REPO_URL="https://$TOKEN@github.com/subash-poudel/restaurant-app.git"
TARGET_DIR="restaurant-app"
BUILD_INFRA_DIR="build-infrastructure"
if [ -d "$TARGET_DIR" ]; then
  rm -rf "$TARGET_DIR"
  echo "Folder exists so removed."
else
  echo "Folder doesn't exist"
fi

# Clone the repository
echo "Cloning the repository from $REPO_URL..."
git clone $REPO_URL

# Check if the clone was successful
if [ -d "$TARGET_DIR" ]; then
  echo "Repository cloned successfully into $TARGET_DIR."

  # Navigate into the repository directory
  cd $TARGET_DIR || { echo "Failed to enter directory $TARGET_DIR"; exit 1; }
  cd $BUILD_INFRA_DIR || { echo "Failed to enter directory $BUILD_INFRA_DIR"; exit 1; }
  pwd
  ls
  echo "Installing packages for transformation 2"
  npm install
  echo "Installed packages for transformation"
  echo "Running transformation"
  node pre-process.js
  echo "Running transformation complete"
  cd ../../
  cd $TARGET_DIR
  cd frontend
  npm install
  npm run build
  pwd
  ls

  echo "Node.js commands executed successfully."

else
  echo "Failed to clone the repository."
  exit 1
fi
