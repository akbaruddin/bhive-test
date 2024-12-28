/* eslint-disable @next/next/no-img-element */
export default function MoboLinks() {
  return (
    <div className="pt-20 md:pt-40 max-w-7xl mx-auto px-4 lg:px-0">
      <h3 className="text-[#605F5F] text-2xl md:text-4xl font-bold md:mt-10 md:ml-11">
        Download our app now
      </h3>
      <div className="border border-[#EEE7E7CC] mt-5 md:mt-[240px] p-3 rounded-lg bg-white shadow-md relative md:flex justify-between items-center">
        <div className="md:max-w-[450px] lg:max-w-[600px] md:min-h-[200px] w-full">
          <img
            src="/mobo.png"
            alt="mobo"
            className="md:absolute md:-top-[174px] md:left-10"
          />
        </div>
        <div className="flex-1 md:pr-16">
          <p className="text-[#605F5F] text-xl font-medium md:block hidden">
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </p>
          <div className="flex items-center gap-6 mt-5">
            <a href="https://play.google.com/store/apps/details?id=com.bhive.workspace&hl=en"><img src="/playstore.png" alt="Play store" /></a>
            <a href="https://apps.apple.com/in/app/bhive-workspace/id6463923684"><img src="/appstore.png" alt="App store" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
