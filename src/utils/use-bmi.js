import { useQuery } from '@tanstack/react-query';
import { fitnessCalculatorApi } from './fitness-calculator-api';

export function useBmi({ weight, height, age }) {
  const result = useQuery({
    queryKey: ['bmi'],
    queryFn: () =>
      fitnessCalculatorApi('/bmi', {
        params: { weight, height, age },
      }),
    enabled: Boolean(weight && height && age),
  });

  return { ...result, bmi: result.data?.data ?? null };
}
