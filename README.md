**An improved directory and employee search tool.**

# :wave: Introduction

This a proof of concept for a questionair to be sent to employees to ask about remote work.

# :star:Getting started

## Background

### Docker

The project has been set up with Docker and Docker-Compose to simplify onboarding and standardize the development environment. Before getting started with this project, we strongly recommend you become comfortable with the basics of Docker.

**Useful links:**

- [Docker](https://docs.docker.com/get-started/overview/)
- [Docker Compose](https://docs.docker.com/compose/)

### Git

We use Git and GitHub to version control the project. Once again, we strongly recommend you become comfortable with these technologies before contributing to this project. You will also need a GitHub account prior to contributing.

**Useful links:**

- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)

## Step 1: Install VS Code

We strongly recommend installing [VS Code](https://code.visualstudio.com/) for development. It provides seamless integration for docker and other tools that we can take advantage of for this project.

Please also install all of the following VS Code extentions:

- [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Prisma Extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
- [Remote-WSL Extension (required for Docker on Windows)](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)
- [Docker Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [Git Lens Extension](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

## Step 2: Install Docker

Docker helps standardize the development environment independent of the developer's OS. This gives us the flexibility to support Windows, Mac, and Linux. As we advance, we will highlight the steps to set up the project for windows and Mac but the steps should be similar for Linux.

### Install Docker on Windows

Docker now recommends using WSL2 instead of the traditional Hyper-V VM on Windows machines. This make the setup slightly different from docker on Mac, but it provides significant performance improvements over Hyper-V.

1. Before installing Docker, make sure you enable WSL for windows by using the following [Microsoft Dcoumentation](https://docs.microsoft.com/en-us/windows/wsl/install-win10) \*_we recommend ubuntu 20.04 LTS as the linux distro for WSL_\*

2. Install [Docker Desktop](https://www.docker.com/products/docker-desktop) for Windows

3. Configure Docker Desktop to use the WSL2 engine and set the default Distro to **ubuntu 20.04 LTS** using the following [guide](https://docs.docker.com/docker-for-windows/wsl/).

4. Don't try to open the project yet. there are a few more steps to go!

### Install Docker on Mac

Download and install [Docker Desktop for Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=header)

## Step 3: Install/Launch the App On Docker

Because of the WSL2 configuration that we just did for Windows, the steps to get the project running is also slightly different for Windows vs. Mac.

### Run on Windows

Open the Ubuntu distro that you just installed in Windows by searching for it by name in the start menu. This will open a terminal window connected to the Ubuntu instance.

1. On the first bootup of the Ubuntu instance, it asks for a username and password. You can set these to whatever you would like. It will not affect the project. Just make sure you remember the password.
2. Use the command `git clone` to download the project in the home directory
3. Now `cd` into the project directory that was just downloaded
4. run the command `code .`
5. You should see an instance of VS code open. This instance of VS code is running in Windows but it is connected to the project directory inside the Linux instant. \*Magic of WSL\*
6. Please keep in mind that you may need to reinstall the VS Code extensions that we installed in the first stage in this "WSL enabled" instance of VS Code. Sometime these extension will get auto disabled in "WSL enabled" instance for security reasons.
7. At this stage you will need to create three files to define the environment variables, one at the root of the project and two in the `env` folder. To get those variables, ask the current developers.
8. Right-click on thr `docker-compose.yaml` file in the project directory and hit `compose up` from the menu. If you do not see this option, make sure the docker VS code extension is installed.
9. Wait a few minutes and the app should show up at [localhost:3000](http://localhost:3000)

### Run on Mac

Running the app on Mac is less involved and can be done with a few easy steps

1. Use the command `git clone` to download the project in the home directory
2. Now `cd` into the project directory that was just downloaded
3. run the command `code .`
4. At this stage you will need to create three files to define the environment variables, one at the root of the project and two in the `env` folder. To get those variables, ask the current developers.
5. Right-click on thr `docker-compose.yaml` file in the project directory and hit `compose up` from the menu. If you do not see this option, make sure the docker VS code extension is installed.
6. Wait a few minutes and the app should show up at [localhost:3000](http://localhost:3000)

## Step 4: Try out the different services of the app

You can now access different components of the web application:

- [localhost:3000](http://localhost:3000) - Application
- [localhost:8080](http://localhost:8080) - API endpoints
- [localhost:5432](http://localhost:5432) - PostgreSQL database


# Contact

This application is developed by students at [CDH Studio](https://cdhstudio.ca/)
