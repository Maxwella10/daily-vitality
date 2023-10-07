import { useIdealWeight } from '../../utils/use-ideal-weight';
import { useProfile } from '../../utils/use-profile';

export function IdealWeight() {
  const [profile] = useProfile();
  const { idealWeight, isLoading, isError, isSuccess, error } = useIdealWeight({
    gender: profile.gender,
    height: profile.height,
  });
  return (
    <div className="mt-4 pt-3 d-inline-block border-top">
      <>
        {isLoading ? (
          <p>Loading Ideal Weight Info...</p>
        ) : isError ? (
          <p>Error: {error.message}</p>
        ) : isSuccess ? (
          <>
            <h6>Based on The Robinson Formula:</h6>
            <p>
              <strong>Your Ideal Weight:</strong>{' '}
              {Math.floor(idealWeight.Robinson)} kg
            </p>
          </>
        ) : null}
      </>
    </div>
  );
}
