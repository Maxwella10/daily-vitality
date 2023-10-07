import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { useProfile } from '../../utils/use-profile';
import { useMacros } from '../../utils/use-macros';
import { CaloriesTracker } from '../CaloriesTracker';
import { NotFound } from '../NotFound';

import './style.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export function MacroCard() {
  const [profile] = useProfile();
  const [selectedDiet, setSelectedDiet] = useState('balanced');

  const level =
    profile && profile.activitylevel
      ? profile.activitylevel.charAt(profile.activitylevel.length - 1)
      : null;

  const { macros, isLoading, isError, isSuccess, error } = useMacros({
    age: profile.age,
    gender: profile.gender,
    weight: profile.weight,
    height: profile.height,
    activitylevel: level,
    goal: profile.goal,
  });
  const handleDietChange = event => {
    setSelectedDiet(event.target.value);
  };
  const displayedDataPoints = isSuccess
    ? [
        Math.floor(macros[selectedDiet].protein),
        Math.floor(macros[selectedDiet].fat),
        Math.floor(macros[selectedDiet].carbs),
      ]
    : [0, 0, 0];
  const displayedData = {
    labels: ['Proteins', 'Fats', 'Carbohydrates'],
    datasets: [
      {
        label: '% of Nutrients',
        data: displayedDataPoints,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      {profile.age === '' && profile.weight === '' && profile.height === '' ? (
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
          {' '}
          {isLoading ? (
            <p>Loading Daily Calories Requirement Info...</p>
          ) : isError ? (
            <p>Error: {error.message}</p>
          ) : isSuccess ? (
            <>
              <div className="card rounded-5 shadow mt-4">
                <div className="row my-5">
                  <div className="col-lg-6  d-flex align-items-center">
                    <div className="card-body px-5 divider pb-5 pb-lg-0">
                      <h2>Macronutrient Breakdown</h2>
                      <p>
                        Your Daily Calories Requirement is{' '}
                        <strong>{Math.floor(macros.calorie)}</strong> calories
                        per day.
                      </p>
                      <h5 className="border-bottom d-inline-block">
                        For a {''}
                        <span className="text-capitalize">
                          {selectedDiet}
                        </span>{' '}
                        Diet:
                      </h5>
                      <p>
                        <strong>Protein: </strong>
                        {Math.floor(macros[selectedDiet].protein)} gms
                      </p>
                      <p>
                        <strong>Fat: </strong>
                        {Math.floor(macros[selectedDiet].fat)} gms
                      </p>
                      <p>
                        <strong>Carbs: </strong>
                        {Math.floor(macros[selectedDiet].carbs)} gms
                      </p>
                      <div className="border-top pt-3">
                        <p>
                          If the {selectedDiet} diet is not for you, you can
                          choose from the following:
                        </p>
                        <div className="d-flex align-items-center column-gap-2">
                          <label htmlFor="diet" className="fw-bold text-nowrap">
                            Other Diets:
                          </label>{' '}
                          <select
                            className="form-select"
                            id="diet"
                            name="diet"
                            value={selectedDiet}
                            onChange={handleDietChange}
                          >
                            {Object.keys(macros)
                              .filter(diet => diet !== 'calorie')
                              .map(diet => (
                                <option key={diet} value={diet}>
                                  {diet}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6" id="Macro-container">
                    <div className="card-body px-5 d-flex justify-content-center align-items-center">
                      <Pie data={displayedData} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card rounded-5 shadow mt-4">
                <CaloriesTracker calorieGoal={macros.calorie} />
              </div>
            </>
          ) : null}
        </>
      )}
    </>
  );
}
