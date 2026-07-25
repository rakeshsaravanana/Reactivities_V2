import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import Navbar from "./Navbar";
import { ActivityDashboard } from "../../features/activities/Dashboard/ActivityDashboard";
import { useActivities } from "../../lib/hooks/useActivities";

function App() {
  // This usestate is used for fetching activities and setting activities.
  //Commneting this becoz proceeding with ReactQuery
  //const [activities, setActivities] = useState<Activity[]>([]);

  // Getting the data from API using usequery.
  const { activities, isPending } = useActivities();
  // This usestate is used when activity is selected.If give cancel it will gone.
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  // This usestate is used for form when selecting form buttn
  const [editMode, setEditMode] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get<Activity[]>("https://localhost:5001/api/activities")
  //     .then((response) => setActivities(response.data));

  //   // When main.tsx have strictmode - useeffect run twice
  //   return () => {};
  // }, []);

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities?.find((x) => x.id === id));
    console.log(id);
  };

  const handleCancelSelectedActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectedActivity(id);
    else handleCancelSelectedActivity();

    setEditMode(true);
    console.log("Clicked OPEN FORM");
  };

  const handleCloseForm = () => {
    setEditMode(false);
  };


  return (
    <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh" }}>
      <CssBaseline />
      <Navbar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {!activities || isPending ? (
          <Typography fontSize={25}>Loading...</Typography>
        ) : (
          <ActivityDashboard
            activities={activities}
            selectActivity={handleSelectedActivity}
            CancelSelectActivity={handleCancelSelectedActivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            OpenForm={handleOpenForm}
            CloseForm={handleCloseForm}
            
          />
        )}
      </Container>
    </Box>
  );
}

export default App;
