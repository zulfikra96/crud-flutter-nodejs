
class viewsLogin {

    main()
    {
        return views(/*html*/ `
            
            <div class="container" style="margin-top:45px;">
                <div class="columns">
                    <div class="column col-4 col-mx-auto card" style="padding-top:10px;padding-bottom:10px;">
                        <div class="columns">
                            <div class="column col-2 col-mx-auto ">
                                <img src="/assets/images/logos/logo-untag.png" class="img-responsive">
                            </div>
                            <div class="column col-12">
                            <br>
                                <h5 style="text-align:center;">Login E-Learning</h5>
                            </div>
                        </div>
                        <!--Form Register-->
                        <form action="javascript:void(0)" id="form" method="POST" onsubmit="eventListener('',function(){
                            let view = new viewsLogin()
                            view.loginPost(event)
                        })">
                            <div class="container">
                                <div class="columns">
                                    <div class="column col-12">
                                        <div class="form-group">
                                            <label for="" class="form-label">Nomor Induk</label>
                                            <input type="text" class="form-input" maxlength="100" placeholder="Nomor induk" id="nomor_induk">
                                        </div>
                                        <div class="form-group">
                                            <label for="" class="form-label">Password</label>
                                            <input type="password" class="form-input" placeholder="Password" id="password" maxlength="40" required>
                                        </div>
                                        <div class="form-group">
                                            <span style="color:red;text-align:center;" id="error"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="columns">
                                <div class="column col-1 col-mx-auto" style="text-align:center;">
                                    <button type="submit" class="btn btn-primary" >Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `)
    }

    async loginPost(event)
    {
        let json = formToJson('form')
     
        axios({
            url:`${static_data.domain}/login`,
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            data:json
        }).then(function(response){
            console.log(response);

            if(!response.data.success)
            {
                document.getElementById('error').innerHTML = response.data.message
                document.getElementById(response.data.input).style.border = "solid red 1px";
                return
            }

            localStorage.setItem('users',JSON.stringify({
                user_id:response.data.user_id,
                token:response.data.token
            }))

            router.navigateTo('/home')
            
            
        })

        let session = await axios({
            url:`${static_data.domain}/session`,
            method:'GET',
            headers:{ 
                "_token":_token
            }
        }).then(function(data){
            console.log(data);
            if(data.data.status == 400)
            {
                router.remove('/login')
            }
            localStorage.setItem('session',JSON.stringify(data.data.session))
        })
        .catch(function(err){
            console.log("error found " + err);
            
        })
        
        
    }
}


