import { useProfile } from '../../utils/use-profile';
import { goals } from '../../utils/Constants';
import { useDailyCalories } from '../../utils/use-daily-calories';
import { IdealWeight } from '../IdealWeightCard';
import { NotFound } from '../NotFound';

import './style.css';

export function DailyCaloriesCard() {
  const [profile] = useProfile();
  const { dailyCalories, isLoading, isError, isSuccess, error } =
    useDailyCalories({
      age: profile.age,
      gender: profile.gender,
      weight: profile.weight,
      height: profile.height,
      activitylevel: profile.activitylevel,
    });
  const goalVal = goals[profile.goal];
  return (
    <div className="card rounded-5 shadow">
      <div className="card-body text-center">
        <h2>Calories Requirement</h2>
        {profile.age === '' &&
        profile.weight === '' &&
        profile.height === '' ? (
          <>
            <NotFound
              title="Opps! No Profile Data"
              text="We didn't find you in our database. Please create a profile to get started."
              href="/profile"
              hrefText="Create Profile"
            />
          </>
        ) : (
          <>
            {isLoading ? (
              <p>Loading Calories Requirement Info...</p>
            ) : isError ? (
              <p>Error: {error.message}</p>
            ) : isSuccess ? (
              <>
                <p>
                  <strong>Basal Metabolic Rate:</strong> {dailyCalories.BMR}
                </p>

                <p>
                  Based on your activity level, here are your daily calories to
                  achieve your goal weight.
                </p>
                {Object.entries(dailyCalories.goals)
                  .filter(([goal]) => goal === goalVal)
                  .map(([goal, data]) => (
                    <div key={goal}>
                      {typeof data === 'object' ? (
                        <div>
                          {Object.entries(data).map(([key, value]) => {
                            return (
                              <div key={key}>
                                <div>
                                  {key === 'calory' ? (
                                    <div className="border bg-light d-inline-block px-2 py-2 bg-gradient-grass-1">
                                      <div>{Math.floor(value)}</div>
                                      <div>Calories / Day</div>
                                    </div>
                                  ) : (
                                    <>
                                      <div className="border bg-gradient-grass px-4 py-2 rounded-5 d-inline-block">
                                        <div>{goalVal}</div>
                                        <div>{value} / Week</div>
                                      </div>
                                    </>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <p>
                          <div className="border bg-gradient-grass px-4 py-2 rounded-5 d-inline-block">
                            Maintain Weight
                          </div>
                          <div className="border bg-light d-inline-block px-2 py-2 bg-gradient-grass-1">
                            <div>{Math.floor(data)}</div>
                            <div>Calories / Day</div>
                          </div>
                        </p>
                      )}
                    </div>
                  ))}
                <IdealWeight />
              </>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
