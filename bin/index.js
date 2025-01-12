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

// Create a New Blog Post 

const createBlogPost = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your blog post:',
    },
    {
      type: 'input',
      name: 'content',
      message: 'Write your blog content:',
    },
  ]);

  const timestamp = new Date().toLocaleString(); 
  const filename = `${answers.title.toLowerCase().replace(/\s+/g, '-')}.txt`;
  const filepath = path.join(blogDir, filename);

  
  const blogContent = `Title: ${answers.title}\nCreated At: ${timestamp}\n\n${answers.content}`;
  fs.writeFileSync(filepath, blogContent, 'utf8');
  console.log(`Blog post '${answers.title}' saved successfully at ${timestamp}!`);
  displayMenu();
};

// List All Blog Posts

const listBlogPosts = () => {
  const files = fs.readdirSync(blogDir);

  if (files.length === 0) {
    console.log('No blog found.');
  } else {
    console.log('Your Blog Posts:');
    files.forEach((file, index) => console.log(`${index + 1}. ${file.replace('.txt', '')}`));
  }

  displayMenu();
};

// Read a Blog Post

const readBlogPost = () => {
  const files = fs.readdirSync(blogDir);

  if (files.length === 0) {
    console.log('No blog found.');
    return displayMenu();
  }

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'post',
        message: 'Select a blog post to read:',
        choices: files.map((file) => file.replace('.txt', '')),
      },
    ])
    .then((answers) => {
      const content = fs.readFileSync(path.join(blogDir, `${answers.post.toLowerCase().replace(/\s+/g, '-')}.txt`), 'utf8');
      console.log(`\n--- ${answers.post} ---\n${content}\n`);
      displayMenu();
    });
};
