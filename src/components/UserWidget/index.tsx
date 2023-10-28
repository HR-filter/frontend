import { Avatar, Card, CardHeader } from '@mui/material';
import avatarPath from '../../assets/images/demoUserAvatar.jpeg';

const user: { [key: string]: string } = {
  name: 'Мария',
  avatar: avatarPath,
};

const UserWidget = () => {
  return (
    <Card sx={{ minWidth: '146px', borderRadius: '8px', mt: '20px' }}>
      <CardHeader
        sx={{
          p: '10px',
        }}
        titleTypographyProps={{ fontSize: '14px' }}
        avatar={<Avatar alt={user.name} src={user.avatar} sx={{ m: 0 }} />}
        title={user.name}
      />
    </Card>
  );
};

export default UserWidget;
