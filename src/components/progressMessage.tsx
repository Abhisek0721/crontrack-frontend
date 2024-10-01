export const ProgressMessage = ({
  message,
  className,
}: {
  message: string;
  className: string;
}) => {
  return (
    <>
      <div
        className={`w-full bg-primary ${className} text-center py-2 px-2 text-white text-sm md:text-base lg:text-md`}
      >
        {message}
      </div>
    </>
  );
};
