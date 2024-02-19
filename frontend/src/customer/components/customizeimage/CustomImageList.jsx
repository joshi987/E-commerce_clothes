import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './imageList.css'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CustomImageList() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Item className='item'>
            <img className='custom-image-item' src="https://kxadmin.sabhyataclothing.com/product/2110MKSBW2034-GnBluSt/600/2110MKSBW2034_1.jpg" alt="" />
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item className='item'>
          <img className='custom-image-item' src="https://www.jiomart.com/images/product/500x630/rvxsduk7sj/ftdiva-women-maroon-printed-rayon-single-straight-kurta-product-images-rvxsduk7sj-0-202202260912.jpg" alt="" />
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item className='item'><img className='custom-image-item' src="https://royalicafashion.com/cdn/shop/products/IMG-20220719-WA0023.jpg?v=1663620560&width=1445" alt="" /></Item>
        </Grid>
        <Grid xs={6}>
          <Item className='item'><img className='custom-image-item' src="https://5.imimg.com/data5/ECOM/Default/2022/12/MB/XS/PQ/14340039/1656818325227-ctn-red-originnm80prcnt-500x500.jpg" alt="" /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}