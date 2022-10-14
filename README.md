# Holistic Github
Provides a UI that shows meta information about a given github account.

## Features
### Stats Dashboard:
- comments
- most used reactions (TBC)
- most active day (TBC)

## Architecture
The `/functions` directory contains a set of cloud functions that are deployed to firebase. They are deployed on merge to the master branch using the `functions-deploy` workflow.

