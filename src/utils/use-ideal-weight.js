import { useQuery } from '@tanstack/react-query';
import { fitnessCalculatorApi } from './fitness-calculator-api';

export function useIdealWeight({ height, gender }) {
  const result = useQuery({
    queryKey: ['idealweight'],
    queryFn: () =>
      fitnessCalculatorApi('/idealweight', {
        params: { height, gender },
      }),
    enabled: Boolean(height && gender),
  });

  return { ...result, idealWeight: result.data?.data ?? null };
}
