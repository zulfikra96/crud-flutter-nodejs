import 'package:flutter/material.dart';
import 'package:crud/core/database.dart';
import 'package:http/http.dart'  as http;
import 'dart:convert';
import 'package:crud/home/CreateTodo.dart';
import 'package:dio/dio.dart';

class MainHome extends StatefulWidget{

  Home createState() => new Home();

}

class Home extends State{

  var token;
  List todo;
  int countTodo = 0;
  bool loading = false;
  var scrollController = new ScrollController();
  SqliteDatabase db = new SqliteDatabase();

   GlobalKey _refreshIndicator = new GlobalKey();

  Home():super()
  {
    
  }


  void deleteTodo(int id) async
  {
    
    var headers = {
      "_token":token
    };
    Dio dio = new Dio();
    var option = new Options(headers:headers);
    var response = await dio.delete("http://192.168.1.21:3000/api/todo/$id",options:option ,data: '' );


    setState(() {
        loading = false;
        verifyToken();

      });
    

    return;
  }

  @override
  void initState()
  {
    super.initState();
    setState((){
      this.verifyToken();
    });
  }
  

  verifyToken() async 
  {
    
    db.database((db) async {
      List list = await db.rawQuery('SELECT session FROM session');
      var _token = list[0]['session'];
      print(_token);
      var response = await http.get('http://192.168.1.21:3000/api/todo',headers: {
        "_token":"$_token"
      });
      setState((){
        token = _token;
      });
      if(response.statusCode == 400)
      {
        Navigator.pop(context);
      }else{
        setState(() {
          todo = jsonDecode(response.body); 
          countTodo = todo.length;
        });
      }


    });
  }

  Future onRefresh() async {
    verifyToken();
    return;
  }

  listContent()
  {
    return ListView.builder(
      itemCount: countTodo,
      
      itemBuilder: (BuildContext context, int i){
        var id = todo[i]['todo_id'];
        return Card(child:Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Container(
              padding: EdgeInsets.symmetric(horizontal: 10.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Container(
                    padding: EdgeInsets.only(left: 10.0),
                    child: Text(todo[i]['title'],style: TextStyle(fontSize: 22.0, fontWeight: FontWeight.bold),),
                  ),
                  PopupMenuButton(
                    child: Icon(Icons.linear_scale),
                    itemBuilder: (BuildContext context){
                      return [
                        PopupMenuItem(
                          child: MaterialButton(
                            child: Text("Hapus"),
                            onPressed: (){
                              setState(() {
                                loading = true;
                               });
                              deleteTodo(id);
                            },
                          ),
                        )
                      ];
                    },
                  )
                ],
              ),
            ),
            Container(
              child: Image.network("http://192.168.1.21:3000/api/todo/image/$id",headers: {"_token":"$token"}, width: MediaQuery.of(context).size.width,height: 250.0,),
            ),
            Container(
              padding: EdgeInsets.only(left: 10.0, bottom: 10.0),
              child: Text(todo[i]['description'],style: TextStyle(fontSize: 18.0,),),
            ),
          ],
        ));
      },
    );
  }

  @override
  Widget build(BuildContext context)
  {
    
    return new MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text("Home"),
          actions: <Widget>[
            MaterialButton(
              padding: EdgeInsets.all(0.0),
              minWidth: 0.0,
              child: Icon(Icons.add,color: Color(0xFFFFFFFF) ,),
              onPressed: (){
                Navigator.push(context, MaterialPageRoute(builder:(context) =>  MainCreateTodo()));
              },
            )
          ],
        ),
        body:(this.countTodo == 0) ? Center(child: CircularProgressIndicator()) : Container(
          child:(!loading) ? Container(
            child: RefreshIndicator(
              onRefresh: onRefresh,
              child: listContent(),
            ),
          ) : CircularProgressIndicator(),
        ),
      ),
    );
  }

}