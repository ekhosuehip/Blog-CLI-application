# Blog-CLI-application

\Blog CLI is a command-line application that allows users to create, list, read, and delete blog posts in a simple and efficient manner.

## Features
- **Create Blog Posts**: Write and save blog posts with a title and content.
- **List Blog Posts**: View all saved blog posts.
- **Read Blog Posts**: Open and read any saved blog post.
- **Delete Blog Posts**: Remove unwanted blog posts.
- **User Personalization**: The application greets the user by their name.
- **Timestamps**: Blog posts include the date and time of creation.

## Requirements

- Node.js (v14 or later) installed on your system.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ekhosuehip/Blog-CLI-application.git
   cd Blog-CLI-application
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   Ensure you have `inquirer` installed, as it's required for the interactive prompts. The installation command will handle this automatically.

3. Link the CLI application globally:

   ```bash
   npm link
   ```

   This will allow you to use the `blog` command globally on your system.

## Usage

1. Run the application using the `blogpost` command:

   ```bash
   npx blogpost
   ```

2. Follow the interactive prompts to:

   - Enter your name.
   - Create, read, list, or delete blog posts.

## Dependencies

- [Inquirer.js](https://www.npmjs.com/package/inquirer): A library for creating interactive CLI prompts.
