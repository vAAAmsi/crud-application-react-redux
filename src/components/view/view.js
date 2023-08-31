import { connect } from 'react-redux'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import styles from './view.module.css'
import { Delete } from '../../Redux store/actions'
import Swal from 'sweetalert2'
 const View = ({state,Delete}) => {
    // console.log(type1)
    const navigate = useNavigate()
    const handledelete=async(show=false)=>{
          if(show){
            
              await Swal.fire(
                  {
                      icon: 'success',
                      title: 'Success',
                      text: 'Successsfully deleted the Task',
                  }
                 );
          }
         navigate('/')    
  }
  return (
    <>
        <center style={{marginTop:'20px'}}>
        <Button variant='outlined' style={{backgroundColor:'green',color:'white'}} onClick={() => navigate('/add')}>+ Add</Button>
        </center>
         <div className={styles.main_box_container}>
        
            {
                state
                .map((user,index) => {
                    
                    
                    return(
                    <div key={index} 
                    className={styles.inner_container}  >
                        <div className={styles.testname} >Name : {user.name}</div>
                        <div className={styles.testname} >Age : {user.age}</div>
                        <div className={styles.testname} >country : {user.country}</div>
                        <div style={{display:'flex',padding:'20px'}}>
                            {/* <Button style={{marginLeft:'10px'}} onClick={() => {navigate()}} variant='contained'>view</Button> */}
                            <Button style={{marginLeft:'10px'}} onClick={() => {navigate('/edit',{state : user.id})}} 
                              variant='contained'>edit</Button>
                            <Button style={{marginLeft:'10px'}}
                             onClick={() => {Delete(user.id);handledelete( true)} } 
                             variant='contained'>delete</Button>
                        </div>
                    </div>
                    )
                })
            }
</div>
    </>
  )
}

 const mapStateToprop = (state) => ({
    state
 })
export default connect(mapStateToprop,{Delete}) (View);
