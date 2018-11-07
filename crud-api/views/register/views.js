
class viewsRegister {

    main()
    {
        return views(/*html*/ `
            
            <div class="container" style="margin-top:45px;">
                <div class="columns">
                    <div class="column col-6 col-mx-auto card" style="padding-top:10px;padding-bottom:10px;">
                        <div class="columns">
                            <div class="column col-2 col-mx-auto ">
                                <img src="/assets/images/logos/logo-untag.png" class="img-responsive">
                            </div>
                            <div class="column col-12">
                            <br>
                                <h5 style="text-align:center;">Daftar E-Learning</h5>
                            </div>
                        </div>
                        <!--Form Register-->
                        <form action="javascript:void(0)" id="form" method="POST" onsubmit="eventListener('',function(){
                            let view = new viewsRegister()
                            view.postRegister(event)
                        })">
                        <div class="container" style="">
                            <div class="columns">
                                <div class="column col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">Nama Lengkap</label>
                                        <input type="text" class="form-input" placeholder="Nama Lengkap anda" id="nama_lengkap" maxlength="40" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">Nomor Induk </label>
                                        <input type="text" class="form-input" placeholder="Nomor induk mahasiswa atau dosen" id="nomor_induk" maxlength="15" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">Email</label>
                                        <input type="text" class="form-input" placeholder="Email" id="email" maxlength="50" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">No Telp</label>
                                        <input type="text" class="form-input" placeholder="Nomor Telephone / Hanphone" id="no_telp" maxlength="14" required>
                                    </div>
                                </div>
                                <div class="column col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">Daftar Sebagai</label>
                                        <select name="" id="roles" class="form-input">
                                            <option value="dosen">Dosen</option>
                                            <option value="mahasiswa">Mahasiswa</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">Password</label>
                                        <input type="password" class="form-input" placeholder="Password" id="password" maxlength="40" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">Konfirmasi Password</label>
                                        <input type="password" class="form-input" placeholder="Konfirmasi Password" id="confirmation_password" maxlength="40" required>
                                    </div>
                                    <div class="form-group">
                                        <div class="g-recaptcha" data-sitekey="6LfPSnQUAAAAAAsFLMnSDHoiNOxUteCcO0HlLA4y"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                            <br>
                            <div class="columns">
                                <div class="column col-12" style="text-align:center;">
                                    <span style="text-align:center;">Sudah memiliki akun ? <a href="javascript:void(0)" onclick="eventListener('',function(){
                                        router.navigateTo('login')
                                    })">Login disini</a></span>
                                    <br><br>
                                </div>
                                <div class="column col-1 col-mx-auto">
                                    <button type="submit" class="btn btn-primary" style="text-align:center;">Daftar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `)
    }

    postRegister(event)
    {
        let form = document.getElementById('form')
        let data = {}

        for(let i = 0 ; i < form.length; i++)
        {
                       
            data[`${form[i].getAttribute('id')}`] = form[i].value
        }

        if(data.password != data.confirmation_password)
        {
            document.getElementById('App').innerHTML += /*html*/`
            <div class="modal active" id="modal-id">
                <a href="javascriot:void(0)" class="modal-overlay" aria-label="Close"></a>
                <div class="modal-container">
                <div class="modal-header">
                    <a href="javascript:void(0)" class="btn btn-clear float-right" aria-label="Close"></a>
                    <div class="modal-title h5"></div>
                </div>
                <div class="modal-body">
                    <div class="content">
                    <h3>Maaf password anda tidak sesuai dengan konfirmasi password</h3>
                    </div>
                </div>
                <div class="modal-footer">
                    <a href="javascript:void(0)" class="btn btn-error">Tutup</a>
                </div>
                </div>
            </div>
            `
        }
        
        
        axios({
            method:'POST',
            url:`${static_data.domain}/register`,
            headers:{
                'Content-Type':'application/json'
            },
            data:data,
            onUploadProgress: function (progressEvent) {
                
                
                if(progressEvent.loaded != progressEvent.total)
                {
                    document.getElementById('App').innerHTML += /*html*/`
                    <div class="modal active" id="modal-id">
                        <a href="javascriot:void(0)" class="modal-overlay" aria-label="Close"></a>
                        <div class="modal-container">
                        <div class="modal-header">
                            <a href="javascript:void(0)" class="btn btn-clear float-right" aria-label="Close"></a>
                            <div class="modal-title h5"></div>
                        </div>
                        <div class="modal-body">
                            <div class="content">
                                <button class="btn btn-login"></button>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <a href="javascript:void(0)" class="btn btn-error">Tutup</a>
                        </div>
                        </div>
                    </div>
                    `
                }
                
              },
        }).then(function(response){
            console.log(response);
            
            if(!response.data.success)
            {
                document.getElementById('App').innerHTML += /*html*/ `
         
                <div class="modal active" id="modal-id">
                    <a href="javascriot:void(0)" class="modal-overlay" aria-label="Close"></a>
                    <div class="modal-container">
                    <div class="modal-header">
                        <a href="javascript:void(0)" class="btn btn-clear float-right" aria-label="Close"></a>
                        <div class="modal-title h5"></div>
                    </div>
                    <div class="modal-body">
                        <div class="content">
                           <h4 style="text-align:center;">${response.data.message}</h4>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a href="javascript:void(0)" class="btn btn-error">Tutup</a>
                    </div>
                    </div>
                </div>
                `

                return
            }
            
            document.getElementById('App').innerHTML += /*html*/ `
         
                <div class="modal active" id="modal-id">
                    <a href="javascriot:void(0)" class="modal-overlay" aria-label="Close"></a>
                    <div class="modal-container">
                    <div class="modal-header">
                        <a href="javascript:void(0)" class="btn btn-clear float-right" aria-label="Close"></a>
                        <div class="modal-title h5"></div>
                    </div>
                    <div class="modal-body">
                        <div class="content">
                           <h4 style="text-align:center;">${response.data.message}</h4>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a href="javascript:void(0)" class="btn btn-error">Tutup</a>
                    </div>
                    </div>
                </div>
                `
            
        })
    }
}


