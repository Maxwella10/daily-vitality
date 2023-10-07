import { useLocalStorage } from '@uidotdev/usehooks';

export function useProfile() {
  return useLocalStorage('userProfile', {
    name: '',
    gender: 'male',
    age: '',
    height: '',
    weight: '',
    activitylevel: 'level_1',
    goal: 'maintain',
  });
}
