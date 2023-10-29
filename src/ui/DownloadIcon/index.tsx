import { SvgIcon } from '@mui/material';

const DownloadIcon = () => {
  return (
    <SvgIcon
      sx={{
        width: '44px',
        height: '44px',
        padding: '10px',
      }}
    >
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 14a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 1 0-2 0v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1zm-9.71 1.71a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l4-4a1.004 1.004 0 1 0-1.42-1.42L13 12.59V3a1 1 0 0 0-2 0v9.59l-2.29-2.3a1.005 1.005 0 0 0-1.714.71 1.004 1.004 0 0 0 .294.71l4 4z"
          fill="#616161"
        />
      </svg>
    </SvgIcon>
  );
};

export default DownloadIcon;
