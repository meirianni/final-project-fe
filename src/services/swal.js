
import sweet from 'sweetalert2'

export default {
    notification: (message,status)=>{
        sweet.fire({
            position: 'center',
            icon: status,
            title: message,
            showConfirmButton: false,
            timer: 1500
          })
    },
    confirm: (message,status)=>{
        sweet.fire({
            position: 'center',
            icon: status,
            title: message,
            showConfirmButton: true,
            timer: 1500
          })
    }
}