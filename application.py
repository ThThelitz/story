#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Server for a digital narrative
"""
from flask import Flask, render_template

# # Library for enforcing HTTPS
# # https://github.com/GoogleCloudPlatform/flask-talisman
# from flask_talisman import Talisman

app = Flask(__name__)

# Ensure templates are auto-reloaded, i.e. reload templates when they are
# changed. Not sure what this means exactly.
app.config["TEMPLATES_AUTO_RELOAD"] = True

# # Setup possibly needed for stylesheets to work
# app.static_folder = "static"

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)
