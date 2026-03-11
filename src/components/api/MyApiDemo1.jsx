import React, {useState} from 'react'
import axios from 'axios'

export const MyApiDemo1 = () => {

    const[message,setmessage] = useState("")
    const [products,setproducts] = useState([])

    const getProducts = async()=>{

    const response = await axios.get("https://dummyjson.com/products")
     console.log(response)
        console.log(response.data)
        console.log(response.data.products)
        setmessage("Products Data Fetched Successfully")
        console.log(response.data.products)
        setproducts(response.data.products)
    }
  return (
    <div style={{textAlign:"center"}}><h1><b>MyApiDemo1</b></h1>
    <button onClick={()=>{getProducts()}}>GET</button>
    <h1>{message}</h1>
    
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Brand</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products.map((product)=>{
                            return <tr>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.brand}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}
