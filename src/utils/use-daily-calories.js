import { useQuery } from '@tanstack/react-query';
import { fitnessCalculatorApi } from './fitness-calculator-api';

export function useDailyCalories({
  weight,
  height,
  age,
  gender,
  activitylevel,
}) {
  const result = useQuery({
    queryKey: ['dailycalorie'],
    queryFn: () =>
      fitnessCalculatorApi('/dailycalorie', {
        params: { weight, height, age, gender, activitylevel },
      }),
    enabled: Boolean(weight && height && age && gender && activitylevel),
  });

  return { ...result, dailyCalories: result.data?.data ?? null };
}
