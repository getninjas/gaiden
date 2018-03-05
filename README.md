![Gaiden Logo](/images/logo.png)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1e3706db28f946f29cc0e5e2258f479f)](https://www.codacy.com/app/eduardojmatos/gaiden?utm_source=github.com&utm_medium=referral&utm_content=getninjas/gaiden&utm_campaign=badger) [![npm version](https://badge.fury.io/js/gaiden.svg)](https://badge.fury.io/js/gaiden)

GetNinjas Styleguide - https://getninjas.github.io/gaiden

# Quick Start
- Clone the repository: `git clone https://github.com/getninjas/gaiden.git`
- Install dependencies with: `npm install`
- Configure the build links with: `npm run config`

# Run project
To run project, just `npm start` on terminal!

The URL of our documents is http://localhost:8000/gaiden-css/index.html.

We have a server build on http://localhost:8001. This `/build` source is a "playground" with same html samples to test. Use and abuse it!

# Release process
We are using `npm version` to generate our releases. There are 3 kind of releases generally used: major, minor and patch. See the http://semver.org/ for more details.

So, after merge a PR, just execute `npm version major|minor|patch -m "Message of my release"` on master branch. There is no necessity of run `npm run build:prod`. The `npm version` has some webhooks, like `version` and `postversion`, present on our `package.json`.

The process is:

1. After merge PR on master:

  1.1 `git checkout master`;

  1.2 `git pull --tags origin master`;

2. run `npm version major|minor|patch -m "Message of your changes"` (important: you need to be an admin to push on master);

3. Now let's publish the package on npm. You need to run `npm adduser` and have the credentials to do this;

  3.1 If nothing fails on `npm version` and you have the credentials of npm GetNinjas account, run `npm publish`.

4. Done! Now, you can install the package on any project!

# Documentation

All documentation and markup sample are live on docs/demo. We are using documentjs to generate our styleguide page.

The build (`npm run docs`) will run documentjs binary and generate all scaffold files.
