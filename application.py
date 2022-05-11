#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Server for a digital narrative
"""
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def welcome():
    return render_template("welcome.html")

@app.route("/1")
def lexia_1():
    return render_template("start.html")

@app.route("/2")
def lexia_2():
    return render_template("create_password.html")

@app.route("/3")
def lexia_3():
    return render_template("email_login.html")

@app.route("/4")
def lexia_4():
    return render_template("wrong_password.html")

@app.route("/5")
def lexia_5():
    return render_template("email_request.html")

@app.route("/6")
def lexia_7():
    return render_template("email_repeat.html")

@app.route("/7")
def lexia_8():
    return render_template("email_booked.html")

if __name__ == "__main__":
    app.config["TEMPLATES_AUTO_RELOAD"] = True
    app.run(debug=True, use_reloader=False)
