import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { TelematicsLog } from '~/app/api/telematics/route';
import { TelematicsData } from '~/utils';

const endpoint = '/api/telematics';

export function useAddTelematicsLog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body: TelematicsData) => {
      return (
        await fetch(endpoint, {
          method: 'POST',
          body: JSON.stringify(body),
        })
      ).json() as Promise<TelematicsLog>;
    },
    onSuccess: (response, sentBody) => {
      // Optimistically update to the new value
      queryClient.setQueryData(
        [endpoint],
        (oldLogs: Array<TelematicsLog> | undefined) => [
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

export function useGetTelematicsLogs() {
  return useQuery<Array<TelematicsLog>>({
    queryKey: [endpoint],
    queryFn: async () => (await fetch(endpoint)).json(),
  });
}
