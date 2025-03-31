import react from "react";
import { Img } from "react-image";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import LatestJobs from "./../shared/Latestjobs";
import CTA from "./../shared/CTA";
import Featruejobs from "./../shared/Featruejobs";
import Hero2 from "./../shared/Hero2";
import Category from "./../shared/Category";
import Companies from "./../shared/Companies";
import Partner from './../shared/patners';
import Companycategory from './../shared/Companycategory';
import IndustoryCategory from './../shared/IndustoryCategory';

export default function Home() {
  return (
    // 8 section are in this pages
    <>
      <Navbar />
      <Hero2 />
      <IndustoryCategory />
      <LatestJobs />
      <Category />
      <Partner />
      <Companies />
      <CTA />
      <Companycategory />
      <Featruejobs />
      <Footer />
    </>
  );
}
