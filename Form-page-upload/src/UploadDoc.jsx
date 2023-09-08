import React from "react";

const UploadDoc = () => {
  return (
    <div>
      <h2 className="w-[196px] text-amber-500 text-[22px] font-normal leading-7">
        Upload Documents
      </h2>
      <hr className="w-[20px]" />
      <h3 className="w-[323px] text-red-600 text-sm font-normal leading-7">
        Instruction for Uploading Image and Documents –
      </h3>

      <h4 className="w-[389px] text-red-600 text-[13px] font-normal leading-7">
        Photo and Documents are required in .jpg or .jpeg image format.
      </h4>

      <h4 className="w-[333px] text-red-600 text-sm font-normal leading-7">
        File size of photo must be within 10kb to 200kb limit.
      </h4>

      <h4 className="w-[351px] text-red-600 text-[13px] font-normal leading-7">
        File size of Documents must be within 600Kb to 2Mb limit.
      </h4>
    </div>
  );
};

export default UploadDoc;
