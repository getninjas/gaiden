![Gaiden Logo](/public/images/logo-gaiden.png)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1e3706db28f946f29cc0e5e2258f479f)](https://www.codacy.com/app/eduardojmatos/gaiden?utm_source=github.com&utm_medium=referral&utm_content=getninjas/gaiden&utm_campaign=badger) [![npm version](https://badge.fury.io/js/gaiden.svg)](https://badge.fury.io/js/gaiden)

GetNinjas Styleguide - https://getninjas.github.io/gaiden

# Quick Start
- Clone the repository: `git clone https://github.com/getninjas/gaiden.git`
- Install dependencies with: `npm install`
- Configure the build links with: `npm run config`

# Build Process

The `npm run build` command, generated files into the `dist` folder, separated `themes` file.

# Release process

We are using `npm version` to generate our releases. There are 3 kind of releases generally used: major, minor and patch. See the http://semver.org/ for more details.

The process is:

1. After merge PR on master:

    ```bash
    git checkout master
    git pull --tags origin master
    ```

2. Run `npm run version` command.

3. Run `npm version major|minor|patch -m "Message of your changes"` (important: you need to be an admin to push on master).

4. Now let's publish the package on npm:
    1. If you not have access to Org GetNinjas in NPM, you need ask for users in Org to add you.
    2. If nothing fails on `npm version` and you have the credentials of npm GetNinjas account, run `npm publish`.

5. Done! Now, you can install the package on any project!

# Deploy to gh-pages

1. Run `npm run deploy-storybook` to publish static site in gh-pages;

2. Access this link https://getninjas.github.io/gaiden/ and enjoy it!

# Commands

Here are a description of the scripts that we have in the project:

| **Script**       | **Description**                                                                                            |
|------------------|-------------------------------------------------------------------------------------------------------------|
| storybook        | Start storybook for development purposes                                                                    |
| build-storybook  | Build storybook for deploy. The output is in `docs` folder                                                     |
| deploy-storybook | Deploy storybook in github-pages                                                                            |
| version          | Build the project and add the dist folder to git stage                                                      |
| postversion      | Script that runs after the version (due to naming conventions). Push the changes and the tags to the branch |
| build            | Build the library                                                                                           |
