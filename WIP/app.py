import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template, redirect


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///Tourism_DB.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Tourism_table = Base.classes.Tourism

# Create our session (link) from Python to the DB


#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    return render_template(index.html)

if __name__=="__main":
    app.run(debug=True)


#@app.route("/api/v1.0/names")
#def names():
#    """Return a list of all passenger names"""
    # Query all passengers
#    session = Session(engine)
#    results = session.query(Passenger.name).all()

    # Convert list of tuples into normal list
#    all_names = list(np.ravel(results))

#    return jsonify(all_names)


# @app.route("/api/v1.0/passengers")
# def passengers():
#    """Return a list of passenger data including the name, age, and sex of each passenger"""
#    # Query all passengers
#    session = Session(engine)
#    results = session.query(Passenger.name, Passenger.age, Passenger.sex).all()

    # Create a dictionary from the row data and append to a list of all_passengers
#    all_passengers = []
#    for name, age, sex in results:
#        passenger_dict = {}
#        passenger_dict["name"] = name
#        passenger_dict["age"] = age
#        passenger_dict["sex"] = sex
#        all_passengers.append(passenger_dict)

#    return jsonify(all_passengers)


#if __name__ == '__main__':
#    app.run(debug=True)