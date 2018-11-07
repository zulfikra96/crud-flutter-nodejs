var argv = require('yargs').argv
var fs   = require('fs')

switch(argv.make){
    case "table":
        fs.readFile(`${__dirname}/blueprint/.database`,function(err,data){
            if(err) console.log(err);
            let string = data.toString()
            fs.writeFile(`${__dirname}/database/${argv.name}.js`,string,function(err){
                if(err) {
                    console.log(err);
                    return
                }

                console.log(`Success create blueprint table ${argv.name}`);
                
            })
            
            
        })
}