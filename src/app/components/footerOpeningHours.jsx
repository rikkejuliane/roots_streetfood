export default function FooterOpeningHours() {
  return (
    <div className="mt-1 text-background py-2.5">
      <h3 className="mb-1 text-[18px] font-cormorant font-semibold">
        SUMMER OPENING HOURS
      </h3>
      <div className="flex flex-col justify-center items-center">
        <p className="text-[18px] font-semibold font-montserrat">
          16
          <span className="align-super text-[10px] tracking-wide px-[2px]">
            PM
          </span>{" "}
          - 00
          <span className="align-super text-[10px] tracking-wide px-[2px]">
            AM
          </span>
        </p>
        <p className="font-montserrat font-bold text-[8px]">MON - SUN</p>
      </div>
    </div>
  );
}
