import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { courses } from "../constants";
const firstRow = courses.slice(0, Math.ceil(courses.length / 2));
const secondRow = courses.slice(Math.ceil(courses.length / 2));

const CourseCard = ({ name }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-6 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation flex items-center justify-center"
      )}
    >
      <figcaption className="text-lg font-semibold text-white text-center">
        {name}
      </figcaption>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-20 md:mt-32 c-space section-spacing">
      <h2 className="text-heading">My Course Curriculum</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((course, index) => (
            <CourseCard key={index} name={course.name} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((course, index) => (
            <CourseCard key={index + firstRow.length} name={course.name} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
