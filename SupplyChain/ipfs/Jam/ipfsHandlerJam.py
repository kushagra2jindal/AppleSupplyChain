import ipfshttpclient
import json

import sqlite3
import databaseHandlerJam
import sys

conn = sqlite3.connect('database.db')

#databaseHandler.deleteTables(conn)
databaseHandlerJam.createTables(conn)

client = ipfshttpclient.connect(f"/dns/127.0.0.1/tcp/5001/http")

index = sys.argv[1]
x = {}
x['Date'] = sys.argv[2]
x['appleindex1'] = sys.argv[3]
x['appleindex2'] = sys.argv[4]
y = json.dumps(x)
addJSON = client.add_json(y)

databaseHandlerJam.insertData(conn, index, addJSON)

databaseHandlerJam.showData(conn)

sys.exit()