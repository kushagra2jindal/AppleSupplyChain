import sqlite3

def deleteTables(conn):
    try:
        conn.execute('drop table jams')
        print('jams table droped')
    except:
        print("jams table not droped")


def createTables(conn):
    try:
        conn.execute('CREATE TABLE jams (id INT, hash TEXT)')
    except:
       #t = "already exists"
        print ("not able to create jam")


def insertData(conn,index,hash):
    #cur = conn.cursor()
    conn.row_factory = sqlite3.Row
   
    cur = conn.cursor()
    cur.execute("select * from jams")
    count = 0

    rows = cur.fetchall()
    for row in rows:
        if(int(row['id']) == int(index)):
            count = count + 1
    
    if(count == 0):
        conn.execute("INSERT INTO jams VALUES (?,?)",(index, hash) )

    else:
        cur.execute("update jams set hash=? where id=?",(hash,index))

    conn.commit() 
    


def showData(conn):
    conn.row_factory = sqlite3.Row
   
    cur = conn.cursor()
    cur.execute("select * from jams")
    
    rows = cur.fetchall()
    for row in rows:
        print (row['id'],row['hash'])