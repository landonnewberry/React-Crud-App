import sqlite3

DB = 'db/app.db'

class Items(object):

    def __init__(self):
        self.conn = None

    def connect(self):
        self.conn = sqlite3.connect(DB)

    def disconnect(self):
        self.conn.close()

    @staticmethod
    def _convert_to_object(t):
        id, value = t
        return {
            'id': id,
            'value': value
        }

    def get_all(self):
        cursor = self.conn.cursor()
        cursor.execute("SELECT * FROM items")
        vals = cursor.fetchall()
        cursor.close()
        return [ self._convert_to_object(val) for val in vals ]

    def add_item(self, value, id):
        cursor = self.conn.cursor()
        cursor.execute("INSERT INTO items VALUES (?, ?)", (id, value))
        self.conn.commit()
        cursor.close()
