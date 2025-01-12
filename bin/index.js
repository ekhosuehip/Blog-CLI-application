#!/usr/bin/env node

// Blog CLI Application

import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';

// Get the current directory
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const blogDir = path.resolve(__dirname, 'blogs');

// Ensure the blogs directory exists
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir);
}

let userName = '';

// Prompt for the user's name
 
const askForUserName = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter your name?',
    },
  ]);

  userName = answers.name;
  console.log(`\nHello, ${userName}! Welcome to Blog CLI.`);
  displayMenu();
};