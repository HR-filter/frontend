import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { WorkExperience } from '../../types/ResumeDataType';

const BoxExperienceResume: FC<{
  workExperience: WorkExperience;
  location: string;
  variant: 'short' | 'full';
}> = ({ workExperience, location, variant }) => {
  function renderSwitch(variant: string) {
    switch (variant) {
      case 'full':
        return (
          <Box>
            <Typography sx={{ display: 'inline' }}>
              {workExperience.start_date} — {workExperience.end_date}
            </Typography>
            <Typography color="text.secondary">{`${workExperience.total_experience_months} месяцев`}</Typography>
            <Typography>{workExperience.name}</Typography>
            <Typography>{workExperience.description}</Typography>
            {/* <List dense sx={{ listStyleType: 'disc', pl: 5 }}>
            {workExperience.duties.map((duty: any) => (
              <ListItem sx={{ display: 'list-item', p: 0 }}>
                <Typography>{duty}</Typography>
              </ListItem>
            ))}
          </List> */}
          </Box>
        );
      case 'short':
        return (
          <Box>
            <Typography sx={{ display: 'inline' }}>
              {`Опыт ${workExperience.total_experience_months} месяцев`}
            </Typography>
            <Typography color="text.secondary">{location}</Typography>
          </Box>
        );
    }
  }

  return renderSwitch(variant);
};

export default BoxExperienceResume;
