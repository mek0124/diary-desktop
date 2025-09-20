<label id="top"></label>

<div align="center">
  <img src="./client/public/original.ico" width="80" height="80" />
  <h1>Diary</h1>
</div>

Table of Contents:

- [Introduction](#introduction)
- [How To Use](#how-to-use)
- [Contributing](#contributing)


### Introduction

Welcome to Diary. A simple ReactJS + ExpressJS application. 

I designed this application to primarily work for me. It's a simple diary application that uses MongoDB for storage. This is a 4 page application: Dashboard, New Entry, My Entries, and Support (currently disabled).

During setup, you will basically run the `npm install` command 3 separate times. This projects is setup to

1. run both the client and server together from the root directory
2. run either the client or the server from their respective folders as individual projects for targeted development.

```python
# Example

# to start both the client and the server, remain in the root directory and run
npm run dev

# to start the client by itself, cd into the client and run the start command
cd client
npm start

# to start the server by itself, cd into the server and run the start command
cd server
npm run dev
```

### How To Use

1. Open CMD and CD where you want to clone the repository
  - Windows
    - `cd C:\Path\To\Clone\Project\`
  - Linux/Mac
    - `cd ~/path/to/clone/project/`
2. Clone the repository
  - `git clone https://github.com/mek0124/diary-desktop.git`
3. CD into the project
  - `cd diary-desktop`
4. Run the install command to setup the root directory
  - `npm install`
5. Run the custom install command to concurrently install the client and server's dependencies
  - `npm run project_setup`
6. Run the project from the root directory
  - `npm run dev`

> NOTE: If you want to work on just the client or just the server, you can cd into their respective folders and run `npm start` for the client or `npm run dev` for the server.

### Contributing

Anyone is welcome to contribute their code to their fork of the repository, however, as this application is designed specifically for me, I reserve the right to approve or deny your contribution. All contributors will be listed below along with a summary of their contribution.

<u><b>When contributing</b></u>, be sure to include the following in a `message.txt` or similar file, please.

1. Title for change
2. Reason for change
3. What you actually changed
4. How your change made it better

I ask for these 4 things as it helps me learn. I am not the greatest developer and by answering these four questions for me, I can start learning how others think when developing, I can see how the current standard calls for writing/executing the code, and so on. Otherwise, if I suddenly <u><i>knew it all</i></u> then I wouldn't welcome your contributions lol

### Licensing

Although this project is technically licensed under the All Rights Reserved license, I do welcome input/change. Please see [Contributing](#contributing) above.

### Need Help?

If you need my assistance at any time with this application, please join my discord server and request your assistance there as it's so much easier for me to access, respond, and help.

https://discord.gg/gQQwawtWmF