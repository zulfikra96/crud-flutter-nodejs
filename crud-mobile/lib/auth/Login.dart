import 'package:flutter/material.dart';
import 'package:crud/auth/Register.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class MainLogin extends StatefulWidget {
  @override
  Login createState() => new Login();
}

class Login extends State<MainLogin> {
  Map formInput = {'username': '', 'password': ''};

  bool is_loading = false;
  bool has_error = false;
  String error_message;

  String displayError(List message) {
    // print(message.length);
    String error = '';

    for (int i = 0; i < message.length; i++) {
      error += message[i] + '\n';
    }

    return error;
  }

  loginPost() async {
    var response =
        await http.post('http://10.208.7.151:3000/api/login', body: formInput);

    if (response.statusCode == 400) {
      setState(() {
        this.has_error = true;
        dynamic body = jsonDecode(response.body);
        this.error_message = displayError(body['message']);
      });
    } else if (response.statusCode == 200) {
      setState(() {
        this.is_loading = false;
      });
    }
  }

  loadingDisplay() {
    return new AlertDialog(
      content: CircularProgressIndicator(),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: <Widget>[
          Container(
              padding: EdgeInsets.only(top: 80.0, left: 20.0, right: 20.0),
              decoration: BoxDecoration(color: Colors.blue),
              width: MediaQuery.of(context).size.width,
              height: MediaQuery.of(context).size.height,
              child: Form(
                child: ListView(
                  children: <Widget>[
                    Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Text(
                          "LOGIN",
                          style: TextStyle(fontSize: 18.0, color: Colors.white),
                        ),
                        Container(
                          margin: EdgeInsets.only(top: 20.0),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: <Widget>[
                              // username
                              Text("Username"),
                              Container(
                                margin:
                                    EdgeInsets.only(top: 20.0, bottom: 20.0),
                                child: TextField(
                                  onChanged: (String input) {
                                    setState(() {
                                      formInput['username'] = input;
                                    });
                                  },
                                  key: Key("password"),
                                  decoration: InputDecoration(
                                      focusedBorder: UnderlineInputBorder(
                                          borderSide: BorderSide(
                                              color: Colors.yellow))),
                                ),
                              ),
                              Text("Password"),
                              Container(
                                margin: EdgeInsets.only(top: 20.0),
                                child: TextField(
                                  obscureText: true,
                                  onChanged: (String input) {
                                    setState(() {
                                      formInput['password'] = input;
                                    });
                                  },
                                  key: Key("password"),
                                  decoration: InputDecoration(
                                      focusedBorder: UnderlineInputBorder(
                                          borderSide: BorderSide(
                                              color: Colors.yellow))),
                                ),
                              ),
                              Container(
                                margin: EdgeInsets.only(top: 20.0),
                                child: MaterialButton(
                                  onPressed: () {
                                    setState(() {
                                      this.is_loading = true;
                                    });
                                    this.loginPost();
                                  },
                                  minWidth: MediaQuery.of(context).size.width,
                                  color: Colors.yellow,
                                  child: Text("Masuk"),
                                ),
                              ),
                              Row(
                                children: <Widget>[
                                  Text("Belum daftar ?"),
                                  MaterialButton(
                                    padding: EdgeInsets.only(left: 2.0),
                                    onPressed: () {
                                      Navigator.push(
                                          context,
                                          MaterialPageRoute(
                                              builder: (context) =>
                                                  MainRegister()));
                                    },
                                    child: Text(
                                      "Daftar Sekarang",
                                      textAlign: TextAlign.start,
                                      style: TextStyle(color: Colors.yellow),
                                    ),
                                  ),
                                ],
                              )
                            ],
                          ),
                        ),
                      ],
                    )
                  ],
                ),
              )),
          (this.is_loading)
              ? Container(
                  width: MediaQuery.of(context).size.width,
                  height: MediaQuery.of(context).size.height,
                  decoration: BoxDecoration(color: Color(0x99000000)),
                  child: AlertDialog(
                    content: (this.has_error)
                        ? Text(this.error_message)
                        : Container(
                            child: CircularProgressIndicator(),
                            padding: EdgeInsets.symmetric(horizontal: 98.0),
                          ),
                    actions: <Widget>[
                      RaisedButton(
                        child: Text("Tutup"),
                        color: Colors.yellow,
                        onPressed: () {
                          setState(() {
                            this.is_loading = false;
                            this.has_error = false;
                          });
                        },
                      )
                    ],
                  ),
                )
              : Container(),
        ],
      ),
    );
  }
}
