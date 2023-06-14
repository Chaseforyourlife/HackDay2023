#!/bin/bash
conda env update -f eso-env.yml
cmd.exe /k "call cd gui & call npm update & call echo Starting Frontend - Run 'npm start'"
eval "$(conda shell.cmd.exe hook)"
conda activate eso-env
python run_api.py
read -p "Press any key to continue..."