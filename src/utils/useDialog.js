"use client"
import React from 'react'

const useDialog = () => {

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }

  return (
    <div>
      
    </div>
  )
}

export default useDialog
