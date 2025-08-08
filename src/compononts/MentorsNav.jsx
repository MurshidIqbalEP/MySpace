const MentorsNav = () => {
  return (
    <div className="flex justify-center items-center p-5 border-b-4  border-gray-200 ">
      <div className=" h-[56px] w-[1120px] flex items-center justify-between">
        
        <div className="flex gap-2 items-end cursor-pointer">
            <img src="Vector.png" alt="logo" />
            <h1 className="text-black font-bold text-2xl">Sparkly</h1>
        </div>
        
        <div className="flex gap-9">
          <span className="text-lg font-light cursor-pointer">Home</span>
          <span className="text-lg font-light cursor-pointer">Aboute us</span>
          <span className="text-lg font-light cursor-pointer">Courses</span>
          <span className="text-lg font-light cursor-pointer">Mentors</span>
          <span className="text-lg font-light cursor-pointer">Blogs</span>
          <span className="text-lg font-light cursor-pointer">Contact us</span>
        </div>

        
        <button className="h-[56px] w-[173px] bg-[#5D38DE] text-white  rounded-4xl text-md cursor-pointer">Register now</button>
      </div>
    </div>
  );
};

export default MentorsNav;
