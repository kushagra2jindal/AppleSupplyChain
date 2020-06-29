import ipfshttpclient
import json

import sqlite3
import databaseHandler
import sys

conn = sqlite3.connect('database.db')

#databaseHandler.deleteTables(conn)
databaseHandler.createTables(conn)

client = ipfshttpclient.connect(f"/dns/127.0.0.1/tcp/5001/http")

index = sys.argv[1]
x = {}
x['color'] = sys.argv[2]
x['Date'] = sys.argv[3]
y = json.dumps(x)
addJSON = client.add_json(y)
databaseHandler.insertData(conn, index, addJSON)

databaseHandler.showData(conn)

sys.exit()
