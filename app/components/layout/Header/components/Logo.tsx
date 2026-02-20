export const Logo = () => {
  return (
    <div className="flex items-center gap-1 relative w-[520px]">
      <div className="flex flex-col items-center relative">
        <span className="font-body text-logo leading-logo">Juliette Bereziy</span>
        <span className="font-body text-[130px] absolute left-[240px] top-[-55px]">JB</span>
        <span className="font-artist text-[50px] absolute top-[50px]">fine artist</span>
      </div>
      <span className="font-body text-[130px] absolute left-[240px] top-[-55px]">JB</span>
      <span className="font-artist absolute left-[360px] text-[70px] top-[3px]">Atelier</span>
    </div>
  );
};
