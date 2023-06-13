call cd gui
start cmd.exe /k "call npm start pause"
call cd ../
call conda init cmd.exe
call conda activate eso-env
call python run_api.py
pause