import React from "react";

const DropDown = ({ name, optionOne, optionTwo, optionThree }) => {
  return (
    <div className="w-2/3 md:w-full lg:w-full flex justify-center flex-col items-center">
      <div className="label-text font-Inter text-biruAltera my-2 lg:self-start  lg:self-start  md:pl-3">{name}</div>
      <select defaultValue={optionOne} className="select select-bordered w-full max-w-md focus:outline-none bg-abuAltera focus:border-biruAltera focus:ring-1 focus:ring-biruAltera">
        <option disabled selected className="text-biruAltera">
          <span className="text-biruAltera">Choose Your Choice</span>
        </option>
        <option selected className="text-biruAltera font-Inter h-16">
          {optionOne}
        </option>
        <option className="text-biruAltera font-Inter">{optionTwo}</option>
        <option className="text-biruAltera font-Inter">{optionThree}</option>
      </select>
    </div>
  );
};

const DropDownTwo = ({ onChange, name, optionOne, optionTwo }) => {
  return (
    <div className="w-2/3 md:w-full lg:w-full flex justify-center flex-col  items-center">
      <div className="label-text font-Inter text-biruAltera lg:self-start lg:self-start  my-2  md:pl-3">{name}</div>
      <select onChange={onChange} className="select select-bordered w-full max-w-md focus:outline-none bg-abuAltera focus:border-biruAltera focus:ring-1 focus:ring-biruAltera ">
        <option disabled selected className="text-biruAltera">
          <span className="text-biruAltera">Choose Your Choice</span>
        </option>
        <option className="text-biruAltera font-Inter h-16">{optionOne}</option>
        <option className="text-biruAltera font-Inter">{optionTwo}</option>
      </select>
    </div>
  );
};

const DropDownThree = ({ name, option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, option11 }) => {
  return (
    <div className="w-full max-w-md m-1">
      <div className="label-text font-Inter  text-biruAltera my-2">{name}</div>
      <select defaultValue={option1} className="select select-bordered w-full max-w-md focus:outline-none bg-abuAltera focus:border-biruAltera focus:ring-1 focus:ring-biruAltera ">
        <option disabled selected className="text-biruAltera">
          <span className="text-biruAltera">Choose Your Choice</span>
        </option>
        <option selected className="text-biruAltera font-Inter h-16 ">
          {option1}
        </option>
        <option className="text-biruAltera font-Inter">{option2}</option>
        <option className="text-biruAltera font-Inter">{option3}</option>
        <option className="text-biruAltera font-Inter">{option4}</option>
        <option className="text-biruAltera font-Inter">{option5}</option>
        <option className="text-biruAltera font-Inter">{option6}</option>
        <option className="text-biruAltera font-Inter">{option7}</option>
        <option className="text-biruAltera font-Inter">{option8}</option>
        <option className="text-biruAltera font-Inter">{option9}</option>
        <option className="text-biruAltera font-Inter">{option10}</option>
        <option className="text-biruAltera font-Inter">{option11}</option>
      </select>
    </div>
  );
};

export { DropDown, DropDownTwo, DropDownThree };
