import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Project } from '../../types/ResumeDataType';

const BoxProjectResume: FC<{
  project: Project;
}> = ({ project }) => {
  return (
    <Box>
      <Typography sx={{ textDecoration: 'underline' }}>
        {project.title}
      </Typography>
      <Typography>{project.description}</Typography>
    </Box>
  );
};

export default BoxProjectResume;
