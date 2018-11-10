import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:ui';
import 'dart:convert';



class MainRegister extends StatefulWidget {
  @override
  RegisterState createState() => new RegisterState();
}

class RegisterState extends State<MainRegister> {
  final formInput = {
    'username': '',
    'fullname': '',
    'password': '',
    'password_validation': ''
  };
  bool loading = false;
  bool is_error = true;
  String error = '';

  void postRegister() async {
    var response = await http.post('http://192.168.122.1:3000/api/register',
        body: this.formInput);
    Map data_error = json.decode(response.body);
    print(response.body);
    if (response.statusCode == 200) {
      setState(() {
        this.loading = true;
        this.error = data_error['message'];
        this.is_error = true;
      });
    } else if (response.statusCode == 400) {
      setState(() {

        this.error = data_error['message'];
        this.is_error = true;
        print(data_error['message']);
      });
    }
    // print(response.body);
  }

  displayDialog(BuildContext context) {
    return new Dialog(
        child: Container(
      padding: EdgeInsets.symmetric(horizontal: 90.0, vertical: 20.0),
      height: 100.0,
      child: (this.is_error) ? Text(this.error) : CircularProgressIndicator(),
    ));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
          padding: EdgeInsets.only(top: 80.0, left: 20.0, right: 20.0),
          decoration: BoxDecoration(color: Colors.blue),
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height,
          child: Form(
            child: ListView(
              children: <Widget>[
                Stack(
                  children: <Widget>[
                    Positioned(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          Text(
                            "REGISTER",
                            style:
                                TextStyle(fontSize: 18.0, color: Colors.white),
                          ),
                          Container(
                            margin: EdgeInsets.only(top: 20.0),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: <Widget>[
                                // username
                                Text("Fullname"),
                                Container(
                                  margin:
                                      EdgeInsets.only(top: 20.0, bottom: 20.0),
                                  child: TextField(
                                    onChanged: (var input) {
                                      setState(() {
                                        formInput['fullname'] = input;
                                      });
                                    },
                                    key: Key("password"),
                                    decoration: InputDecoration(
                                        focusedBorder: UnderlineInputBorder(
                                            borderSide: BorderSide(
                                                color: Colors.yellow))),
                                  ),
                                ),
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
                                  margin:
                                      EdgeInsets.only(top: 20.0, bottom: 20.0),
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
                                Text("Ulangi Password"),
                                Container(
                                  margin: EdgeInsets.only(top: 20.0),
                                  child: TextField(
                                    obscureText: true,
                                    onChanged: (String input) {
                                      setState(() {
                                        formInput['password_validation'] =
                                            input;
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
                                        this.loading = true;
                                      });

                                      this.postRegister();
                                    },
                                    minWidth: MediaQuery.of(context).size.width,
                                    color: Colors.yellow,
                                    child: Text("Daftar"),
                                  ),
                                ),
                                Row(
                                  children: <Widget>[
                                    Text("Sudah punya akun ?"),
                                    MaterialButton(
                                      minWidth: 0.0,
                                      padding: EdgeInsets.all(0.0),
                                      onPressed: () {
                                        Navigator.pop(context);
                                      },
                                      child: Text(
                                        "Login",
                                        textAlign: TextAlign.left,
                                        style: TextStyle(color: Colors.yellow),
                                      ),
                                    ),
                                  ],
                                )
                              ],
                            ),
                          )
                        ],
                      ),
                    ),
                    (this.loading)
                        ? Positioned(
                            child: Container(
                              height: MediaQuery.of(context).size.width,
                              child: AlertDialog(
                                actions: <Widget>[
                                  RaisedButton(
                                    child: Text("tutup", style: TextStyle(color: Color(0xFFFFFFFF)),),
                                    onPressed: (){
                                      setState(() {
                                            this.loading = false;                            
                                      });
                                    },
                                  )
                                ],
                                content: Container(
                                  child: (this.is_error)
                                      ? Text(this.error)
                                      : Container(
                                          padding: EdgeInsets.symmetric(
                                              horizontal: 78.0),
                                          child: CircularProgressIndicator(),
                                        ),
                                ),
                              ),
                            ),
                          )
                        : Container(),
                  ],
                )
              ],
            ),
          )),
    );
  }
}
