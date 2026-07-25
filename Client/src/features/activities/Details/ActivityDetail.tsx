import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
  selectedActivity: Activity;
  CancelSelectActivity: () => void;
  OpenForm: (id: string) => void;
};

export default function ActivityDetail({
  selectedActivity,
  CancelSelectActivity,
  OpenForm,
}: Props) {
  const { activities } = useActivities();
  const activity = activities?.find((x) => x.id === selectedActivity.id);
  if (!activity) return <Typography>Loading...</Typography>;
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1" fontWeight="light">
          {activity.date}
        </Typography>

        <Typography variant="body2">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={() => OpenForm(activity.id)}>
          Edit
        </Button>
        <Button onClick={CancelSelectActivity} color="inherit">
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
