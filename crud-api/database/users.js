const { database } = require('../core/database.js')
const  argv = require('yargs').argv
switch(argv.migration)
{
    case "create":
         database.CreateTable('users')
                .Fields('user_id')
                    .PrimaryKey()
                    .NotNull()
                .Fields('username')
                    .String(20)
                    .Unique()
                    .NotNull()
                .Fields('fullname')
                    .String(40)
                    .NotNull()
                .Fields('password')
                    .String(255)
                    .NotNull()
                .Fields('role')
                    .String(6)
                    .Null()
                .Fields('token')
                    .String(255)
                    .Null()
                .Timestamp()
                .Execute()
        break;
    case "drop":
        database.DropTable('users')
                .Execute()
        break;
}
