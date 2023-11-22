import React from "react";
import { Box, Modal, Select , MenuItem} from '@mui/material';

function SelectCategory ({handleChangeCategory, categoriesList}){
    return(
        <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={handleChangeCategory}
                >
                    {
                        categoriesList.map((item)=> <MenuItem value={item}>{item}</MenuItem>)
                    }
        </Select>
    )
}

export default SelectCategory;