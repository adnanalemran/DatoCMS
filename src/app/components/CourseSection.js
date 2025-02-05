import React from "react";
import CourseHeaderRecord from "./CourseHeaderRecord";
import PricingSectionRec from "./PricingSectionRec";
import LearningSectionRec from "./LearningSectionRec";
import PriceCard from "./PriceCard";

const CourseSection = ({ details }) => {
  console.log(details);
  if (details.__typename === "CourseHeaderRecord") {
    <CourseHeaderRecord section={details} />;
  } else if (details.__typename === "CallOutRecord") {
    <CourseHeaderRecord section={details} />;
  } else if (details.__typename === "PricingSectionRec") {
    <PricingSectionRec section={details} />;
  } else if (details.__typename === "LearningSectionRec") {
    <LearningSectionRec section={details} />;
  } else if (details.__typename === "PriceCard") {
    <PriceCard section={details} />;
  } else return <></>;
};

export default CourseSection;
