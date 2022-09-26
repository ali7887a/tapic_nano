import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import List1 from './List1';
import List2 from './List2';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} alignItems="center" style={{marginBottom:"40px"}}>
      {page===1&&<List1/>}
      {page===2&&<List2/>}
      <Pagination count={2} page={page} onChange={handleChange}/>
    </Stack>
  );
}
