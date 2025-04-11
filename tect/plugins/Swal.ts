import Swal from 'sweetalert2'

export default defineNuxtPlugin((nuxtApp: any) => {
  const toast = {
    success: (message: string) => {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Success',
        text: message,
        showConfirmButton: false,
        timer: 1500,
      })
    },
    error: (message: string) => {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: 'Error',
        text: message,
        showConfirmButton: false,
        timer: 1500,
      })
    },
    warning: (message: string) => {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'warning',
        title: 'Warning',
        text: message,
        showConfirmButton: false,
        timer: 1500,
      })
    },
    confirm: (message: string) => {
      return Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: message,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      })
    },
  }

  nuxtApp.provide('swal', toast)
})
