import { FC, ReactNode } from 'react';
import { CardHeader, Box, Typography } from '@mui/material';

const CardHeaderResume: FC<{
  avatar: ReactNode;
  title: string;
  subheaderSpecialization: string;
  subheaderAdditionalInfo?: string;
  subheaderAcademicStatus: string;
  variant: 'full' | 'small';
}> = ({
  avatar,
  title,
  subheaderSpecialization,
  subheaderAdditionalInfo,
  subheaderAcademicStatus,
  variant,
}) => {
  return (
    <CardHeader
      title={title}
      avatar={avatar}
      subheader={
        <Box>
          {subheaderSpecialization && (
            <Typography>{subheaderSpecialization}</Typography>
          )}
          {variant === 'full' && subheaderAdditionalInfo && (
            <Typography sx={{ fontSize: '14px' }}>
              {subheaderAdditionalInfo}
            </Typography>
          )}
          {subheaderAcademicStatus && (
            <Typography sx={{ fontSize: '14px', color: '#87CC9E' }}>
              {subheaderAcademicStatus}
            </Typography>
          )}
        </Box>
      }
      sx={{
        padding: 0,
        alignItems: 'flex-start',
      }}
      titleTypographyProps={{
        color: '#616161',
        fontSize: '24px',
        fontWeight: 500,
        lineHeight: '32px',
      }}
      subheaderTypographyProps={{
        color: 'text.primary',
        lineHeight: '20px',
      }}
    />
  );
};

export default CardHeaderResume;
