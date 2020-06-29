import ipfshttpclient
import json

import sqlite3
import databaseHandler
import sys

conn = sqlite3.connect('database.db')

client = ipfshttpclient.connect(f"/dns/127.0.0.1/tcp/5001/http")

conn.row_factory = sqlite3.Row
   
cur = conn.cursor()
index = sys.argv[1]
cur.execute("select hash from apples where id = ?" , (index,))
    
rows = cur.fetchall()
for row in rows:
    abc = client.get_json(row['hash'])
    print (abc)