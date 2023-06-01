import sqlite3
import os
from flask import Flask
from flask import render_template, url_for, redirect
from flask import request
from jinja2 import Template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, Table, Column, Integer, String, MetaData, bindparam
from sqlalchemy.orm import sessionmaker, relationship
from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.declarative import declarative_base

current_dir=os.path.abspath(os.path.dirname(__file__))
app = Flask(__name__)

engine = create_engine('sqlite:///aventusdb.sqlite3')
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///"+ os.path.join(current_dir, "aventusdb.sqlite3")
db = SQLAlchemy()
db.init_app(app)
app.app_context().push()

class Users(db.Model):
    __tablename__='users'
    Aanum = db.Column(db.Integer, primary_key=True)
    mobnum=db.Column(db.Integer, unique=True, nullable=False)
    password=db.Column(db.String, nullable=False)
    name=db.Column(db.String)
    DOB=db.Column(db.Date)
    state=db.Column(db.String)
    religion=db.Column(db.String)
    caste=db.Column(db.String)
    profession=db.Column(db.String)

@app.route("/", methods=["GET", "POST"])
def main():
    if request.method=="GET":
        return render_template("main.html")
@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method=="GET":
        return render_template("signup.html")
    elif request.method=="POST":
        
        return render_template("main.html")


if __name__=="__main__":
    app.run()