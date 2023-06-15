HackDay2023 ESO (ctrl+shift+v to view)

# Installing Anaconda 

## [Click here to download installer](https://www.anaconda.com/download)
- while installing, when you see destination folder, copy the path or write it down somewhere
- install everything as default

## Adding Conda To Path
- open your computers environment variables (windows: search in bottom left for "environment variables")
- Click on "Environment Variables"
- click on "Path" under "User Variables"
- click edit
- click new
- paste the location you copied earlier and add "\Scripts" to the end of it
- click OK until it closes

## Creating the Environment
- open a command prompt (search cmd in buttom left)
- cd to the repo's main directory (open github desktop and right click on Hack Day 2023 in top left -> show in explorer) and run the command **conda env create -f eso-env.yml**
- when environment changes are made in the future, run **conda env update -f eso-env.yml**
- after everything is done loading, the last thing you should see is "conda deactivate"

# Installing Node

## [Click here to download installer](https://nodejs.org/en/download)
- install everything as default

## Installing the node environment
- open a command prompt and cd into the gui folder of the repo
- run **npm update** after changing directories into the gui folder