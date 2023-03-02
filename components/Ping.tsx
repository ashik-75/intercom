function Ping() {
  return (
    <div className="relative h-2 w-2 flex items-center justify-center">
      <div className="absolute h-5 w-5 animate-ping rounded-full bg-sky-400"></div>
      <div className="relative h-full w-full rounded-full bg-sky-500"></div>
    </div>
  );
}

export default Ping;
