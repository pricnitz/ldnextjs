function Hero() {
  return (
    <div className="bg-black">
      <video
        src="/assets/banners/v-main.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[770px] object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Hero;
