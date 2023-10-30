import { FC } from 'react';
import { Box, Card, Grid, Divider, Button, Typography } from '@mui/material';
import ChipResumeStatus from '../../ui/ChipResumeStatus';
import ResumeDataType, {
  Course,
  Education,
  Language,
  PortfolioItem,
  Project,
  WorkExperience,
} from '../../types/ResumeDataType';
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
import BoxText from '../../ui/BoxText';
import ChipStackResume from '../../ui/ChipStackResume';
import ChipPortfolio from '../../ui/ChipPortfolio';
import BoxProjectResume from '../../ui/BoxProjectResume';
import ChipSkill from '../../ui/ChipSkill';
import BoxEducationResume from '../../ui/BoxEducationResume';

const achievementGenerator: () => number = () => {
  return Math.floor(Math.random() * 12);
};

const CardFull: FC<{
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
        variant="full"
        avatar={
          <AvatarResume
            name={`${data.user.first_name} ${data.user.last_name}`}
            imagePath={data.photo}
            withBadge={false}
            size={150}
            badgeCount={achievementGenerator()}
          />
        }
        title={`${data.user.first_name} ${data.user.last_name}`}
        subheaderSpecialization={`${data.specialization.name} • ${data.grade.name}`}
        subheaderAdditionalInfo={`${data.age} лет • ${data.location.name}`}
        subheaderAcademicStatus={`${data.academic_status.name}`}
      />
      <Divider />
      <Grid container spacing={11}>
        {data.work_experience[0] && (
          <>
            <Grid item xs={3}>
              <Typography color="text.secondary" sx={{ fontWeight: 500 }}>
                Опыт
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Box>
                {data.work_experience.map((experience: WorkExperience) => {
                  return (
                    <BoxExperienceResume
                      workExperience={experience}
                      location={data.location.name}
                      variant="full"
                    />
                  );
                })}
              </Box>
            </Grid>
          </>
        )}

        {data.courses[0] && (
          <>
            <Grid item xs={3}>
              <Typography color="text.secondary" sx={{ fontWeight: 500 }}>
                Курсы
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Box>
                {data.courses.map((course: Course) => {
                  return <BoxText text={`${course.specialization.name}`} />;
                })}
              </Box>
            </Grid>
          </>
        )}

        {data.portfolio[0] && (
          <>
            <Grid item xs={3}>
              <Typography color="text.secondary" sx={{ fontWeight: 500 }}>
                Портфолио
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <ChipStackResume>
                {data.portfolio.map((item: PortfolioItem) => {
                  return <ChipPortfolio link={item.url} />;
                })}
              </ChipStackResume>
            </Grid>
          </>
        )}

        {data.projects[0] && (
          <>
            <Grid item xs={3}>
              <Typography color="text.secondary" sx={{ fontWeight: 500 }}>
                Проекты
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Box>
                {data.projects.map((project: Project) => {
                  return <BoxProjectResume project={project} />;
                })}
              </Box>
            </Grid>
          </>
        )}

        {data.courses[0].skills[0] && (
          <>
            <Grid item xs={3}>
              <Typography color="text.secondary" sx={{ fontWeight: 500 }}>
                Навыки
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <ChipStackResume>
                {data.courses[0].skills.map(
                  (skill: { id: number; name: string }) => {
                    return <ChipSkill label={skill.name} />;
                  },
                )}
              </ChipStackResume>
            </Grid>
          </>
        )}

        {data.languages[0] && (
          <>
            <Grid item xs={3}>
              <Typography color="text.secondary" sx={{ fontWeight: 500 }}>
                Языки
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Box>
                {data.languages.map((language: Language) => {
                  return <BoxText text={language.name} />;
                })}
              </Box>
            </Grid>
          </>
        )}
        {data.educations[0] && (
          <>
            <Grid item xs={3}>
              <Typography color="text.secondary" sx={{ fontWeight: 500 }}>
                Образование
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Box>
                {data.educations.map((education: Education) => {
                  return <BoxEducationResume education={education} />;
                })}
              </Box>
            </Grid>
          </>
        )}
        {data.description && (
          <>
            <Grid item xs={3}>
              <Typography color="text.secondary" sx={{ fontWeight: 500 }}>
                О себе
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <BoxText text={data.description} />
            </Grid>
          </>
        )}
      </Grid>

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
        </Box>

        {pdfLink && (
          <Button
            onClick={onClickDownload}
            color="primary"
            sx={{
              textTransform: 'none',
              paddingX: '20px',
              paddingY: '10px',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '20px',
            }}
            variant="contained"
          >
            Скачать резюме
          </Button>
        )}
      </CardActionsResume>
    </Card>
  );
};

export default CardFull;
