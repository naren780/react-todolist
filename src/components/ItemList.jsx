import React from 'react'
const ItemList = (props) => {
  return (
    <div >
      <li  onClick={()=>props.onChecked(props.id)}>{props.items}</li>
    </div>
  )
}
export default ItemList
