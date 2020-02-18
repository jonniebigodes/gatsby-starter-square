<h1 align="center">
  Gatsby's Square payments starter
</h1>

Kick off your next Gatsby project with [Square](https://squareup.com/us/en) using this starter. 

This minimal starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React and also a sample serverless function to complete the payment process. 

## Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the square starter.

    ```shell
    # create a new Gatsby site using square
    gatsby new [my-awesome-site] https://github.com/jonniebigodes/gatsby-starter-square
    ```

2. **Manually clone and install the starter.**

    Alternatively you clone the repo directly with:

    ```shell
    git clone https://github.com/jonniebigodes/gatsby-starter-square
    ```
    Navigate to the folder where the repo was cloned:
    
    ```shell
    cd my-awesome-site
    ```
    
    And install the dependencies with either yarn or npm:

    ```shell
    yarn
    ```
3. **Setup a Square account**

    Set up a developer account in the [Square developer portal](https://squareup.com/signup?v=developers) to get started. 

    Go through the steps to create a app (don't use the word **square** as it's a reserved word) and don't forget to save the token, application id and localization id provided. As they are required for your project. 

4.  **Start developing.**

    Navigate into your new site’s directory and take a look at the `.env.sample` file, this file works as a baseline to store your Square application keys.

    ```shell
    cd my-awesome-site/
    ```

    Create both `.env.development` and `.env.production` files and paste the keys you obtained earlier, they're probably be the sandbox ones. 

    Run the following command based on your chosen package manager:

    ```shell
    yarn start
    ```

    ```shell
    npm run start
    ```

    You might be wondering why should i use the same sandbox keys in both files. 
    
    The shortest answer is that when you run `yarn start` or `npm run start` netlify-lambda will generate a production build of the sample serverless function provided in this starter.
    
    what it means is that it's expecting a set of environment variables to be set to allow the payment process to be complete. 

5.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    Open the `my-awesome-site` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── config
    ├── functions
    ├── src
    ├── .gitignore
    ├── .env.sample
    ├── .prettierrc
    ├── gatsby-config.js
    ├── LICENSE
    ├── netlify.toml
    ├── package-lock.json
    ├── yarn.lock
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2. **`/config`**: Inside this directory is a custom webpack config file for the serverless function to allow the the square payments sdk to run in a serverless environmnent. You can also add you own files here.

3.  **`/functions`**: Inside this directory you'll find a sample serverless function that will use the square payments sdk to finalize your payment process. 

4.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

5.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

6.  **`.env.sample`**: This is a sample file to demonstrate the usage of the environment variables required for the starter to run properly.

7.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.


8.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).


9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10.  **`netlify.toml`**: The configuration file required for building the starter in [Netlify](https://www.netlify.com/). 

10. **`package-lock.json`**  and **`yarn.lock`** (See `package.json` below, first). Both these files are automatically generated based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Usefull Resources

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

- **For a complete run down on the Square Payments documentation, head [to their developers documentation site](https://developer.squareup.com/us/en).** In there you'll find not only a well documentated usage of the API that is available, but also some examples.

- **For a set of testing values for your site, head to [this page](https://developer.squareup.com/docs/testing/test-values).** In tehre you'll find a list of card values that can be used for testing purposes.

## 💫 Deploy

Before you deploy don't forget to change your app from sandbox mode to production mode in the [Square developer portal](https://developer.squareup.com/apps) and adjust the variables and endpoints acordingly.



