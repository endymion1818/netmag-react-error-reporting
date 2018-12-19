# React Error Reporting

Start this project by cloning the repo, opening it in a terminal window and running `npm i`.

# To See Our Error Message

This app has an **ErrorBoundary** component which will display a message instead of a white screen, and can be configured to send a message to Sentry or another error reporting tool. To trigger this message, do the following:

- Install Serve by running `npm install --global serve`
- Build a production-ready version of the app: `npm build`
- Serve the built files: `serve -s build`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
