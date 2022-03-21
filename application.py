#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Server for a digital narrative
"""
from flask import Flask, render_template

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)
