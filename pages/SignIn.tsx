const SignIn = () => {
  return (
    <>
      <div className=" bodybgcolor h-[100vh] flex flex-col items-center pt-40 gap-6 lg:flex-row lg:justify-center lg:pt-0 lg:gap-52 ">
        <div>
          <h1 className=" text-5xl font-bold textcolor mb-4">Sign Up</h1>
          <h1 className=" w-60 lg:w-96 lg:text-xl">
            Facebook helps you connect and share with the people in your life
          </h1>
        </div>

        <div className=" p-6 shadow-xl flex flex-col gap-4 bg-white rounded">
          <input
            type="text"
            placeholder="Email address or phone number"
            className=" p-2 w-72 border-2 rounded"
          />
          <input
            type="text"
            placeholder="Password"
            className=" p-2 w-72 border-2 rounded"
          />
          <button className="btnbg py-2 rounded text-white text-xl">
            Log in
          </button>
          <p className=" text-center textcolor cursor-pointer">
            Forgotten password?
          </p>
          <hr />
          <button className=" bg-green-500 py-3 rounded text-white font-bold">
            Create New Account
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
