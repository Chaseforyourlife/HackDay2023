call cd gui
start cmd.exe /k "call npm start pause"
call cd ../
call conda init cmd.exe
call conda activate dog-env
call python run_api.py
pause