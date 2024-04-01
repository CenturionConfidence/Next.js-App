import Image from "next/image";


export default function Home() {
  return (
    <>
    <Image alt="Logo" src="" className="items-center"/>
    <div className="w-full pt-20">
    <h1 className="font-bold w-full text-center">Sign in to your account</h1>
    <form class="flex flex-col space-y-3 pt-10 m-auto w-full md:w-1/5">
      <label for="name" class="text-sm font-medium">Username</label>
      <input type="text" id="name" name="name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-50 px-3 py-2 border border-gray-300" required />
      <label for="email" class="text-sm font-medium">Password</label>
      <input type="email" id="email" name="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-50 px-3 py-2 border border-gray-300" required />
      <button type="submit" class="padding-top-20  px-4 py-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-700 w-50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Sign in
      </button>
      <p className="text-center font-10 pt-7">Not a member? <a href="./signup.js" className="text-indigo-500 hover:text-indigo-700">sign up</a></p>
    </form>
    </div>


    </>
  );
}
