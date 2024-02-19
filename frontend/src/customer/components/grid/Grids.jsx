// import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

function Grids() {
  return (
    <div>      
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid xs={6}>
    <Item>1</Item>
  </Grid>
  <Grid xs={6}>
    <Item>2</Item>
  </Grid>
  <Grid xs={6}>
    <Item>3</Item>
  </Grid>
  <Grid xs={6}>
    <Item>4</Item>
  </Grid>
</Grid>

    </div>
  )
}

export default Grids