
class viewsHome {

    constructor(args = { ruangan:'' })
    {
        this.ruangan = args.ruangan        
    }

    mahasiswa()
    {        
           
        views(/*html*/`
            ${this.navbar()}
            <div class="container grid-mdl" style="margin-top:10px;">
                <div class="row">
                    <div class="columns">
                        <div class="column col-md-3">
                            <div class="columns">
                                <div class="column col-12">
                                    <div class="card padding-10px box-shadow">
                                        <h5>Gabung Kelas</h5>
                                        <p>Gabung dengan kelas dan mulai belajar secara online</p>
                                        <button type="button" class="btn btn-primary" onclick="eventListener(false,function(){
                                            let home = new viewsHome()
                                            home.joinKelas()
                                        })">Gabung</button>
                                    </div>
                                </div>
                                <div class="column col-12">
                                    <div class="card padding-10px box-shadow">
                                        <div class="container">
                                            <div class="columns">
                                                <div class="column col-12" style="text-align:center;margin-top:10px;">
                                                    <h5>Tugas</h5>
                                                </div>
                                                <div class="col-12 ">
                                                    <div class="card"></div>
                                                    <ul class="nav" id="list-tugas-kelas">
                                                    
                                                    </ul>
                                                    <div class="card"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column col-6">
                            <div class="columns" style="margin-bottom:10px;">
                                <div class="column col-12">
                                    <div class="card padding-10px box-shadow">
                                        <div class="container">
                                            <div class="columns">
                                                <div class="column col-8">
                                                    <h6 class="light-font">Kelas hari ini</h6>
                                                    <h4>Pemrograman Lanjut</h4>
                                                    <h6 class="light-font"><span>17.00</span> -  <span>L 709</span> </h6>
                                                </div>
                                                <div class="column col-4" style="padding-top:22px;">
                                                    <a href="" class="btn btn-primary" style="text-align:right;float:right;">Masuk</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12" style="margin-top:10px;">
                                    <div class="container">
                                        <div class="columns">
                                            <div class="column col-4">
                                                <div class="card box-shadow padding-8px">
                                                    <span><i class="fas fa-circle" style="color:green;"></i> Belum dimulai</span>
                                                    <br>
                                                    <div class="image" style="max-height:145px;overflow:hidden;">
                                                        <img src="http://pluspng.com/img-png/lecture-png-png-ico-866.png" alt="" class="img-responsive">
                                                    </div>
                                                    <div class="columns">
                                                        <div class="column col-12">
                                                            <div class="title">Pemrograman dasar</div>
                                                        </div>
                                                    </div>
                                                    <div class="columns">
                                                        <div class="column col-6">
                                                            <span class="font-12">Kamis, 17.00</span>
                                                        </div>
                                                        <div class="column col-6" style="text-align:right;">
                                                            <span class="font-12">L 702</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column col-4">
                                                <div class="card box-shadow padding-8px">
                                                    <span><i class="fas fa-circle" style="color:green;"></i> Belum dimulai</span>
                                                    <br>
                                                    <div class="image" style="max-height:145px;overflow:hidden;">
                                                        <img src="http://pluspng.com/img-png/lecture-png-png-ico-866.png" alt="" class="img-responsive">
                                                    </div>
                                                    <div class="columns">
                                                        <div class="column col-12">
                                                            <div class="title">Pemrograman dasar</div>
                                                        </div>
                                                    </div>
                                                    <div class="columns">
                                                        <div class="column col-6">
                                                            <span class="font-12">Kamis, 17.00</span>
                                                        </div>
                                                        <div class="column col-6" style="text-align:right;">
                                                            <span class="font-12">L 702</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column col-4">
                                                <div class="card box-shadow padding-8px">
                                                    <span><i class="fas fa-circle" style="color:green;"></i> Belum dimulai</span>
                                                    <br>
                                                    <div class="image" style="max-height:145px;overflow:hidden;">
                                                        <img src="http://pluspng.com/img-png/lecture-png-png-ico-866.png" alt="" class="img-responsive">
                                                    </div>
                                                    <div class="columns">
                                                        <div class="column col-12">
                                                            <div class="title">Pemrograman dasar</div>
                                                        </div>
                                                    </div>
                                                    <div class="columns">
                                                        <div class="column col-6">
                                                            <span class="font-12">Kamis, 17.00</span>
                                                        </div>
                                                        <div class="column col-6" style="text-align:right;">
                                                            <span class="font-12">L 702</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="column col-12" style="text-align:center;"><button class="btn btn-primary">Selengkapnya</button></div>
                            </div>
                        </div>
                        <div class="column col-3">
                            <div class="columns">
                                <div class="column col-12">
                                    <div class="card padding-10px box-shadow" id="total-kelas">
                                        
                                    </div>
                                </div>
                                <div class="column col-12">
                                    <div class="card padding-10px box-shadow">
                                        <div class="container">
                                            <div class="columns">
                                               <div class="column col-12" style="text-align:center;margin-top:10px;">
                                                    <h5>Kelas</h5>
                                               </div>
                                               <div class="col-12 ">
                                                    <div class="card"></div>
                                                    <ul class="nav" id="list-semester-kelas">
                                                       
                                                    </ul>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `)

        this.getTotalKelasTugas() 
        this.getListTugaskelas() 
        this.getListKelasMahasiswa() 
                            
        return
    }

    dosen()
    {
        views(/*html*/`
            ${this.navbar()}
            <div class="container grid-mdl" style="margin-top:10px;">
                <div class="row">
                    <div class="columns">
                        <div class="column col-md-3">
                            <div class="card padding-10px box-shadow">
                                <h5>Add Mahasiswa</h5>
                                <p>Tambahkan mahasiswa anda kedalam kelas untuk mempermudah proses belajar mengajar</p>
                                <button type="button" class="btn btn-primary" onclick="eventListener(false,function(){
                                    let home = new viewsHome()
                                    home.addMahasiswa()
                                })">Tambah</button>
                            </div>
                        </div>
                        <div class="column col-6">
                            <div class="columns" style="margin-bottom:10px;">
                                <div class="column col-12">
                                    <div class="card padding-10px box-shadow">
                                        <div class="container">
                                            <div class="columns">
                                                <div class="column col-8">
                                                    <h6 class="light-font">Kelas hari ini</h6>
                                                    <h4>Pemrograman Lanjut</h4>
                                                    <h6 class="light-font"><span>17.00</span> -  <span>L 709</span> </h6>
                                                </div>
                                                <div class="column col-4" style="padding-top:22px;">
                                                    <a href="" class="btn btn-primary" style="text-align:right;float:right;">Masuk</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12" style="margin-top:10px;">
                                    <div class="container">
                                        <div class="columns">
                                            <div class="column col-4">
                                                <div class="card box-shadow padding-8px">
                                                    <span><i class="fas fa-circle" style="color:green;"></i> online</span>
                                                    <div class="image" style="max-height:145px;overflow:hidden;">
                                                        <img src="https://www.limestone.edu/sites/default/files/user.png" alt="" class="img-responsive">
                                                    </div>
                                                    <div class="title">Abdus Soleh</div>
                                                    <div class="columns">
                                                        <div class="column col-6">
                                                            <span class="font-12">1461404866</span>
                                                        </div>
                                                        <div class="column col-6">
                                                            <span class="font-12">Informatika</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column col-4">
                                                <div class="card box-shadow padding-8px">
                                                    <span><i class="fas fa-circle" style="color:green;"></i> online</span>
                                                    <div class="image" style="max-height:145px;overflow:hidden;">
                                                        <img src="https://www.limestone.edu/sites/default/files/user.png" alt="" class="img-responsive">
                                                    </div>
                                                    <div class="title">Abdus Soleh</div>
                                                    <div class="columns">
                                                        <div class="column col-6">
                                                            <span class="font-12">1461404866</span>
                                                        </div>
                                                        <div class="column col-6">
                                                            <span class="font-12">Informatika</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column col-4">
                                                <div class="card box-shadow padding-8px">
                                                    <span><i class="fas fa-circle" style="color:green;"></i> online</span>
                                                    <div class="image" style="max-height:145px;overflow:hidden;">
                                                        <img src="https://www.limestone.edu/sites/default/files/user.png" alt="" class="img-responsive">
                                                    </div>
                                                    <div class="title">Abdus Soleh</div>
                                                    <div class="columns">
                                                        <div class="column col-6">
                                                            <span class="font-12">1461404866</span>
                                                        </div>
                                                        <div class="column col-6">
                                                            <span class="font-12">Informatika</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="column col-12" style="text-align:center;"><button class="btn btn-primary">Selengkapnya</button></div>
                            </div>
                            <div class="columns" style="margin-bottom:10px;">
                                <div class="column col-12">
                                    <div class="card padding-10px box-shadow">
                                        <div class="container">
                                            <div class="columns">
                                                <div class="column col-8">
                                                    <h6 class="light-font">Kelas hari ini</h6>
                                                    <h4>Pemrograman Dasar</h4>
                                                    <h6 class="light-font"><span>17.00</span> -  <span>L 709</span> </h6>
                                                </div>
                                                <div class="column col-4" style="padding-top:22px;">
                                                    <a href="" class="btn btn-primary" style="text-align:right;float:right;">Masuk</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12" style="margin-top:10px;">
                                    <div class="container">
                                        <div class="columns">
                                            <div class="column col-4">
                                                <div class="card box-shadow padding-8px">
                                                    <span><i class="fas fa-circle" style="color:green;"></i> online</span>
                                                    <div class="image" style="max-height:145px;overflow:hidden;">
                                                        <img src="https://www.limestone.edu/sites/default/files/user.png" alt="" class="img-responsive">
                                                    </div>
                                                    <div class="title">Abdus Soleh</div>
                                                    <div class="columns">
                                                        <div class="column col-6">
                                                            <span class="font-12">1461404866</span>
                                                        </div>
                                                        <div class="column col-6">
                                                            <span class="font-12">Informatika</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column col-4">
                                                <div class="card box-shadow padding-8px">
                                                    <span><i class="fas fa-circle" style="color:green;"></i> online</span>
                                                    <div class="image" style="max-height:145px;overflow:hidden;">
                                                        <img src="https://www.limestone.edu/sites/default/files/user.png" alt="" class="img-responsive">
                                                    </div>
                                                    <div class="title">Abdus Soleh</div>
                                                    <div class="columns">
                                                        <div class="column col-6">
                                                            <span class="font-12">1461404866</span>
                                                        </div>
                                                        <div class="column col-6">
                                                            <span class="font-12">Informatika</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column col-4">
                                                <div class="card box-shadow padding-8px">
                                                    <span><i class="fas fa-circle" style="color:green;"></i> online</span>
                                                    <div class="image" style="max-height:145px;overflow:hidden;">
                                                        <img src="https://www.limestone.edu/sites/default/files/user.png" alt="" class="img-responsive">
                                                    </div>
                                                    <div class="title">Abdus Soleh</div>
                                                    <div class="columns">
                                                        <div class="column col-6">
                                                            <span class="font-12">1461404866</span>
                                                        </div>
                                                        <div class="column col-6">
                                                            <span class="font-12">Informatika</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column col-12" style="text-align:center;"><button class="btn btn-primary">Selengkapnya</button></div>
                            </div>
                        </div>
                        <div class="column col-3">
                            <div class="columns">
                                <div class="column col-12">
                                    <div class="card padding-10px box-shadow" id="total-kelas">
                                        
                                    </div>
                                </div>
                                <div class="column col-12">
                                    <div class="card padding-10px box-shadow">
                                        <div class="container">
                                            <div class="columns">
                                               <div class="column col-12" style="text-align:center;margin-top:10px;">
                                                    <h5>Kelas</h5>
                                               </div>
                                               <div class="col-12 ">
                                                <div class="card"></div>
                                                    <ul class="nav" id="list-semester-kelas">
                                                       
                                                    </ul>
                                                    <div class="card"></div>
                                               </div>
                                               <div class="col-12">
                                                    <div class="tile tile-centered">
                                                        <div class="tile-action">
                                                            <button class="btn btn-link">
                                                                <i class="fas fa-plus-circle"></i>
                                                            </button>
                                                        </div>
                                                        <div class="tile-content">
                                                            <div class="tile-title"><a href="javascript:void(0)" onclick="eventListener(false,function(args){
                                                                // console.log(ruangan);

                                                                let home = new viewsHome()
                                                                home.createClass()
                                                            })">Tambah Kelas</a></div>
                                                        </div>  
                                                    </div>
                                               </div>
                                               <div class="col-12">
                                                    <div class="tile tile-centered">
                                                        <div class="tile-action">
                                                            <button class="btn btn-link">
                                                                <i class="fas fa-archive"></i>
                                                            </button>
                                                        </div>
                                                        <div class="tile-content">
                                                            <div class="tile-title"><a href="">Arsip Kelas</a></div>
                                                        </div>  
                                                    </div>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `)

        this.getTotalKelasMahasiswa() 
        this.getListKelasSemester() 
        return
    }

    navbar()
    {
        return /*html*/ `
        <header class="navbar box-shadow">
            <div class="container grid-mdl">
                <header class="navbar">
                <section class="navbar-section">
                </section>
                <section class="navbar-center">
                    <div class="input-group input-inline" >
                        <input class="form-input" type="text" placeholder="search" style="width:100%;">
                        <button class="btn btn-primary input-group-btn"><i class="fas fa-search fa-1x"></i></button>
                    </div>
                    
                </section>
                <section class="navbar-section">
                    <a href=""><i class="far fa-bell fa-1x" style="margin-left:12px;padding:7.5px 8.5px;background-color:#5755d9;border-radius:100%;color:#fff;"></i></a>
                    <a href="#"><i class="fas fa-user-circle fa-2x" style="margin-left:12px;"></i></a>
                </section>
                </header>
            </div>
        </header>
        `
    }

    postGabungkelas()
    {

    }

    async getTotalKelasMahasiswa()
    {
        let data = await axios({
            url:`${static_data.domain}/total-mahasiswa-kelas`,
            method:'GET',
            headers:{
                _token:_token()
            }
        })

        data = data.data
        document.getElementById('total-kelas').innerHTML =  /*html*/`
            <div class="container">
                <div class="columns">
                    <div class="column col-8" style="text-align:right;">
                        <span>Zulfikra L. Abdjul</span>
                        <h6 style="font-size:12px;"><span>1461404866</span> - <span>Dosen</span></h6>
                    </div>
                    <div class="column col-4" style=" height:60px; border-radius:4px; overflow:hidden;">
                        <img src="https://www.limestone.edu/sites/default/files/user.png" alt="" class="img-responsive">
                    </div>
                    <div class=" col-12" style="margin-top:8px;">
                        <div class="card"></div>
                    </div>
                    <div class="col-12" style="margin-top:14px;padding-bottom:14px;">
                        <div class="container">
                            <div class="columns">
                                <div class="column col-6" style="text-align:center;">
                                    <h1 class="no-padding">${data.mahasiswa}</h1>
                                    <span><strong>Mahasiswa</strong></span>
                                </div>
                                <div class="column col-6" style="text-align:center;">
                                    <h1 class="no-padding">${data.kelas}</h1>
                                    <span><strong>kelas</strong></span>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    async getTotalKelasTugas()
    {
        let data = await axios({
            url:`${static_data.domain}/total-tugas-kelas`,
            method:'GET',
            headers:{
                _token:_token()
            }
        })

        data = data.data
        document.getElementById('total-kelas').innerHTML =  /*html*/`
            <div class="container">
                <div class="columns">
                    <div class="column col-8" style="text-align:right;">
                        <span>Zulfikra L. Abdjul</span>
                        <h6 style="font-size:12px;"><span>1461404866</span> - <span>Mahasiswa</span></h6>
                    </div>
                    <div class="column col-4" style=" height:60px; border-radius:4px; overflow:hidden;">
                        <img src="https://www.limestone.edu/sites/default/files/user.png" alt="" class="img-responsive">
                    </div>
                    <div class=" col-12" style="margin-top:8px;">
                        <div class="card"></div>
                    </div>
                    <div class="col-12" style="margin-top:14px;padding-bottom:14px;">
                        <div class="container">
                            <div class="columns">
                                <div class="column col-6" style="text-align:center;">
                                    <h1 class="no-padding">1</h1>
                                    <span><strong>Tugas</strong></span>
                                </div>
                                <div class="column col-6" style="text-align:center;">
                                    <h1 class="no-padding">${data.kelas}</h1>
                                    <span><strong>Kelas</strong></span>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    async createClass()
    {
        let ruangan = await axios({
            url:`${static_data.domain}/ruangan`,
            method:'GET',
            headers:{
                _token:_token()
            }
        })
        let select = ``

        ruangan = ruangan.data
        
        for (let i = 0; i < ruangan.length; i++) {
           select += /*html*/`
                <option value="${ruangan[i].ruangan_id}" >${ruangan[i].nama_ruangan}</option>
           ` 
        }        
        document.getElementById('App').innerHTML += /*html*/ `
            <div class="modal active" id="modal-id">
                <a href="#close" class="modal-overlay" aria-label="Close" ></a>
                <div class="modal-container">
                <div class="modal-header">
                    <a href="#" class="btn btn-clear float-right" aria-label="Close"></a>
                    <div class="modal-title h5">Buat Kelas</div>
                </div>
                <div class="modal-body">
                    <div class="content">
                        <form action="javascript:void(0)" id="addClass" method="POST" onsubmit="eventListener(false,function(){
                            let home = new viewsHome()
                            home.addClass()
                        })">
                            <div class="form-group">
                                <label for="" class="form-label">Nama Kelas</label>
                                <input type="text" class="form-input" id="nama_kelas" required placeholder="nama kelas" maxlength="120">
                            </div>
                            <div class="form-group">
                                <label for="" class="form-label">Semester</label>
                                <select name="" id="semester" class="form-input">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="" class="form-label">Maksimal Mahasiswa</label>
                                <input type="text" class="form-input" placeholder="maksimal mahasiswa dalam kelas" id="maksimal_mahasiswa" maxlength="200">
                            </div>
                            <div class="form-group">
                                <label for="" class="form-label">Ruangan</label>
                                <select name="" id="ruangan_id" class="form-input">
                                    ${select}
                                </select>
                            </div>
                            <div class="form-group">
                                <div class="columns">
                                    <div class="column col-6">
                                        <label for="" class="form-label">Hari</label>
                                        <select name="" id="hari" class="form-input">
                                            <option value="0">Senin</option>
                                            <option value="1">Selasa</option>
                                            <option value="2">Rabu</option>
                                            <option value="3">Kamis</option>
                                            <option value="4">Jum'at</option>
                                            <option value="5">Sabtu</option>
                                            <option value="6">Minggu</option>
                                        </select>

                                    </div>
                                    <div class="column col-6">
                                        <label for="" class="form-label">Jam</label>
                                        <div class="columns">
                                            <div class="column col-6">
                                                <input type="text" id="jam" class="form-input" placeholder="jam" maxlength="2">
                                            </div>
                                            <div class="column col-6">
                                                <input type="text" id="menit" class="form-input" placeholder="menit" maxlength="2">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                            <br>
                                <div class="columns">
                                    <div class="column col-12">
                                        <button class="btn btn-primary" style="width:100%;">Tambah</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                </div>
            </div>
        `
        
    }

    async getListKelasSemester()
    {
        let data = await axios({
            url:`${static_data.domain}/kelas-list`,
            method:'GET',
            headers:{
                _token:_token()
            }
        })
        // console.log(data.data);
     
        let semester = ``

        for (let i in data.data) {
            console.log(i);

            semester += /*html*/`
                <li class="nav-item active">
                    <a href="#">Semester ${data.data[i].semester}</a>
                    <ul class="nav">
                        ${this.listOfKelas(data.data[i].data)}  
                    </ul>
                </li>
            `
        }

        document.getElementById('list-semester-kelas').innerHTML = semester

    }

    async getListKelasMahasiswa()
    {
        let data = await axios({
            url:`${static_data.domain}/kelas-list-mahasiswa`,
            method:'GET',
            headers:{
                _token:_token()
            }
        })
        // console.log(data.data);
     
        let semester = ``

        for (let i in data.data) {
            console.log(i);

            semester += /*html*/`
                <li class="nav-item active">
                    <a href="#">Semester ${data.data[i].semester}</a>
                    <ul class="nav">
                        ${this.listOfKelasMahasiswa(data.data[i].data)}  
                    </ul>
                </li>
            `
        }

        document.getElementById('list-semester-kelas').innerHTML = semester

    }

    listOfKelasMahasiswa(args)
    {
        let list = ''
        for (let i = 0; i < args.length; i++) {
            list += /*html*/`
                <div class="popover popover-left">
                    <li class='nav-item'>
                        <a href="javascript:void(0)" onclick="eventListener('${args[i].kelas_id}',function(args){
                            let view = new viewsHome()
                            view.getDetailKelas(args)
                        })">${args[i].nama_kelas}</a>
                        <div class="popover-container" style="width:65%;">
                            <div class="card">
                                <div class="card-header">
                                    <h6>${args[i].nama_kelas}</h6>
                                </div>
                                <div class="card-body" style="text-align:left;">
                                    <button class="btn btn-error" style="width:100%;text-align:left" onclick="eventListener(${args[i].kelas_id},function(args){
                                        var view = new viewsHome()
                                        view.postArsipKelas(args)
                                    })"><i class="fas fa-archive"></i> Arsipkan</button>
                                    <br><br>
                                    <button class="btn btn-primary" style="width:100%;text-align:left" onclick="eventListener(${args[i].kelas_id},function(id){
                                        let view = new viewsHome()
                                        view.updateKelas(id)
                                    })"><i class="fas fa-sign-out-alt"></i> Tinggalkan</button>
                                    <br><br>
                                    <button class="btn btn-" style="width:100%;text-align:left" onclick="eventListener(${args[i].kelas_id},function(id){
                                        let view = new viewsHome()
                                        view.getDetailKelas(id)
                                    })"><i class="fas fa-info-circle"></i> Detail</button>
                                </div>
                                <div class="card-footer">
                                    
                                </div>
                            </div>
                        </div>
                    </li> 
                </div>      
               
            `    
        }

        return list
    }

    async getListTugaskelas()
    {
        // mahasiswa
        let data = await axios({
            url:`${static_data.domain}/kelas-list-mahasiswa`,
            method:'GET',
            headers:{
                _token:_token()
            }
        })
        // console.log(data.data);
     
        let semester = ``

        for (let i in data.data) {
            console.log(i);

            semester += /*html*/`
                <li class="nav-item active">
                    <a href="#">Semester ${data.data[i].semester}</a>
                    <ul class="nav">
                        ${this.listOfKelas(data.data[i].data)}  
                    </ul>
                </li>
            `
        }

        document.getElementById('list-tugas-kelas').innerHTML = semester

    }


    listOfKelas(args)
    {
        let list = ''
        for (let i = 0; i < args.length; i++) {
            list += /*html*/`
                <div class="popover popover-left">
                    <li class='nav-item'>
                        <a href="javascript:void(0)" onclick="eventListener('${args[i].kelas_id}',function(args){
                            let view = new viewsHome()
                            view.getDetailKelas(args)
                        })">${args[i].nama_kelas}</a>
                        <div class="popover-container" style="width:60%;">
                            <div class="card">
                                <div class="card-header">
                                    <h6>${args[i].nama_kelas}</h6>
                                </div>
                                <div class="card-body" style="text-align:left;">
                                    <button class="btn btn-error" style="width:100%;text-align:left" onclick="eventListener(${args[i].kelas_id},function(args){
                                        var view = new viewsHome()
                                        view.postArsipKelas(args)
                                        
                                    })"><i class="fas fa-archive"></i> Arsipkan</button>
                                    <br><br>
                                    <button class="btn btn-primary" style="width:100%;text-align:left" onclick="eventListener(${args[i].kelas_id},function(id){
                                        let view = new viewsHome()
                                        view.updateKelas(id)
                                    })"><i class="fas fa-pen"></i> Ubah</button>
                                    <br><br>
                                    <button class="btn btn-" style="width:100%;text-align:left" onclick="eventListener(${args[i].kelas_id},function(id){
                                        let view = new viewsHome()
                                        view.getDetailKelas(id)
                                    })"><i class="fas fa-info-circle"></i> Detail</button>
                                </div>
                                <div class="card-footer">
                                    
                                </div>
                            </div>
                        </div>
                    </li> 
                </div>      
               
            `    
        }

        return list
    }



    async postArsipKelas(args)
    {
        console.log("data is %d",args );
        
         axios({
            url:`${static_data.domain}/kelas/arsip`,
            method:'POST',
            data:{
                kelas_id:args
            },
            headers:{
                _token:_token()
            }
        }).then(function(response){
            console.log(response.data.success);
            
            if(response.data.success == true)
            {
                document.getElementById('App').innerHTML += /*html*/`
                <div class="modal active" id="modal-id">
                    <a href="#close" class="modal-overlay" aria-label="Close" ></a>
                        <div class="modal-container">
                        <div class="modal-header">
                            <a href="#" class="btn btn-clear float-right" aria-label="Close"></a>
                            <div class="modal-title h5">Buat Kelas</div>
                        </div>
                        <div class="modal-body">
                            <div class="content">
                               <h4>Berhasil Mengarsipkan Kelas</h4>
                               <br><br>
                               <button class="btn btn-primary" onclick="eventListener(false,function(){
                                    let views = new viewsHome()
                                    views.dosen()
                               })">Kembali</button>
                            </div>
                        </div>

                        </div>
                    </div>
                `
            }

            

            return
        })
    }

    async updateKelas(id)
    {
        let kelas = await axios({
            url:`${static_data.domain}/kelas/${id}`,
            method:'GET',
            headers:{
                _token:_token()
            }
        })
        let ruangan = await axios({
            url:`${static_data.domain}/ruangan`,
            method:'GET',
            headers:{
                _token:_token()
            }
        })
        
        let select = `` 
        kelas = kelas.data
        ruangan = ruangan.data
        let waktu = kelas.jam.split(':')
   
        
        for (let i = 0; i < ruangan.length; i++) {
           select += /*html*/`
                <option value="${ruangan[i].ruangan_id}" >${ruangan[i].nama_ruangan}</option>
           ` 
        }        

        console.log(select);
        
        document.getElementById('App').innerHTML += /*html*/ `
            <div class="modal active" id="modal-id">
                <a href="#close" class="modal-overlay" aria-label="Close" ></a>
                <div class="modal-container">
                <div class="modal-header">
                    <a href="#" class="btn btn-clear float-right" aria-label="Close"></a>
                    <div class="modal-title h5">Ubah Kelas</div>
                </div>
                <div class="modal-body">
                    <div class="content">
                        <form action="javascript:void(0)" id="updateKelas" method="POST" onsubmit="eventListener(${kelas.kelas_id},function(id){
                            let home = new viewsHome()
                            home.postUpdateKelas(id)
                        })">
                            <div class="form-group">
                                <label for="" class="form-label">Nama Kelas</label>
                                <input type="text" class="form-input" id="nama_kelas" required placeholder="nama kelas" maxlength="120" value="${kelas.nama_kelas}">
                            </div>
                            <div class="form-group">
                                <label for="" class="form-label">Semester</label>
                                <select name="" id="semester" class="form-input">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="" class="form-label">Maksimal Mahasiswa</label>
                                <input type="text" class="form-input" placeholder="maksimal mahasiswa dalam kelas" id="maksimal_mahasiswa" maxlength="3" value="${kelas.maksimal_mahasiswa}">
                            </div>
                            <div class="form-group">
                                <label for="" class="form-label">Ruangan</label>
                                <select name="" id="ruangan_id" class="form-input">
                                    ${select}
                                </select>
                            </div>
                            <div class="form-group">
                                <div class="columns">
                                    <div class="column col-6">
                                        <label for="" class="form-label">Hari</label>
                                        <select name="" id="hari" class="form-input">
                                            <option value="0">Senin</option>
                                            <option value="1">Selasa</option>
                                            <option value="2">Rabu</option>
                                            <option value="3">Kamis</option>
                                            <option value="4">Jum'at</option>
                                            <option value="5">Sabtu</option>
                                            <option value="6">Minggu</option>
                                        </select>

                                    </div>
                                    <div class="column col-6">
                                        <label for="" class="form-label">Jam</label>
                                        <div class="columns">
                                            <div class="column col-6">
                                                <input type="text" id="jam" class="form-input" placeholder="jam" maxlength="2" value="${waktu[0]}">
                                            </div>
                                            <div class="column col-6">
                                                <input type="text" id="menit" class="form-input" placeholder="menit" maxlength="2" value="${waktu[1]}">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                            <br>
                                <div class="columns">
                                    <div class="column col-12">
                                        <button class="btn btn-primary" style="width:100%;">Ubah</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                </div>
            </div>
        `

        document.getElementById('semester').value = kelas.semester
        document.getElementById('hari').value = kelas.hari
        document.getElementById('ruangan_id').value = kelas.ruangan_id
    }

    postUpdateKelas(id)
    {
        let json = formToJson('updateKelas')
        json.kelas_id = id
        console.log(json);
        
        axios({
            url:`${static_data.domain}/kelas`,
            method:'PUT',
            data:json,
            headers:{
                _token:_token()
            }
        }).then(function(response){
            response = response.data
            document.getElementById('App').innerHTML += /*html*/`
                <div class="modal active" id="modal-id">
                    <a href="#close" class="modal-overlay" aria-label="Close" ></a>
                        <div class="modal-container">
                        <div class="modal-header">
                            <a href="#" class="btn btn-clear float-right" aria-label="Close"></a>
                            <div class="modal-title h5">Buat Kelas</div>
                        </div>
                        <div class="modal-body">
                            <div class="content">
                               <h4>${response.message}</h4>
                               <br><br>
                               <button class="btn btn-primary" onclick="eventListener(false,function(){
                                    let views = new viewsHome()
                                    views.dosen()
                               })">Kembali</button>
                            </div>
                        </div>

                        </div>
                    </div>
                `
                return
            
        })
        
    }

    async getDetailKelas(id)
    {
        let data = await axios({
            url:`${static_data.domain}/kelas/${id}`,
            method:'GET',
            headers:{
                _token:_token()
            }
        })

        data = data.data

        console.log(data);
        

        document.getElementById('App').innerHTML +=  /*html*/`

            <div class="modal active" id="modal-id">
                <a href="#close" class="modal-overlay" aria-label="Close" ></a>
                <div class="modal-container">
                <div class="modal-header">
                    <a href="#" class="btn btn-clear float-right" aria-label="Close"></a>
                    <div class="modal-title h5">Detail Kelas</div>
                </div>
                <div class="modal-body">
                    <div class="content">
                        <table class="table table-default">
                            <tr>
                                <th>Nama Kelas</th>
                                <th>:</th>
                                <td>${data.nama_kelas}</td>
                            </tr>
                            <tr>
                                <th>Kode Kelas</th>
                                <th>:</th>
                                <td>${data.kode_kelas}</td>
                            </tr>
                            <tr>
                                <th>Semester</th>
                                <th>:</th>
                                <td>${data.semester}</td>
                            </tr>
                            <tr>
                                <th>Ruangan</th>
                                <th>:</th>
                                <td>${data.nama_ruangan}</td>
                            </tr>
                            <tr>
                                <th>Hari & Jam</th>
                                <th>:</th>
                                <td>${hari(data.hari)}, Pukul ${jam(data.jam)}</td>
                            </tr>
                        </table>
                        <br>
                        <button class="btn btn-primary" style="width:100%;">Masuk</button>
                    </div>
                </div>
                </div>
            </div>
        `
        
    }

    addClass()
    {
        let json = formToJson('addClass')
        axios({
            url:`${static_data.domain}/kelas`,
            method:'POST',
            headers:{
                _token:_token()
            },
            data:json
        }).then(function(response){
            
            
            if(response.data.success)
            {
                let view = new viewsHome()
                view.dosen()
                view.messageAlert(`
                    <h4 style="text-align:center;">Berhasil Menambah Kelas</h4>
                `)
            }
      
        })
        
    }

    messageAlert(args)
    {
        document.getElementById('App').innerHTML += /*html*/`

        <div class="modal active" id="modal-id">
            <a href="#close" class="modal-overlay" aria-label="Close" ></a>
                <div class="modal-container">
                <div class="modal-header">
                    <a href="#" class="btn btn-clear float-right" aria-label="Close"></a>
                    <div class="modal-title h5"></div>
                </div>
                <div class="modal-body">
                    <div class="content">
                        ${args}
                    </div>
                </div>

                </div>
            </div>
        `
    }

    addMahasiswa()
    {
        return document.getElementById('App').innerHTML +=  /*html*/ `
            <div class="modal active" id="modal-id">
                <a href="#close" class="modal-overlay" aria-label="Close" ></a>
                <div class="modal-container">
                <div class="modal-header">
                    <a href="#" class="btn btn-clear float-right" aria-label="Close"></a>
                    <div class="modal-title h5">Tambah Mahasiswa</div>
                </div>
                <div class="modal-body">
                    <div class="content">
                        <form action="">
                            <div class="form-group">
                                <label for="" class="form-label">Nama Kelas</label>
                                <select name="" id="" class="form-input">
                                    <option value="">Pemrograman Game</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="" class="form-label">Nomor Induk Mahasiswa</label>
                                <input type="text" class="form-input">
                            </div>
                            <div class="form-group">
                            <br>
                                <div class="columns">
                                    <div class="column col-12">
                                        <button class="btn btn-primary" style="width:100%;">Tambah</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                </div>
            </div>
        
        `
    }

    postJoinKelas()
    {
        let json = formToJson('join')
        axios({
            url:`${static_data.domain}/join-kelas`,
            method:'POST',
            data:json,
            headers:{
                _token:_token()
            }
        }).then(function(response){
            document.getElementById('App').innerHTML += /*html*/ `

            <div class="modal active" id="modal-id">
                <a href="#close" class="modal-overlay" aria-label="Close" ></a>
                <div class="modal-container">
                    <div class="modal-header">
                        <a href="#" class="btn btn-clear float-right" aria-label="Close"></a>
                        <div class="modal-title h5"></div>
                    </div>
                    <div class="modal-body">
                        <div class="content">
                            <h3>${response.data.message}</h3>
                        </div>
                    </div>

                    </div>
                </div>
            `
        })
    }

    joinKelas()
    {
        return document.getElementById('App').innerHTML +=  /*html*/ `
            <div class="modal active" id="modal-id">
                <a href="#close" class="modal-overlay" aria-label="Close" ></a>
                <div class="modal-container">
                <div class="modal-header">
                    <a href="#" class="btn btn-clear float-right" aria-label="Close"></a>
                    <div class="modal-title h5">Gabung Kelas</div>
                </div>
                <div class="modal-body">
                    <div class="content">
                        <form action="javascript:void(0)" id="join" onsubmit="eventListener(false,function(){
                            let views = new viewsHome()
                            views.postJoinKelas()
                        })">
                            <div class="form-group">
                                <label for="" class="form-label">Kode Kelas</label>
                                <input type="text" class="form-input" id="kode_kelas">
                            </div>
                            <div class="form-group">
                            <br>
                                <div class="columns">
                                    <div class="column col-12">
                                        <button class="btn btn-primary" style="width:100%;">gabung</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                </div>
            </div>
        
        `
    }

    getRuangan(args)
    {
        console.log(args);
        
        // let ruangan = ``
        // for (let i = 0; i < args.length; i++) {
           
        //    ruangan += /*html*/ `
        //         <option value="">${args[i].nama_ruangan}</option>
        //    ` 
            
        // }

        // return ruangan
    }

  
}


