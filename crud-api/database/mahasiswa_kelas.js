const { database } = require('../core/database.js')
const  argv = require('yargs').argv
switch(argv.migration)
{
    case "create":
         database.CreateTable('mahasiswa_kelas')
                .Fields('mahasiswa_kelas_id')
                    .PrimaryKey()
                    .NotNull()
                .Fields('user_id')
                    .Integer()
                    .NotNull()
                .Fields('kelas_id')
                    .Integer()
                    .NotNull()
                .Fields('is_konfirmasi')
                    .Boolean()
                    .NotNull()
                .ForeignKeys('user_id')
                    .References('users')
                    .OnDeleteCascade()
                .ForeignKeys('kelas_id')
                    .References('kelas')
                    .OnDeleteCascade()
                .Timestamp()
                .Execute()
        break;
    case "drop":
        database.DropTable('mahasiswa_kelas')
                .Execute()
        break;
}