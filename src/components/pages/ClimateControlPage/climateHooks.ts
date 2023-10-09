import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  ClimateControlInteractionData,
  ClimateControlInteractionLog,
} from '~/app/api/climate-control/logs/route';

const endpoint = '/api/climate-control/logs';

export function useAddClimateControlLog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body: ClimateControlInteractionData) => {
      return (
        await fetch(endpoint, {
          method: 'POST',
          body: JSON.stringify(body),
        })
      ).json() as Promise<ClimateControlInteractionLog>;
    },
    onSuccess: (response, sentBody) => {
      // Optimistically update to the new value
      queryClient.setQueryData(
        [endpoint],
        (oldLogs: Array<ClimateControlInteractionLog> | undefined) => [
          response,
          ...(oldLogs ?? []),
        ],
      );
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries([endpoint]);
    },
  });
}

export function useGetClimateControlLogs() {
  return useQuery<Array<ClimateControlInteractionLog>>({
    queryKey: [endpoint],
    queryFn: async () => (await fetch(endpoint)).json(),
  });
}
