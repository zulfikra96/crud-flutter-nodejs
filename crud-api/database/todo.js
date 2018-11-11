const { database } = require('../core/database.js')
const  argv = require('yargs').argv
switch(argv.migration)
{
    case "create":
         database.CreateTable('todo')
                .Fields('todo_id')
                    .PrimaryKey()
                    .NotNull()
                .Fields('user_id')
                    .Integer()
                    .NotNull()
                .Fields('start_time')
                    .DateTime()
                    .Null()
                .Fields('end_time')
                    .DateTime()
                    .Null()
                .ForeignKeys('user_id')
                    .References('users')
                    .OnDeleteCascade()
                    .On('users')
                .Fields('title')
                    .String(40)
                    .NotNull()
                .Fields('description')
                    .String(200)
                    .Null()
                .Fields('path_files')
                    .String(200)
                    .Null()
                .Timestamp()
                .Execute()
        break;
    case "drop":
        database.DropTable('todo')
                .Execute()
        break;
}
