import { FC } from 'react';
import { Box, Card, Grid, Typography, Divider, Button } from '@mui/material';
import ChipResumeStatus from '../../ui/ChipResumeStatus';
import ResumeDataType from '../../types/ResumeDataType';
import demoResume from '../../assets/data/demoResume';
import CardActionsResume from '../../ui/CardActionsResume';
import ViewedIcon from '../../ui/ViewedIcon';
import FavouriteToggleResume from '../../ui/FavouriteToggleResume';
import CardHeaderResume from '../../ui/CardHeaderResume';
import AvatarResume from '../../ui/AvatarResume';
import EmailIcon from '../../ui/EmailIcon';
import TelegramIcon from '../../ui/TelegramIcon';
import DownloadIcon from '../../ui/DownloadIcon';
import IconButtonResume from '../../ui/IconButtonResume';
import BoxExperienceResume from '../../ui/BoxExperienceResume';
import ChipStackResume from '../../ui/ChipStackResume';
import ChipSkill from '../../ui/ChipSkill';
import { WorkExperience } from '../../types/ResumeDataType';

const achievementGenerator: () => number = () => {
  return Math.floor(Math.random() * 12);
};

const CardSmall: FC<{
  data: ResumeDataType;
  isViewed: boolean;
  isFavourite: boolean;
  onClickLike: () => void;
  onClickDetails: () => void;
  onClickTelegram: () => void;
  onClickEmail: () => void;
  onClickDownload: () => void;
  pdfLink: string;
}> = ({
  data = demoResume,
  isViewed = true,
  isFavourite = true,
  onClickLike,
  onClickDetails,
  onClickTelegram,
  onClickEmail,
  onClickDownload,
  pdfLink = '',
}) => {
  return (
    <Card
      sx={{
        borderRadius: '16px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <CardActionsResume>
        <ChipResumeStatus label={data.employment_status.name} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          {isViewed && <ViewedIcon />}
          <FavouriteToggleResume
            isEnabled={isFavourite}
            isActive={true}
            value={isFavourite}
            onChange={onClickLike}
          />
        </Box>
      </CardActionsResume>
      <CardHeaderResume
        variant="small"
        avatar={
          <AvatarResume
            name={`${data.user.first_name} ${data.user.last_name}`}
            imagePath={data.photo}
            withBadge={true}
            size={88}
            badgeCount={achievementGenerator()}
          />
        }
        title={`${data.user.first_name} ${data.user.last_name}`}
        subheaderSpecialization={`${data.specialization.name} • ${data.grade.name}`}
        subheaderAcademicStatus={`${data.academic_status.name}`}
      />
      <Divider />
      <Grid container spacing={11}>
        {data.work_experience[0] && (
          <>
            <Grid item xs={3}>
              <Typography color="text.secondary" sx={{ fontWeight: 500 }}>
                Инфо
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Box>
                {data.work_experience.map((experience: WorkExperience) => {
                  return (
                    <BoxExperienceResume
                      workExperience={experience}
                      location={data.location.name}
                      variant="short"
                    />
                  );
                })}
              </Box>
            </Grid>
          </>
        )}
        {data.courses[0].skills[0] && (
          <>
            <Grid item xs={3}>
              <Typography color="text.secondary" sx={{ fontWeight: 500 }}>
                Ключевые навыки
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <ChipStackResume>
                {data.courses[0].skills
                  .slice(0, 5)
                  .map((skill: { id: number; name: string }) => {
                    return <ChipSkill label={skill.name} />;
                  })}
              </ChipStackResume>
            </Grid>
          </>
        )}
      </Grid>
      <Divider />
      <CardActionsResume>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          {data.user.email && (
            <IconButtonResume onClick={onClickEmail}>
              <EmailIcon />
            </IconButtonResume>
          )}
          {data.contact_info.telegram_login && (
            <IconButtonResume onClick={onClickTelegram}>
              <TelegramIcon />
            </IconButtonResume>
          )}
          {pdfLink && (
            <IconButtonResume onClick={onClickDownload}>
              <DownloadIcon />
            </IconButtonResume>
          )}
        </Box>

        <Button
          sx={{
            textTransform: 'none',
            paddingX: '20px',
            paddingY: '10px',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px',
          }}
          variant="text"
          onClick={onClickDetails}
        >
          Подробнее
        </Button>
      </CardActionsResume>
    </Card>
  );
};

export default CardSmall;
