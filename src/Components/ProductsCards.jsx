// import React from "react";
import React,{useEffect, useState} from 'react';
import styled from "styled-components";
import axios from 'axios';
import { Box, Modal, Select , MenuItem, Grid} from '@mui/material';

const ProductDetailWrapper = styled.div`
display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
`

function ProductsCards ({dataToShowOnUi, handleClickProductCard, open}){
return (
    <Grid container spacing={3}> 
                {
                        dataToShowOnUi.map((item)=> 
                        <Grid item xs={3} 
                            key={item?.id}
                            onClick={()=>handleClickProductCard(item.id)}
                            >
                                <Box sx={{height:"200px"}}>
                                    <img src={item?.image} width={100} height={"100%"}/>
                                </Box>
                                <ProductDetailWrapper>
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
                                </ProductDetailWrapper>

                        </Grid>)
                    }
            </Grid>
)
}

export default ProductsCards;