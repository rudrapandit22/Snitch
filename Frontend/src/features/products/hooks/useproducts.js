import {createproduct,getsellerproduct,getallproducts,getproductbyid} from "../services/product.api"
import {useDispatch} from "react-redux"
import { setsellerproducts,setproducts } from "../state/product.slice"


export const useproduct = ()=>{

    const dispatch = useDispatch()

    async function handlecreateproduct(formdata){
        const data = await createproduct(formdata)
        return data.product
    }

    async function handlegetsellerproduct(){
        const data = await getsellerproduct()
        dispatch(setsellerproducts(data.products))
        return data.products
    }

    async function handlegetallproducts(){
        const data = await getallproducts()

        dispatch(setproducts(data.products))

    }

    async function handlegetproductbyid(productId){
        const data = await getproductbyid(productId)
        return data.product
    }

    return {handlecreateproduct,handlegetsellerproduct,handlegetallproducts,handlegetproductbyid};
}