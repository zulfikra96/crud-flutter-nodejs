const static_data = {
    domain:'http://localhost:3000/api',
    token:(localStorage.getItem('users') != null) ? JSON.parse(localStorage.getItem('users')).token:''
}


function views(view)
{
    
    document.getElementById('App').innerHTML = view
}

function viewsWithParams(args,callback)
{
    if(callback)
    {
        document.getElementById('App').innerHTML = callback(args)
    }
}


function requireModule(args, callback)
{
    let script = document.createElement('script')
    script.setAttribute('type','text/javascript')
    script.setAttribute('src',args)
    // script.setAttribute('async','')

    document.head.appendChild(script)

    if(callback) callback()
}

function requireModuleInnerBody(args, callback)
{
    let script = document.createElement('script')
    script.setAttribute('type','text/javascript')
    script.setAttribute('src',args)
    // script.setAttribute('async','')
    let body = document.getElementsByTagName('body')[0]
    body.appendChild(script)

}

function closeModal(event)
{
    console.log(event);
    
}

function verifySetToken(router)
{
    if(localStorage.getItem('users') != null)
    {
        router.remove('/login')
        return
    }
}

function _token()
{
    let _token = localStorage.getItem('users')
    if(!_token)
    {
        router.navigateTo('/login')
    }
    _token = JSON.parse(_token)
    if(_token) _token = _token.token
    
    return _token
}

function verifyToken(router)
{
    let _token = localStorage.getItem('users')
    if(!_token)
    {
        router.navigateTo('/login')
    }
    _token = JSON.parse(_token)
    if(_token) _token = _token.token
 
    
    axios({
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

function session()
{
    let ses = localStorage.getItem('session')
    ses = JSON.parse(ses)
    return ses
}


function jam(args)
{
    // console.log("data in jam " + args);
    
    let time = args.split(':')
    time = time[0]+'.'+time[1]
    console.log(args);
    
    
    return time
}

function hari(args)
{
    let day = [
        'Senin',
        'Selasa',
        'Rabu',
        'Kamis',
        'Jumat',
        'Sabtu',
        'Minggu'
    ]

    return day[args]
}


function eventListener(args,callback)
{
    if(callback) callback(args)
}


function formToJson(id)
{
    let form = document.getElementById(id)
    let data = {}

    for(let i = 0 ; i < form.length; i++)
    {
        if(form[i].getAttribute('id') != null)
        {
            data[`${form[i].getAttribute('id')}`] = form[i].value
        }        
    }

    return data
}





