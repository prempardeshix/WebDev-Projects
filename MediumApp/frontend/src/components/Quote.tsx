import React from "react";

function Quote() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center flex-col">
      <div className="flex justify-center ">
        <div className="max-w-xl">
          <div className=" text-2xl font-bold">
            "The customer support I received was exceptional. The customer team
            went above and beyond to address my concerns."{" "}
          </div>

          <div className="text-md max-w-md font-bold mt-3">Jules Winnfield</div>
          <div className="text-sm max-w-md text-slate-600">CEO | Acme Inc</div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
