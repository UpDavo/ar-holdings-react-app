export const ProgressComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-1">
        <progress className="progress w-56 progress-primary"></progress>
      </div>
      <div className="mt-1 mb-4">
        <h3>Cargando...</h3>
      </div>
    </div>
  );
};
