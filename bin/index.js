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
