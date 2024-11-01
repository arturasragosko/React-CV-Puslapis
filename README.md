# React + TypeScript + Vite Setup Guide

This guide will walk you through the steps to set up a React project using TypeScript and Vite on an Ubuntu machine.


## Step 1: Update Package Index

First, update the package index to ensure you have the latest information on the available packages:

```bash
sudo apt update
```

## Step 2: Install Curl

Next, install curl, a command-line tool for transferring data with URLs

```bash
sudo apt install curl
```

## Step 3: Install Node.js

Download and run the NodeSource installation script for Node.js 18.x:

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
```

After the script completes, install Node.js:

```bash
sudo apt install -y nodejs
```

Verify that Node.js and npm were installed successfully by checking their versions:

```bash
node -v
npm -v
```
## Step 4: Set Up Your React Project

cd to project:

```bash
cd React-CV-Puslapis
```

Install dependencies:

```bash
npm install
```

## Step 5: Run the Development Server

```bash
npm run dev
```
