import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 
const Paginate=({active,setActive})=> {
 
  const next = () => {
    if (active === 10) return;
 
    setActive(active + 1);
    window.scrollTo({ top: 0 });
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
    window.scrollTo({ top: 0});
  };
 
  return (
    <div className="flex text-white justify-center items-center gap-8">
      <IconButton
        size="sm"
     
        onClick={prev}
        className={`text-white border ${active === 1?"opacity-40":""}`}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-white">{active}</strong> of{" "}
        <strong className="text-white">10</strong>
      </Typography>
      <IconButton
      className={`text-white border ${active === 10?"opacity-40":""}`}
        size="sm"
        onClick={next}
        disabled={active === 10}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
}

export{
    Paginate
}