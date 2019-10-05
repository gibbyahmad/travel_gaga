#dependencies
import sqlite3
from flask import *

DATABASE = 'Tourism_DB.sqlite'

app = Flask(__name__)
app.config.from_object(__name__)

def connect_db():
    return sqlite3.connect(app.config['DATABASE'])

@app.route('/')
def index():
    cursor = g.db.execute('SELECT * FROM Tourism')
    return render_template('test.html',items=cursor.fetchall())


app.run(debug=True)