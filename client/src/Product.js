// import React, { useEffect } from 'react'
// import jwt from 'jsonwebtoken'
// import {useHistory} from 'react-router-dom'


// const Product = () => {
//   const history=useHistory()

//   async function populateProduct()
//   {
//     const req=await fetch('http://localhost:8080/api/product',{
//    headers:{
//     'x-access-token':localStorage.getItem('token'),
//    },
//     })
//     const data=req.json()
//     console.log(data)
//   }

//     useEffect(()=>{
//         const token=localStorage.getItem('token')
//         if(token)
//         {
//             const user=jwt.decode(token)
//            if(!user)
//            {
//             localStorage.removeItem('token')
//           history.replace('/login')
//            }
//            else{
//             populateProduct()
//            }
//         }

//     },[])


//   return (
//     <div>
//     <h1>Hello</h1>
//     </div>
//   )
// }

// export default Product
