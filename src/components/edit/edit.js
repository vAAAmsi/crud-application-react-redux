import { Button, TextField } from '@mui/material'
import {useState} from 'react'
import { connect } from 'react-redux'
import { useNavigate,useLocation } from 'react-router-dom'
import { Editing } from '../../Redux store/actions'
import Swal from 'sweetalert2'
import styles from './edit.module.css'
 const Edit = ({state,Editing}) => {
    const location = useLocation()

    const rID = location.state;
    
    const data = state.filter(user => user.id === rID)

    const [uname,setUname] = useState(data[0].name)
    const [uage,setUage] = useState(data[0].age)
    const [ucountry,setUcountry] = useState(data[0].country)
    const navigate = useNavigate()
    const edithandle = (show = false) => {
        if(show){
            Swal.fire({
                title:'Successfully updated !',
                icon:'success',
                text:'user details are updated'
            })
            navigate('/')
        }
    }

  return (
    <div className={styles.container}>
    <form className={styles.form} autoComplete="off" 
        onSubmit={() => Editing({id:rID,name : uname,age :uage,country:ucountry},navigate('/'),edithandle(true))}>
        <div className={styles.text}>update the details of the user</div>
        <center className={styles.email}>
            <TextField label='enter name' type="text" required value={uname}
            onChange={(e) => setUname(e.target.value)} />
        </center>
        <center className={styles.password}>
            <TextField label='enter age' type="number" required value={uage}
            onChange={(e) => setUage(e.target.value)}/>
        </center>
        <center className={styles.password}>
            <TextField label='enter country' type="text" required value={ucountry}
            onChange={(e) => setUcountry(e.target.value)} />
        </center>
        <div className={styles.btn}>
        <Button variant='contained'  type='submit'>update</Button>
        <Button variant='contained'  onClick={() => navigate('/')}>cancel</Button>
            
        </div>
    </form>
</div>
  
  )
}
const mapStateToprop = (state) => ({
    state
})

export default connect(mapStateToprop,{Editing}) (Edit)
