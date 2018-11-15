
import 'package:flutter/material.dart';
import 'package:path/path.dart';
import 'package:path_provider/path_provider.dart';
import 'package:sqflite/sqflite.dart';
import 'dart:async';
import 'dart:io';
import 'dart:typed_data';
import 'package:flutter/services.dart';

class SqliteDatabase {

  var path;

   

  Future database(Function callback) async{
    Directory documentsDirectory = await getTemporaryDirectory();
    String path = join(documentsDirectory.path,'crud.db');

    if(FileSystemEntity.typeSync(path) == FileSystemEntityType.notFound)
    {
      ByteData data = await rootBundle.load(join('assets/', 'crud.db'));
      List<int> bytes = data.buffer.asUint8List(data.offsetInBytes, data.lengthInBytes);

      // Save copied asset to documents
      await new File(path).writeAsBytes(bytes);
    }

    var db = await openDatabase(path);

    return callback(db);
  } 

  Future databaseAsync(Function callback) async{
    Directory documentsDirectory = await getTemporaryDirectory();
    String path = join(documentsDirectory.path,'crud.db');

    if(FileSystemEntity.typeSync(path) == FileSystemEntityType.notFound)
    {
      ByteData data = await rootBundle.load(join('assets/', 'crud.db'));
      List<int> bytes = data.buffer.asUint8List(data.offsetInBytes, data.lengthInBytes);

      // Save copied asset to documents
      await new File(path).writeAsBytes(bytes);
    }

    var db = await openDatabase(path);

    return db;
  } 


  

}