import { useLocalStorage } from '@uidotdev/usehooks';
import { Doughnut } from 'react-chartjs-2';

// eslint-disable-next-line react/prop-types
export function CaloriesTracker({ calorieGoal }) {
  const [mealCalories, setMealCalories] = useLocalStorage('mealCalories', {
    breakfast: 0,
    lunch: 0,
    dinner: 0,
    dessert: 0,
  });
  const [totalCaloriesPerDay, setTotalCaloriesPerDay] = useLocalStorage(
    'totalCalories',
    {
      day: '',
      total: 0,
    },
  );

  const calculateTotalCalories = () => {
    const parsedMealCalories = {
      breakfast: parseInt(mealCalories.breakfast || 0, 10),
      lunch: parseInt(mealCalories.lunch || 0, 10),
      dinner: parseInt(mealCalories.dinner || 0, 10),
      dessert: parseInt(mealCalories.dessert || 0, 10),
    };
    const total = Object.values(parsedMealCalories).reduce(
      (acc, val) => acc + val,
      0,
    );
    const currentDate = new Date().toLocaleDateString();
    setTotalCaloriesPerDay({ day: currentDate, total });
  };
  const remainingCalories = calorieGoal - totalCaloriesPerDay.total;
  const displayRemainingCalories =
    remainingCalories < 0 ? 0 : remainingCalories;
  const data = {
    labels: ['Calories Consumed', 'Calories Left'],
    datasets: [
      {
        label: '# of Calories',
        data: [totalCaloriesPerDay.total, displayRemainingCalories],
        //data: [3100, 1100],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="row my-5">
      <div className="col-lg-6  d-flex align-items-center">
        <div className="card-body px-5 divider pb-5 pb-lg-0">
          <h3>Calories Tracker</h3>
          <h6 className="mb-3 text-secondary">
            Date: {totalCaloriesPerDay.day}
          </h6>
          <div className="d-flex align-items-center column-gap-2">
            <label className="text-nowrap">Breakfast:</label>
            <input
              type="number"
              className="form-control"
              required
              value={mealCalories.breakfast}
              onChange={e =>
                setMealCalories({
                  ...mealCalories,
                  breakfast: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-2 d-flex align-items-center column-gap-2">
            <label className="text-nowrap">Lunch</label>
            <input
              type="number"
              required
              className="form-control"
              value={mealCalories.lunch}
              onChange={e =>
                setMealCalories({
                  ...mealCalories,
                  lunch: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-2 d-flex align-items-center column-gap-2">
            <label className="text-nowrap">Dinner</label>
            <input
              type="number"
              required
              className="form-control"
              value={mealCalories.dinner}
              onChange={e =>
                setMealCalories({
                  ...mealCalories,
                  dinner: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-2 d-flex align-items-center column-gap-2">
            <label className="text-nowrap">Dessert</label>
            <input
              type="number"
              required
              className="form-control"
              value={mealCalories.dessert}
              onChange={e =>
                setMealCalories({
                  ...mealCalories,
                  dessert: e.target.value,
                })
              }
            />
          </div>
          {totalCaloriesPerDay.total > 0 && (
            <div className="mt-3">
              <p>
                <strong>Calorie Goal:</strong> {Math.floor(calorieGoal)}
              </p>
              <p>
                <strong>Total Calories Consumed:</strong>{' '}
                {totalCaloriesPerDay.total}
              </p>
              <p>
                <strong>Remaining Calories:</strong>{' '}
                {Math.floor(remainingCalories)}
              </p>
              {remainingCalories < 0 ? <p>Calorie Goal Exceeded</p> : null}
            </div>
          )}
          <div className="d-flex justify-content-end">
            <button className="btn btn-orange" onClick={calculateTotalCalories}>
              Calculate Total Calories
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card-body px-5 d-flex justify-content-center align-items-center">
          <Doughnut data={data} />
          {remainingCalories < 0 ? (
            <p>Calorie Goal Exceeded</p>
          ) : (
            <p>Calorie Goal Remaining</p>
          )}
        </div>
      </div>
    </div>
  );

  // generateChart(totalCaloriesPerDay.total,remainingCalories);
}
