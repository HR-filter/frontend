import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';

import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import FilterList from '../FilterList';

export default function SimpleSlide() {
  const [checked, setChecked] = React.useState(false);

  // Сюда заносим что надо отрендерить справа в окне
  const body = (
    <Box>
      <FilterList />
    </Box>
  );

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      sx={{
        height: 180,
        width: 130,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
        {body}
      </Slide>
    </Box>
  );
}
