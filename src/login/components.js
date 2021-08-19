import React ,{useState} from 'react'
import axios from 'axios';
import './components.css'
import './grid.css'
import img from './image0.png'
import  {TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
const api=axios.create({
    baseURL:'https://reqres.in/',
})

const Components = () => {
    const[mobile,Stemobile]=useState(false)
    const[cummy,setDummy]=useState({
        email:'',
        password:""
    })

    onchange=(e)=>{
        cummy[e.target.name]=e.target.value;
        setDummy(cummy);
    }
    onsubmit=(e)=>{
        e.preventDefault();
        const delta={ "email": cummy.email,
        "password": cummy.password}
        api.post('/api/register',delta).catch(error=>{
            if (error.response) {
                alert(error.response.data.error);
                
              } 
        }
        )
        api.post('/api/login/',delta).then(res=>{
            alert(`User Saved Status ${res.status}`)
        })
    }
    return (
        <div className="login">
            <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            <div className='row'>
            <header style={{backgroundColor:'white'}} >
                <nav className="nav_bar">
                    <b className="title">
                        ATools
                    <b style={{color:'red'}}>.</b></b>
                    <Button variant="contained" className="btn_nav1" style={{
                        backgroundColor:'orangered',color:'white'
                    }} 
                    onClick={onsubmit}
                    size="medium"
                    >
                        Login
                    </Button>
                    <Button variant="contained" style={{
                        float:'right',
                        marginRight:'2%',
                    }}
                    onClick={()=>{alert("this is a dummy call")}}
                    color="primary"
                    size="medium"
                    >
                       Start Trial
                    </Button>
                </nav>
            </header>
            </div>
            <body >
            <section className='login_format'>
                <div className="row">
                    <div  className="box_stl">
                        <b>Welcome Back!</b>
                        <br/>
                        <i>This is for a change!!</i>
                    </div> 
                        
                </div>
                
                <div >
                <form className="box_stl1" >
                    <TextField  label="E-mail" variant="filled" name="email" onChange={onchange} style={{backgroundColor:'whitesmoke'}} ></TextField><br/>
                    <TextField  label="Password" variant="filled" name="password" onChange={onchange} style={{backgroundColor:'whitesmoke',marginTop:'10px'}}></TextField><br/>
                    <Button variant="contained" color="primary" style={{
                        width:'',
                            backgroundColor:'orangered',
                            color:'white'
                    }}
                    onClick={onsubmit}>Login</Button>
                </form>
                <FormControlLabel
                control={<Checkbox style={{color:'white'}}></Checkbox>} label="Remember Me"style={{color:'white'}} />
                <button style={{border:'none',display:'inline-block',backgroundColor:'inherit' ,cursor:'pointer',color:'white'}} onClick={()=>{alert('this is a dummy call')}} >Forgotten Password </button>
                </div>
            </section>
            <i style={{color:'white'}}>Submitted by Aayush Gehi</i>
            </body>
        </div>
    )
}

export default Components
