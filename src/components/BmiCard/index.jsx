import GaugeChart from 'react-gauge-chart';

import { useBmi } from '../../utils/use-bmi';
import { useProfile } from '../../utils/use-profile';
import bmiChart from '../../assets/images/bmiChart.jpg';

export function BmiCard() {
  const [profile] = useProfile();

  const { bmi, isLoading, isError, isSuccess, error } = useBmi({
    age: profile.age,
    weight: profile.weight,
    height: profile.height,
  });
  const bmiValue = isSuccess ? bmi.bmi : 0;
  const result =
    bmiValue >= 40
      ? 0.9
      : bmiValue > 30 && bmiValue < 40
      ? 0.7
      : bmiValue >= 25 && bmiValue <= 30
      ? 0.5
      : bmiValue >= 18 && bmiValue < 25
      ? 0.3
      : bmiValue < 18
      ? 0.1
      : 0;
  return (
    <div className="card rounded-5 shadow">
      <div className="card-body text-center">
        <h2>BMI Data</h2>
        <div id="bmiChart" className="my-3">
          <img
            src={bmiChart}
            className="rounded-3 object-fit-cover"
            width="300"
            style={{ maxWidth: '100%' }}
          />
        </div>
        {profile.age === '' &&
        profile.weight === '' &&
        profile.height === '' ? (
          <>
            {/* TODO: Create a NotFoundCard component */}
            <p>No BMI Data</p>
            <p>
              <a href="/profile">Create a Profile</a> to get BMI Data
            </p>
          </>
        ) : (
          <>
            {isLoading ? (
              <p>Loading BMI Info...</p>
            ) : isError ? (
              <p>Error: {error.message}</p>
            ) : isSuccess ? (
              <>
                <p>
                  <strong>BMI:</strong> {bmi.bmi}
                </p>
                <p>
                  <strong>Health: </strong>
                  {bmi.health}
                </p>
                <p>
                  <strong>Healthy BMI Range: </strong>
                  {bmi.healthy_bmi_range}
                </p>
                <div className="chartCont" id="BMI-container">
                  <div className="card-body">
                    <GaugeChart
                      id="bmiChart"
                      nrOfLevels={5}
                      arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                      colors={[
                        '#0096FF',
                        '#008000',
                        '#FFFF00',
                        '#FFA500',
                        '#ff0000',
                      ]}
                      percent={result}
                      arcPadding={0.02}
                      arcWidth={0.3}
                      needleColor="#000000"
                      hidetext={false}
                      textColor="transparent"
                      animate={true}
                    />
                  </div>
                </div>
              </>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
