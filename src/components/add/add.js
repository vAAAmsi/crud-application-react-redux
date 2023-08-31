import { Button, TextField } from '@mui/material'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Adding } from '../../Redux store/actions'
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import styles from './add.module.css'
 const Add = ({state,Adding}) => {
    
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [country,setCountry] = useState('')
    const navigate = useNavigate()
    const addhandle = (show = false) => {
        if(show){
            Swal.fire({
                title:'Data added Successfully  !',
                icon:'success',
                text:'user details added'
            })
            navigate('/')
        }
    }

  return (
    <div className={styles.container}>
    <form className={styles.form} autoComplete="off" onSubmit={() => Adding({id : state.length + 1,name : name,age :age,country:country}
            ,addhandle(true))}>
        <div className={styles.text}>Enter details of the user!</div>
        <center className={styles.email}>
            <TextField label='enter name' type="text" required value={name}
            onChange={(e) => setName(e.target.value)} />
        </center>
        <center className={styles.password}>
            <TextField label='enter age' type="number" required value={age}
            onChange={(e) => setAge(e.target.value)}/>
        </center>
        <center className={styles.password}>
            <TextField label='enter country' type="text" required value={country}
            onChange={(e) => setCountry(e.target.value)} />
        </center>
        <center className={styles.btn}>
        <Button variant='contained'  type='submit' >Add</Button>
        
            
        </center>
    </form>
</div>
   
  )
}

const mapStateToprop = (state) => ({
    state
})

export default connect(mapStateToprop,{Adding}) (Add);
