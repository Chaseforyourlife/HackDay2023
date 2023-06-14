start cmd.exe /k "call cd gui & call echo Starting Frontend - Run 'npm start'"
call conda init cmd.exe
call conda activate eso-env
call python run_api.py
pause