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
def lexia_6():
    return render_template("email_booked.html")

@app.route("/7")
def lexia_7():
    return render_template("email_error_full.html")

@app.route("/8")
def lexia_8():
    return render_template("email_error_credits.html")

@app.route("/9")
def lexia_9():
    return render_template("welcome_week.html")

@app.route("/10")
def lexia_10():
    return render_template("week_1.html")

@app.route("/11")
def lexia_11():
    return render_template("building.html")

@app.route("/12")
def lexia_12():
    return render_template("floor.html")

@app.route("/13")
def lexia_13():
    return render_template("grill.html")

@app.route("/999")
def test():
    return render_template("test.html")




if __name__ == "__main__":
    app.config["TEMPLATES_AUTO_RELOAD"] = True
    app.run(debug=True, use_reloader=False)
