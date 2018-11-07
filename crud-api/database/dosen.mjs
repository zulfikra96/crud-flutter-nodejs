const { database } = require('../core/database.js')
const  argv = require('yargs').argv
switch(argv.migration)
{
    case "create":
         database.CreateTable('dosens')
                .Fields('dosen_id')
                    .PrimaryKey()
                    .NotNull()
                .Fields('nomor_induk')
                    .Integer()
                    .NotNull()
                .Timestamp()
                .Execute()
        break;
    case "drop":
        database.DropTable('')
                .Execute()
        break;
}
