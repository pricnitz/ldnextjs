function Hero() {
  return (
    <div className="bg-black">
      <video src="/assets/banners/v-main.mp4" autoPlay loop muted playsInline className="w-full h-[770px] object-cover">
        <track src="/assets/captions/v-main-captions.vtt" kind="captions" srcLang="en" label="English" default/>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Hero;
