import React from "react";
import { Box, Modal, Select , MenuItem} from '@mui/material';

function ProductDetailModal ({handleClose, productDetails, open}){
<Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description" 
                    sx={{ width: "400px", height:"400px"}}      
                 >
                    <div>
                    <p> {productDetails?.title}   </p>
                    <p>{productDetails?.price}</p>
                    <p>{productDetails?.description}</p>
                    </div>
                </Modal>
}

export default ProductDetailModal;