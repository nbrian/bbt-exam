# BbtExam
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

## Description

This application have 3 routes to navigate to.
- `/registration` - page with form validation, clearing and submitting
- `/welcome` - page consuming data from the registration page
- `/haven` - page to demonstrate a landing page with responsive design

## Project structure

Under `src`, main folder contains:
- app - main application folder
        - components - dumb components used throughout the app
        - helper - utilities functions
        - interfaces
        - pages - main pages components
        - services
- assets - includes images
- styles - additional global styles 

## Libraries

These are the main libraries used by this application
- Angular CLI - tool to develop angular applications
- Angular Material - material design system from google
- In Memory Web Api - for mocking api calls
- Karma - for testing

## How to use this application
- open terminal
- install dependencies
```bash
    npm install
```
- run application
```bash
    npm run start
```

## To run test
- open terminal
- run test script
```bash
    npm run test
```

## Future upgrades
- Actual API calls
    - Temporarily using in memory Web API for API calls
- Using Material Theming
    - Right now the app styling used is overriding material design
- Additional testing
    - additional test cases
    - integration tests
    - E2E test using cypress

