import { FC } from 'react';
import { Chip, Avatar } from '@mui/material';
import githubPath from '../../assets/images/icons/github-min.svg';
import behancePath from '../../assets/images/icons/behance-min.svg';
import notionPath from '../../assets/images/icons/notion-min.svg';
import figmaPath from '../../assets/images/icons/figma-min.svg';

const ChipPortfolio: FC<{ link: string }> = ({ link }) => {
  const name = extractDomainName(link);

  const serviceIcons: {
    [key: string]: string;
  } = {
    Github: githubPath,
    Notion: notionPath,
    Behance: behancePath,
    Figma: figmaPath,
  };

  function extractDomainName(url: string | undefined): string {
    if (url) {
      // eslint-disable-next-line no-useless-escape
      const match = url.match(/^(?:https?:)?(?:\/\/)?(?:w{3}\.)?([^\/\?]+)\./i);
      const domainName = match && match[1];
      return domainName
        ? domainName.charAt(0).toUpperCase() + domainName.slice(1)
        : '' || '';
    }
    return '';
  }

  return (
    <Chip
      avatar={<Avatar alt={name} src={serviceIcons[name]} />}
      component="a"
      href={link}
      label={name}
      variant="filled"
      sx={{
        boxShadow: 1,
        borderRadius: 2,
        backgroundColor: 'primary.light',
        fontSize: '14px',
      }}
      clickable
    />
  );
};

export default ChipPortfolio;
