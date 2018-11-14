import sqlite3

con = sqlite3.connect('../app.db')
c = con.cursor()

c.execute('''CREATE TABLE items
             (id text, value text)''')

c.close()
con.commit()
con.close()
