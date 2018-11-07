const { database } = require('../core/database')
const  argv = require('yargs').argv

switch(argv.migration)
{
    case "create":
         database.CreateTable('mahasiswa')
                .Fields('mahasiswa_id')
                    .PrimaryKey()
                    .NotNull()
                .Fields('nomor_induk')
                    .Integer()
                    .NotNull()
                .Timestamp()
                .Execute()
        break;
    case "drop":
        database.DropTable('mahasiswa')
                .Execute()
        break;
}
