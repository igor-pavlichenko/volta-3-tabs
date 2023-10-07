import { Alert, Typography } from '@mui/joy';
import { formatDistanceToNowStrict } from 'date-fns';

type Props = {
  date: string;
};

const NextMaintenance = ({ date }: Props) => {
  return (
    <Alert color="primary" sx={{ width: '100%', gap: 0.5 }}>
      <Typography level="body-md">Next maintenance in</Typography>
      <Typography level="body-md">
        {formatDistanceToNowStrict(new Date(date))}
      </Typography>
      <Typography>- {new Date(date).toDateString()}</Typography>
    </Alert>
  );
};

export default NextMaintenance;
