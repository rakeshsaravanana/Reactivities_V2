import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../Details/ActivityDetail";
import ActivityForm from "../Form/ActivityForm";
type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
  CancelSelectActivity: () => void;
  selectedActivity?: Activity;
  OpenForm: (id?: string) => void;
  CloseForm: () => void;
  editMode: boolean;
 
};

export const ActivityDashboard = ({
  activities,
  selectActivity,
  CancelSelectActivity,
  selectedActivity,
  OpenForm,
  CloseForm,
  editMode
}: Props) => {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList activities={activities} 
        selectActivity={selectActivity}
       />
      </Grid>

      <Grid size={5}>
        {selectedActivity && !editMode && (
          <ActivityDetail
            selectedActivity={selectedActivity}
            CancelSelectActivity={CancelSelectActivity}
            OpenForm={OpenForm}
          />
        )}

        {editMode && (
          <ActivityForm
            CloseForm={CloseForm}
            activity={selectedActivity}
          />
        )}
      </Grid>
    </Grid>
  );
};
