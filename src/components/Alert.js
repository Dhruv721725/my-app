import React from 'react'

function Alert(props) {
  return (
    <div class={`alert alert-${props.message.type} alert-dismissible fade show`} role="alert">
        {/* <strong>Alert</strong> */}
        {props.message.message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert
