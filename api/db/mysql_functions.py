import numpy as np
import pandas as pd
from sqlalchemy import create_engine,text
from mysql import connector

MYSQL_HOST = "hackday-2023.coebqcvk0yjt.us-east-2.rds.amazonaws.com"
MYSQL_PORT = 3306
MYSQL_USER = "admin"
MYSQL_PASSWORD = "hackday2023"
MYSQL_DB = 'hackdb'

MYSQL_ENGINE = create_engine("mysql+pymysql://" + MYSQL_USER + ":" + MYSQL_PASSWORD + "@" + MYSQL_HOST + "/" + MYSQL_DB)

def read_to_df(command:str,exclude_columns=[],remove_duplicate_columns=True) -> pd.DataFrame: 
    #conn = MYSQL_ENGINE
    conn = connector.connect(
        host=MYSQL_HOST,
        port=MYSQL_PORT,
        user=MYSQL_USER,
        password=MYSQL_PASSWORD,
        database=MYSQL_DB
    )
    print(f'COMMAND: {command}')
    df = pd.read_sql_query(command,conn)
    
    df = df.drop(exclude_columns, axis=1)
    #df = df.fillna(value=None)
    df = df.replace(np.nan,None)
    df = df.replace({np.nan: None})
 
    if remove_duplicate_columns:
        df = df.loc[:,~df.columns.duplicated()]

    return df

def send_sql(command:str):
    print(command)
    cnx = connector.connect(
        host=MYSQL_HOST,
        port=MYSQL_PORT,
        user=MYSQL_USER,
        password=MYSQL_PASSWORD,
        database=MYSQL_DB
    )
    cursor = cnx.cursor()
    #Executing SQL Statements
    cursor.execute(command)
    #Saving the Actions performed on the DB
    cnx.commit()
    
    #Closing the cursor
    cursor.close()

def upload_df(df: pd.DataFrame, table_name: str,return_id =False):
    print(df)
    Engine = MYSQL_ENGINE
    df.to_sql(name=table_name,con=Engine,if_exists='append',index=False)
    if return_id:
        with Engine.connect() as conn:
            
            result = conn.execute(text('SELECT LAST_INSERT_ID() as last_id;'))
            last_id = result.fetchone()[0]
            return last_id

