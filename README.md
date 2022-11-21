# DEVOPS NOTEPAD

A management and notification tool for Devops engineers.

## Installation
Make sure you have nodejs installed by running the following command:

```bash
node -v
```
> If you do not have node installed, install nodejs from [here](https://nodejs.org/en/download/)

> If your node version is less than v14, you would need to update it.

## Getting Started With the Backend (Node)

* Clone the central repository
* Checkout to the dev branch
* Change directory to the backend folder
* Install necessary packages using
* Update the environment variable credentials
```bash
npm install
```
* Run server using `npm run dev`.

## Contributing

1. Clone the dev branch with `git clone repo-link-here`
2. checkout from dev branch to your new branch named this way `git checkout -b feat/BE-15-process-script`. In this example, BE-15 is the ticket number, process script is what it does.
3. Add your changes to the new branch `git add .`
4. Commit changes `git commit -m "feat(BE-15): added endpoints to process login scripts"` . If it is a `bug` fix, replace feat with fix. If  it is some basic chore like removing redundant code, replace with `chore`
5. Now push your branch `git push origin feat/BE-15-process-script`
6. Go to github and make a PR to the dev branch. Add description stating what the PR achieves. Add your linear link to the PR description also.
7. Request for review from your team leads or mentors in the PR.
8. Now wait for it to be merged by the team leads or mentors

Remember to always rebase the work from dev branch

`git pull -r origin dev`

If your work is merged and you are to handle another ticket, pull from dev again and checkout using the above steps

# [SWAGGER DOCS](https://app.swaggerhub.com/apis-docs/Usenmfon/devosp-api/1.0.0-oas3#/)
