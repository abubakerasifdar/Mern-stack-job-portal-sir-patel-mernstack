import React from "react";
import { Img } from "react-image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const jobCategories = [
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Developer",
  "Mobile App Developer",
  "DevOps Engineer",
  "Cloud Solutions Architect",
  "Data Scientist",
  "Machine Learning Engineer",
  "UI/UX Developer",
  "QA/Test Automation Engineer",
  "Blockchain Developer",
  "Game Developer",
  "Embedded Systems Engineer",
  "Security Engineer (Cybersecurity)",
  "Technical Lead/Engineering Manager",
];

const IndustoryCategory = () => {
  return (
    <>
    <section className="container p-10 mx-auto">
    <div className="flex py-4 justify-between items-center">
          <div className="text-3xl font-extrabold">
            Industry by <span className="text-[#26A4FF]">category</span>{" "}
          </div>
          
          <div className="hidden lg:flex justify-between items-center">
            <span className=" text-[#4640DE] font-bold">Show all jobs</span>
            <Img
              src="/images/compnay profile landing pages/Stack Section/Icon.png"
              width={0}
              height={0}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-auto">
        <CarouselContent>
          {jobCategories.map((items, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="p-5 basis-auto bg-[#4640DE] flex flex-col  gap-3 ">
                  <span className="font-bold text-white text-lg ">{items}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </section>
    </>
  );
};

export default IndustoryCategory;
