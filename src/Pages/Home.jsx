import React,{useEffect, useState} from 'react';
import styled from "styled-components";
import axios from 'axios';
import { Box, Modal, Select , MenuItem, Grid} from '@mui/material';
import SelectCategory from '../Components/SelectCategory';
import ProductsCards from '../Components/ProductsCards';
const CatergoryWrapper = styled.div`
   display: flex;
    flex-direction: row;
  margin: 30px;
`;
const ProductDetailWrapper = styled.div`
display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
`
const ModalWrapper = styled.div`
display:flex;
 justify-content:center;
align-items:center
`

function Home(){
    const [produtcsData, setProductsData] = useState([]);
    const [open,setOpen] = useState(false);
    const [productDetails, setProductDetails] = useState({});
    const [categoriesList, setCategoriesList] = useState([]);
    const [filteredData, setFilteredData] = useState([])


    useEffect(()=>{
       fetchProductListData()
    },[])

    const fetchProductListData = () =>{
         axios.get('https://fakestoreapi.com/products').then((res)=>{
            console.log('products',res.data)
            setProductsData(res?.data)
            axios.get("https://fakestoreapi.com/products/categories").then((res)=>{
                console.log('categories', res?.data)
                res.data.unshift("All")
                setCategoriesList(res?.data || [])
            })
        })
    }
    const handleClickProductCard = (id) =>{
        console.log('clicked card',id)
          axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            console.log(res.data)
            setProductDetails(res?.data || {})
            setOpen(!open)
        })
    }

    const handleClose = () =>{
        setOpen(false)
        setProductDetails({})
    }

    const handleChangeCategory = (e) =>{
        let selectedCategoryName = e.target.value
        let updatedProductList = produtcsData.filter((item)=> item?.category === selectedCategoryName);
        setFilteredData(updatedProductList)
    }

    const dataToShowOnUi = filteredData.length ? filteredData : produtcsData;
    return <div>
        
            <CatergoryWrapper >
                <SelectCategory handleChangeCategory={handleChangeCategory} categoriesList={categoriesList}/>
            </CatergoryWrapper>
         

<ProductsCards dataToShowOnUi={dataToShowOnUi} handleClickProductCard={handleClickProductCard}/>
           
            <div>
                <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="parent-modal-title"
                                aria-describedby="parent-modal-description" 
                                sx={{ width: "400px", height:"400px"}}      
                            >
                                <div style={{background:"white"}}>
                                    <img src={productDetails.image} width={100}/>
                                    <p> {productDetails?.title}   </p>
                                    <p>{productDetails?.price}</p>
                                    <p>{productDetails?.description}</p>
                                </div>
                </Modal>
            </div>

                
    </div>
}
export default Home