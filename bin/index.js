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

//Menu Options

const displayMenu = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: `What would you like to do, ${userName}?`,
      choices: [
        'Create a new blog post',
        'List all blog',
        'Read a blog',
        'Delete a blog',
        'Exit',
      ],
    },
  ]);

  switch (answers.action) {
    case 'Create a new blog post':
      createBlogPost();
      break;
    case 'List all blog':
      listBlogPosts();
      break;
    case 'Read a blog':
      readBlogPost();
      break;
    case 'Delete a blog':
      deleteBlogPost();
      break;
    case 'Exit':
      console.log(`Goodbye ${userName}!`);
      break;
  }
};