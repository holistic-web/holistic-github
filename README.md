[![web-app_deploy](https://github.com/holistic-web/holistic-github/actions/workflows/web-app_deploy.yml/badge.svg)](https://github.com/holistic-web/holistic-github/actions/workflows/web-app_deploy.yml) [![functions_deploy](https://github.com/holistic-web/holistic-github/actions/workflows/functions_deploy.yml/badge.svg)](https://github.com/holistic-web/holistic-github/actions/workflows/functions_deploy.yml)
# Holistic Github
Provides a UI that shows meta information about a given github account.

https://holistic-github.web.app/

## Features
### Stats Dashboard:
- comments
- most used reactions (TBC)
- most active day (TBC)

## Architecture
The `/functions` directory contains a set of cloud functions that are deployed to firebase. They are deployed on merge to the master branch using the `functions-deploy` workflow.

