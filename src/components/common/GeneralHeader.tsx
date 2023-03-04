export const GeneralHeader = (props: any) => {
  return (
    <header className="flex items-center justify-between z-0">
      <h1 className="text-3xl font-bold">{props.title}</h1>
    </header>
  );
};
