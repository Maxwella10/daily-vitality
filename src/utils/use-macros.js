import { useQuery } from '@tanstack/react-query';
import { fitnessCalculatorApi } from './fitness-calculator-api';

export function useMacros({
  weight,
  height,
  age,
  gender,
  activitylevel,
  goal,
}) {
  const result = useQuery({
    queryKey: ['macrocalculator'],
    queryFn: () =>
      fitnessCalculatorApi('/macrocalculator', {
        params: { weight, height, age, gender, activitylevel, goal },
      }),
    enabled: Boolean(
      weight && height && age && gender && activitylevel && goal,
    ),
  });

  return { ...result, macros: result.data?.data ?? null };
}
