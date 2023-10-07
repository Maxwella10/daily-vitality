import { Home, GaugeCircle, UserCircle2 } from 'lucide-react';

export const activityLevels = {
  level_1: 'Sedentary: little or no exercise',
  level_2: 'Exercise 1-3 times/week',
  level_3: 'Exercise 4-5 times/week',
  level_4: 'Daily exercise or intense exercise 3-4 times/week',
  level_5: 'Intense exercise 6-7 times/week',
  level_6: 'Very intense exercise daily, or physical job',
};
export const goals = {
  maintain: 'maintain weight',
  mildlose: 'Mild weight loss',
  weightlose: 'Weight loss',
  extremelose: 'Extreme weight loss',
  mildgain: 'Mild weight gain',
  weightgain: 'Weight gain',
  extremegain: 'Extreme weight gain',
};

export const navigation = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'Analytics', to: '/dashboard', icon: GaugeCircle },
  { label: 'Profile', to: '/profile', icon: UserCircle2 },
];
