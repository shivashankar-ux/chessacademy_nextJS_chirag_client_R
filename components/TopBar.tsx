export default function TopBar() {
  const content = (
    <>
      <span className="mx-8">📞 Call us now: 9810436745, 8800840353</span>
      <span className="mx-8">♔ Enroll in our upcoming batches!</span>
      <span className="mx-8">📞 Call us now: 9810436745, 8800840353</span>
      <span className="mx-8">♔ Join Check vs Mate Chess Academy today!</span>
    </>
  );

  return (
    <div className="bg-[#1A0A0A] text-[#C9A84C] py-2 text-sm font-body font-semibold tracking-wide overflow-hidden flex border-b border-white/10 w-full relative">
      <div className="flex animate-marquee shrink-0 whitespace-nowrap">
        {content}
      </div>
      <div className="flex animate-marquee shrink-0 whitespace-nowrap" aria-hidden="true">
        {content}
      </div>
      <div className="flex animate-marquee shrink-0 whitespace-nowrap" aria-hidden="true">
        {content}
      </div>
    </div>
  );
}
