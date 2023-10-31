import { FC } from 'react';
import { Badge, Avatar } from '@mui/material';
import trophyIconPath from '../../assets/images/icons/trophy.png';

const AvatarResume: FC<{
  name: string;
  imagePath: string;
  badgeCount: number;
  withBadge: boolean;
  size: number;
}> = ({ name, imagePath, badgeCount, size, withBadge }) => {
  return (
    <Badge
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeContent={
        badgeCount > 0 &&
        withBadge && (
          <Badge
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <Avatar
                sx={{
                  width: '15px',
                  height: '15px',
                  fontSize: `11px`,
                  color: '#B5B5B7',
                  backgroundColor: '#FFFFFF',
                  transform: 'translate(-18px, -18px)',
                }}
                alt={`Количество дополнительных достижений у кандидата: ${badgeCount}`}
              >
                {badgeCount}
              </Avatar>
            }
          >
            <Avatar
              sx={{
                width: '32px',
                height: '32px',
                fontSize: `11px`,
                color: '#B5B5B7',
                backgroundColor: '#FFFFFF',
                transform: 'translate(-12px, -12px)',
              }}
            >
              <Avatar
                sx={{
                  width: '16px',
                  height: '16px',
                }}
                src={trophyIconPath}
                alt="Иконка трофея, обозначающая наличие у кандидата дополнительных достижений"
              />
            </Avatar>
          </Badge>
        )
      }
    >
      <Avatar
        sx={{ borderRadius: '12px', width: `${size}px`, height: `${size}px` }}
        alt={name}
        src={imagePath}
      />
    </Badge>
  );
};

export default AvatarResume;
