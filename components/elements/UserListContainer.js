import React, { useState } from 'react'
import UserListItem from './UserListItem';
import './Recycler.module.styl'
export default function UserListContainer() {

  const[data, setData] = useState([{phone:'8458835494', recent:'Hii', id:100}, {phone:'8458835494', recent:'Hii', id:101}]);


  return (
    <div className='recycler'>
      {
        data.map((e) => {
          return (
            <UserListItem key={e.id} data={e}/>
          )
        })
      }
    </div>
  )
}
