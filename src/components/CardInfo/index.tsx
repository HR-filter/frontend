/* eslint-disable @typescript-eslint/no-explicit-any */
import Grid from '@mui/material/Grid';
import {
  List,
  ListItem,
  Stack,
  Typography,
  Box,
  Chip,
  Avatar,
} from '@mui/material';
import githubPath from '../../assets/images/icons/github-min.svg';
import behancePath from '../../assets/images/icons/behance-min.svg';
import notionPath from '../../assets/images/icons/notion-min.svg';
import figmaPath from '../../assets/images/icons/figma-min.svg';
import dotPath from '../../assets/images/icons/dot.svg';
import demoUserData from '../../assets/data/demoUser';

const typeNames: any = {
  experience: 'Опыт',
  courses: 'Курсы',
  portfolio: 'Портфолио',
  projects: 'Проекты',
  skills: 'Навыки',
  languages: 'Языки',
  education: 'Образование',
  about: 'О себе',
};

const serviceIcons: any = {
  github: githubPath,
  notion: notionPath,
  behance: behancePath,
  figma: figmaPath,
};

function renderSwitch(data: any) {
  switch (data.type) {
    case 'experience':
      return data.content.map((content: any) => {
        return (
          <Box>
            <Typography sx={{ display: 'inline' }}>
              {content.dateStart} — {content.dateEnd}
            </Typography>
            <Typography color="text.secondary">{content.duration}</Typography>
            <Typography>{content.name}</Typography>
            <Typography>{content.job}</Typography>
            <List dense sx={{ listStyleType: 'disc', pl: 5 }}>
              {content.duties.map((duty: any) => (
                <ListItem sx={{ display: 'list-item', p: 0 }}>
                  <Typography>{duty}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        );
      });
    case 'courses':
      return data.content.map((content: any) => {
        return (
          <Box>
            <Typography>{content}</Typography>
          </Box>
        );
      });
    case 'portfolio':
      return (
        <Stack direction="row" spacing={2}>
          {data.content.map((content: any) => {
            return (
              <Chip
                avatar={
                  <Avatar alt={content.type} src={serviceIcons[content.type]} />
                }
                component="a"
                href={content.link}
                label={content.type}
                variant="filled"
                sx={{
                  boxShadow: 1,
                  borderRadius: 2,
                  backgroundColor: 'primary.light',
                }}
                clickable
              />
            );
          })}
        </Stack>
      );
    case 'projects':
      return (
        <Box>
          {data.content.map((content: any) => {
            return (
              <Box>
                <Typography sx={{ textDecoration: 'underline' }}>
                  {content.name}
                </Typography>
                <Typography>{content.description}</Typography>
              </Box>
            );
          })}
        </Box>
      );
    case 'skills':
      return (
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
          {data.content.map((content: any) => {
            return (
              <Chip
                icon={<Avatar sx={{ height: 6, width: 6 }} src={dotPath} />}
                label={content}
                variant="filled"
                sx={{
                  boxShadow: 1,
                  backgroundColor: 'primary.light',
                  borderRadius: 1,
                  height: 24,
                }}
              />
            );
          })}
        </Stack>
      );
    case 'languages':
      return (
        <Box>
          {data.content.map((content: any) => {
            return (
              <Typography>{content.name + ' ' + content.grade}</Typography>
            );
          })}
        </Box>
      );
    case 'education':
      return data.content.map((content: any) => {
        return (
          <Box>
            <Typography sx={{ display: 'inline' }}>
              {content.name} — {content.specialization}
            </Typography>
            <Typography color="text.secondary">{content.grade}</Typography>
          </Box>
        );
      });
    case 'about':
      return (
        <Box>
          <Typography>{data.content}</Typography>
        </Box>
      );

    default:
      return;
  }
}

const CardInfo = () => {
  return (
    <Grid container spacing={11}>
      {demoUserData.map((row) => (
        <>
          <Grid item xs={3}>
            <Typography
              color="text.secondary"
              sx={{
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '20px',
              }}
            >
              {typeNames[row.type]}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            {renderSwitch(row)}
          </Grid>
        </>
      ))}
    </Grid>
  );
};

export default CardInfo;
