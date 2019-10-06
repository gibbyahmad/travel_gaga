import os
from flask import Flask, render_template, json, jsonify, current_app as app

# static/data/test_data.json

app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/')
def index():
  
  print("Server received request for 'Home' page...")
  return render_template("index.html")
  #return render_template('index.html', data=data)

@app.route('/api/jsdata')
def jsdata():
  filename = os.path.join('arrival_tourist.json')
  with open(filename) as jsonfile:
    data_read = json.load(jsonfile)
  return jsonify(data_read)


if __name__ == "__main__":
  app.run(debug=True)