import React from "react";
import { useForm } from "react-hook-form";

const Chats = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div
      name="let's chats"
      className="px-4 md:h-screen h-full md:grid  items-center"
    >

<div>
<h3 className="text-4xl font-bold mb-5 text-[#ffc576]">Let’s Chat</h3>
<form className="md:w-11/12 mx-auto grid  md:grid-cols-2 gap-5 ">
<div className="grid gap-4">
<div className="w-full block">
          <input
            type="text"
            placeholder="Full Name"
            className="py-4 px-3 rounded-sm outline-none w-full bg-transparent text-white border-2 border-[#ffc576] "
            {...register("fullName")}
          />
        </div>
        <div className="w-full block">
          <input
            type="text"
            placeholder="Full Name"
            className="py-4 px-3 rounded-sm outline-none w-full bg-transparent text-white border-2 border-[#ffc576] "
            {...register("fullName")}
          />
        </div>
        <div className="w-full block">
          <input
            type="text"
            placeholder="Full Name"
            className="py-4 px-3 rounded-sm outline-none w-full bg-transparent text-white border-2 border-[#ffc576] "
            {...register("fullName")}
          />
        </div>
        <div className="w-full block">
          <input
            type="text"
            placeholder="Full Name"
            className="py-4 px-3 rounded-sm outline-none w-full bg-transparent text-white border-2 border-[#ffc576] "
            {...register("fullName")}
          />
        </div>
</div>
 
        <div className="grid gap-4">
        <div className="w-full block">
          <input
            type="text"
            placeholder="Full Name"
            className="py-4 px-3 rounded-sm outline-none w-full bg-transparent text-white border-2 border-[#ffc576] "
            {...register("fullName")}
          />
        </div>
          <div>
          <textarea
            className="p-4 rounded-sm outline-none w-full bg-transparent text-white border-2 border-[#ffc576] "
            placeholder="Message"
            name=""
            id=""
            cols="20"
            rows="8"
          >
            {" "}
          </textarea>
          </div>
        </div>
      </form>

      <button className=" bg-[#ffc576] text-black py-4 px-10 md:ms-12 mt-5"> Send Message</button>

</div>
    </div>
  );
};

export default Chats;
