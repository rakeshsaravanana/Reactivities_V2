import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";

export const useActivities = () => {
  const queryCient = useQueryClient();
  // Using React Query for data fetching, catching, synchronizing and updating the server state.
  const { data: activities, isPending } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const response = await agent.get<Activity[]>("/activities");
      return response.data;
    },
  });

  // Doing mutation data while updating.
  const updateActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      await agent.put("/activities", activity);
    },
    onSuccess: async () => {
      await queryCient.invalidateQueries({
        queryKey: ["activities"],
      });
      //alert("Your Activity has been updated Successfully!");
    },
  });

  const createActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      await agent.post("/activities", activity);
    },
    onSuccess: async () => {
      await queryCient.invalidateQueries({
        queryKey: ["activities"],
      });
      //alert("Your Activity has been updated Successfully!");
    },
  });
  const deleteActivity = useMutation({
    mutationFn: async (id: string) => {
      await agent.delete(`/activities/${id}`);
    },
    onSuccess: async () => {
      await queryCient.invalidateQueries({
        queryKey: ["activities"],
      });
      //alert("Your Activity has been updated Successfully!");
    },
  });

  return {
    activities,
    isPending,
    updateActivity,
    createActivity,
    deleteActivity,
  };
};
