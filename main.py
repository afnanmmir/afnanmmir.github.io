from flask import Flask
from flask import Flask, redirect, url_for, render_template,request,session,flash
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(64)
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SESSION_FILE_DIR'] = './.flask_session/'

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/aboutme")
def about_me():
    return render_template('about_me.html')

@app.route("/coursework")
def coursework():
    return render_template('coursework.html')
@app.route("/projects")
def personal_projects():
    return render_template('Projects.html')

@app.route("/organizations")
def organizations():
    return render_template('Organizations.html')

@app.route("/contactme")
def contact_me():
    return render_template("contact_me.html")

if (__name__ == "__main__"):
        app.run(debug = True)