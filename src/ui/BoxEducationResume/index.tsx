import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Education } from '../../types/ResumeDataType';

const BoxEducationResume: FC<{
  education: Education;
}> = ({ education }) => {
  return (
    <Box>
      <Typography sx={{ display: 'inline' }}>
        {education.institution} — {education.specialization}
      </Typography>
      <Typography color="text.secondary">
        {education.education_level}
      </Typography>
    </Box>
  );
};

export default BoxEducationResume;
