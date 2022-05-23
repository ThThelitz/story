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
    return render_template("journey.html")

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

@app.route("/14")
def lexia_14():
    return render_template("room_LH45957.html")

@app.route("/15")
def lexia_15():
    return render_template("room_LH45957_fake1.html")

@app.route("/16")
def lexia_16():
    return render_template("room_LH45957_fake2.html")

@app.route("/17")
def lexia_17():
    return render_template("room_LH45957_fake3.html")

@app.route("/18")
def lexia_18():
    return render_template("room_LH45957_fake4.html")

@app.route("/19")
def lexia_19():
    return render_template("housing.html")

# unused
@app.route("/20")
def lexia_20():
    return render_template("your_room.html")

@app.route("/21")
def lexia_21():
    return render_template("room_1.html")

@app.route("/22")
def lexia_22():
    return render_template("room_2.html")

@app.route("/23")
def lexia_23():
    return render_template("room_3.html")

@app.route("/24")
def lexia_24():
    return render_template("room_4.html")

@app.route("/25")
def lexia_25():
    return render_template("room_5.html")

@app.route("/26")
def lexia_26():
    return render_template("room_6.html")

@app.route("/27")
def lexia_27():
    return render_template("room_7.html")

@app.route("/28")
def lexia_28():
    return render_template("room_8.html")

@app.route("/29")
def lexia_29():
    return render_template("room_9.html")

@app.route("/30")
def lexia_30():
    return render_template("room_10.html")

@app.route("/31")
def lexia_31():
    return render_template("room_11.html")

@app.route("/32")
def lexia_32():
    return render_template("room_12.html")

@app.route("/33")
def lexia_33():
    return render_template("room_13.html")

@app.route("/34")
def lexia_34():
    return render_template("room_14.html")

@app.route("/35")
def lexia_35():
    return render_template("room_15.html")

@app.route("/36")
def lexia_36():
    return render_template("room_16.html")

@app.route("/37")
def lexia_37():
    return render_template("room_17.html")

@app.route("/38")
def lexia_38():
    return render_template("room_18.html")

@app.route("/39")
def lexia_39():
    return render_template("room_19.html")

@app.route("/40")
def lexia_40():
    return render_template("room_20.html")

@app.route("/41")
def lexia_41():
    return render_template("room_21.html")

@app.route("/42")
def lexia_42():
    return render_template("room_22.html")

@app.route("/43")
def lexia_43():
    return render_template("room_23.html")

@app.route("/44")
def lexia_44():
    return render_template("room_24.html")

@app.route("/45")
def lexia_45():
    return render_template("room_25.html")

@app.route("/46")
def lexia_46():
    return render_template("room_26.html")

@app.route("/47")
def lexia_47():
    return render_template("room_27.html")

@app.route("/48")
def lexia_48():
    return render_template("room_28.html")

@app.route("/49")
def lexia_49():
    return render_template("room_29.html")

@app.route("/50")
def lexia_50():
    return render_template("week_2.html")

@app.route("/51")
def lexia_51():
    return render_template("welcome_week.html")




if __name__ == "__main__":
    app.config["TEMPLATES_AUTO_RELOAD"] = True
    app.run(debug=True, use_reloader=False)
