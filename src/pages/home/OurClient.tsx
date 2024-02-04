const OurClient = () => {
  return (
    <div className="bg-neutral-50 pt-16 pb-32">
      <h1 className="text-4xl md:text-6xl mx-auto font-roboto font-extrabold capitalize w-96 md:w-[556px] pb-16">
        Our Valuable client
      </h1>
      <div className="grid grid-cols-4 md:grid-cols-6  lg:grid-cols-10 gap-y-20 justify-items-center">
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/adobe.png" />
        </div>
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/amazon.png" />
        </div>
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/asana.png" />
        </div>
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/evernote.png" />
        </div>
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/google.png" />
        </div>
        <div className=" col-span-2 w-36">
          <img src="/assets/our_client/microsoft.png" />
        </div>
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/paypal.png" />
        </div>
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/shopify.png" />
        </div>
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/uber.png" />
        </div>
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/spotify.png" />
        </div>
      </div>
    </div>
  );
};

export default OurClient;
