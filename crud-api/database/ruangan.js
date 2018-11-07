const { database } = require('../core/database.js')
const  argv = require('yargs').argv
switch(argv.migration)
{
    case "create":
         database.CreateTable('ruangan')
                .Fields('ruangan_id')
                    .PrimaryKey()
                    .NotNull()
                .Fields('user_id')
                    .Integer()
                    .NotNull()
                .Fields('nama_ruangan')
                    .String(40)
                    .NotNull()
                .ForeignKeys('user_id').References('users').OnDeleteCascade()
                .Timestamp()
                .Execute()
        break;
    case "drop":
        database.DropTable('ruangan')
                .Execute()
        break;
}
