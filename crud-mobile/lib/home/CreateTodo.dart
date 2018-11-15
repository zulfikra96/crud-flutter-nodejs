import 'package:flutter/material.dart';
import 'package:crud/core/database.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:intl/intl.dart';
import 'package:image_picker/image_picker.dart';
import 'package:dio/dio.dart';
import 'dart:io';


class MainCreateTodo extends StatefulWidget {
  CreateTodo createState() => new CreateTodo();
}

class CreateTodo extends State {
  String title;
  String description;
  String waktuStart;
  String waktuBerakhir;
  var token;
  List todo;
  int countTodo = 0;
  final dateFormat = DateFormat("EEEE, MMMM d, yyyy 'at' h:mm");
  final timeFormat = DateFormat("h:mm a");
  DateTime date;
  TimeOfDay time;
  String _value = '';
  bool waktuMulaiIsFocused = false;
  bool waktuBerakhirIsFocused = false;
  File image;

  TextEditingController formText = new TextEditingController();
  TextEditingController formText2 = new TextEditingController();

  SqliteDatabase db = new SqliteDatabase();

  CreateTodo() : super() {
    this.verifyToken();
  }

  verifyToken() async {
    db.database((db) async {
      List list = await db.rawQuery('SELECT session FROM session');
      var _token = list[0]['session'];
      print(_token);
      var response = await http.get('http://192.168.1.21:3000/api/todo',
          headers: {"_token": "$_token"});
      setState(() {
        token = _token;
      });
      if (response.statusCode == 400) {
        Navigator.pop(context);
      } else {
        setState(() {
          todo = jsonDecode(response.body);
          countTodo = todo.length;
        });
      }
    });
  }

  Future pickImageFromCamera() async {
    File imagePick = await ImagePicker.pickImage(source: ImageSource.camera);
    
    
    if(imagePick != null)
    {
      setState(() {
        image = imagePick;
      });

      Navigator.pop(context);
    }
  }

  Future pickImageFromGallery() async {
    File imagePick = await ImagePicker.pickImage(source: ImageSource.gallery);

    if(imagePick != null)
    {
      setState(() {
        image = imagePick;
      });

      Navigator.pop(context);
    }
    
  }

  Future sendTodo() async {

    Dio dio = new Dio();

    FormData formData = new FormData.from(
      {
        'title':title,
        'description':description,
        'start_time':waktuStart,
        'end_time':waktuBerakhir,
        'photo':(image != null)? UploadFileInfo(image,'images') : null
      }
    );

    
    Options option = new Options(
      headers:{
        "_token":token
      } 
    );
    
    var response = await dio.post('http://192.168.1.21:3000/api/todo', data: formData, options:option );

    print(response);

    Navigator.pop(context);
  }

  void openModal() {
    showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                RaisedButton(
                  onPressed: () {
                    pickImageFromGallery();
                  },
                  child: Text("Galeri"),
                ),
                RaisedButton(
                  onPressed: () {
                    return pickImageFromCamera();
                  },
                  child: Text("Kamera"),
                )
              ],
            ),
          );
        });
  }

  Future selectDatePicker(int input) async {
    DateTime picked = await showDatePicker(
        context: context,
        initialDate: new DateTime.now(),
        firstDate: new DateTime(2016),
        lastDate: new DateTime(2019));
    TimeOfDay t =
        await showTimePicker(context: context, initialTime: TimeOfDay.now());

    
    if(t == null && picked == null)
    {
      return;
    }
    DateTime fixTime = new DateTime(picked.year, picked.month, picked.day, t.hour, t.minute);
    String dateFormat = new DateFormat("yyyy-MM-dd hh:mm:00").format(fixTime);
    print(fixTime);

    
    if (input == 1) {
      setState(() {
        formText.text = dateFormat;
        waktuStart = dateFormat;
      });
    } else {
      formText2.text = dateFormat;
      waktuBerakhir = dateFormat;
    }
  }

  @override
  Widget build(BuildContext context) {
    final GlobalKey formKey = new GlobalKey();
    return new Scaffold(
        appBar: AppBar(
          title: Text("Buat Todo Terbaru"),
        ),
        body: (this.countTodo == 0)
            ? Center(child: CircularProgressIndicator())
            : ListView(children: <Widget>[
                Container(
                  padding: EdgeInsets.symmetric(horizontal: 10.0),
                  child: Column(
                    children: <Widget>[
                      Container(
                        child: TextField(
                          onChanged: (String text) {
                            setState(() {
                              title = text;
                            });
                          },
                          decoration: InputDecoration(labelText: "Judul "),
                        ),
                      ),
                      Container(
                        child: TextField(
                          onChanged: (String text) {
                            description = text;
                          },
                          decoration: InputDecoration(labelText: "Descripsi"),
                        ),
                      ),
                      Stack(
                        children: <Widget>[
                          Container(
                            child: TextField(
                              onChanged: (String datetime) {
                                setState(() {
                                  waktuStart = datetime;
                                });
                              },
                              decoration: InputDecoration(
                                labelText: "Waktu Mulai",
                              ),
                              autofocus: waktuMulaiIsFocused,
                              controller: formText,
                            ),
                          ),
                          Container(
                            width: MediaQuery.of(context).size.width,
                            child: MaterialButton(
                              onPressed: () {
                                setState(() {
                                  waktuMulaiIsFocused = true;
                                  formText.text = _value;
                                });

                                selectDatePicker(1);
                              },
                            ),
                          )
                        ],
                      ),
                      Stack(
                        children: <Widget>[
                          Container(
                            child: TextField(
                              decoration: InputDecoration(
                                labelText: "Waktu Selesai",
                              ),
                              autofocus: waktuBerakhirIsFocused,
                              controller: formText2,
                              onChanged: (String datetime) {
                                setState(() {
                                  waktuBerakhir = datetime;
                                });
                              },
                            ),
                          ),
                          Container(
                            margin: EdgeInsets.only(bottom: 10.0),
                            width: MediaQuery.of(context).size.width,
                            child: MaterialButton(
                              onPressed: () {
                                setState(() {
                                  waktuBerakhirIsFocused = true;
                                });

                                selectDatePicker(2);
                              },
                            ),
                          ),
                        ],
                      ),

                      (image != null) ? Card(child: Image.file(image,width: MediaQuery.of(context).size.width, height: MediaQuery.of(context).size.width,),):Container(),
                      Container(
                        margin: EdgeInsets.only(top: 15.0),
                        child: MaterialButton(
                          child: Text("Upload Photo"),
                          color: Colors.white,
                          minWidth: MediaQuery.of(context).size.width,
                          splashColor: Colors.blue[50],
                          onPressed: () {
                            openModal();
                          },
                        ),
                      ),
                      Container(
                        margin: EdgeInsets.only(top: 15.0),
                        child: MaterialButton(
                          child: Text("Kirim"),
                          color: Colors.blue,
                          minWidth: MediaQuery.of(context).size.width,
                          splashColor: Colors.blue[50],
                          onPressed: () {
                            sendTodo();
                          },
                        ),
                      ),
                    ],
                  ),
                ),
              ]));
  }
}
