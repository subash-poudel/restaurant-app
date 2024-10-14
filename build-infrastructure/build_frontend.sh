#!/bin/bash

# Variables
if [ $# -lt 2 ]; then
  echo "Usage: $0 token"
  exit 1
fi

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
  npm install
  node index.js
  # Install Node.js dependencies
#   echo "Installing dependencies..."
#   npm install

#   # Run any additional Node.js commands (e.g., build, start)
#   echo "Running the Node.js application..."
#   npm start

  echo "Node.js commands executed successfully."

else
  echo "Failed to clone the repository."
  exit 1
fi
