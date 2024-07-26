import {Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";

const ExitTable = ({costValues}) => {
  return(
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
          <Typography variant="h4" component="h4" gutterBottom align="center" color={'primary'}>
              Breakdown of Cost
          </Typography>
          <TableContainer style={{marginTop: '20px'}}>
              <Table>
                  <TableBody>
                      <TableRow>
                          <TableCell colSpan={2}>Base Rate:</TableCell>
                          <TableCell>Rs. {costValues.baseRate}</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell colSpan={2}>Distance Cost Breakdown:</TableCell>
                          <TableCell>Rs. {costValues.distanceCost}</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell colSpan={2}>SubTotal</TableCell>
                          <TableCell>Rs. {costValues.subTotal}</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell colSpan={2}>Discount/Other</TableCell>
                          <TableCell>{costValues.discount}%</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell colSpan={2}><b>TOTAL TO BE
                              CHARGED:</b></TableCell>
                          <TableCell><b>Rs. {costValues.total}</b></TableCell>
                      </TableRow>
                  </TableBody>
              </Table>
          </TableContainer>
      </Box>
  )
}

export default ExitTable;