

// init router
var router = new Router({
    mode: 'history',
    page404: function (path) {
        console.log('"/' + path + '" Page not found');
    }
});



// router js

router.add('', function () {
    home.dosen()
});

router.add('/home', function () {
    verifyToken(router)
 
    let home = new viewsHome()
    if(session() == null) router.navigateTo('/login')
    
    if(session().roles == 'dosen')
    {
        return home.dosen()
    }else if(session().roles == 'mahasiswa')
    {
        return home.mahasiswa()
        
    }

});

router.add('/kelas/{name}', function (name) {

    let view = new viewsKelas()
    view.mahasiswa()

});

router.add('/about', function (name) {
    let about = new viewsAbout()
    about.main()
});

router.add('/login',function(name){
    verifySetToken(router)
    let login = new viewsLogin()
    login.main()
})

router.add('/register', function (name) {
    let register = new viewsRegister()
    register.main()
});

router.add('/#/home',function(name){
    document.getElementById('App').innerText = ''
    console.log("hello world");
    
})

router.addUriListener();
router.check()