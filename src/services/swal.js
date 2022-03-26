
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
    }
}