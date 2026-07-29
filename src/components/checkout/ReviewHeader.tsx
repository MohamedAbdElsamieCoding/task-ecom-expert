const ReviewHeader = () => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <p className="text-xs font-medium text-[#484848] uppercase">REVIEW</p>

      <div className="flex flex-col items-start justify-start gap-1.5">
        <h2 className="text-xl font-semibold text-[#28384F]">
          Your security system
        </h2>

        <p className="text-sm text-[#1F1F1FBF]/70">
          Review your personalized protection system designed to keep what
          matters most safe.
        </p>
      </div>
    </div>
  );
};

export default ReviewHeader;
