
class viewsAbout {

    main()
    {
        return views(/*html*/ `
            <h1>Ini about</h1>
            <button onclick="${eventListener(function(){
                alert("hello world")
            })}">Tambah</button>
        `)
    }
}


