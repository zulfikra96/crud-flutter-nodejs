
class viewsKelas {

    constructor(args = { ruangan:'' })
    {
        this.ruangan = args.ruangan        
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

  
}


