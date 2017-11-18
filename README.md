# Focus App

A Google Chrome extension to help block distracting websites. 

I've tried several different extensions that try to accomplish this same task, but none of them seem to fit into my workflow. So, I decided to build my own. The main focus for this particalur extension is to block a list of user defined websites based on a user set schedule. There will also be a feature to turn on the website blocking outside of the normal schedule.

If you want to check on the projects progress or see upcoming features checkout the project [Trello Board](https://trello.com/b/v07z1DJY/focus-app)<br> You can also check out the project's [Figma file](https://www.figma.com/file/TC2TZJLhhl6a8LqPPzT8ACxt/Focus-App) to see the designs


## Building the app

The current build process is managed by Laravel Mix which is a simple wrapper for webpack. To use the build process first install dependecies using either `npm install` or `yarn install`.

Build for development
```shell
npm run dev
```

Build for production
```shell
npm run prod
```
Pack extension (requires `.pem` key file to be in the `dist` directory)
```shell
npm run pack
```