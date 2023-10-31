import { useSelector } from 'react-redux';
import { Avatar, Card, CardHeader } from '@mui/material';
import { RootState } from '../../app/store/index';

const UserWidget: React.FC = () => {
  const avatar = useSelector((state: RootState) => state.user.avatar);
  const name = useSelector((state: RootState) => state.user.name);

  return (
    <Card sx={{ minWidth: '146px', borderRadius: '8px', mt: '20px' }}>
      <CardHeader
        sx={{
          p: '10px',
        }}
        titleTypographyProps={{ fontSize: '14px' }}
        avatar={<Avatar alt={name} src={avatar} sx={{ m: 0 }} />}
        title={name}
      />
    </Card>
  );
};

export default UserWidget;
