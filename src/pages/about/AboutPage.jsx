import React from "react";
import { useQuery } from "../../hooks/useQuery";
import AboutBanner from "./AboutBanner";
import { pageService } from "../../service/pageService";
import AboutStory from "./AboutStory";
import AboutBenifit from "./AboutBenifit";
import AboutNumbers from "./AboutNumbers";
import AboutStudy from "./AboutStudy";
import AboutGallery from "./AboutGallery";
import { galleryService } from "../../service/galleryService";
import { teamService } from "../../service/teamService";
import AbouteTeachers from "./AbouteTeachers";
import Register from "../../component/register/Register";
const AboutPage = () => {
  const { data: about } = useQuery(() => pageService.getPage("about"));
  const { data } = useQuery(() => galleryService.getGallery());
  const { data: listTeacher } = useQuery(() => teamService.getTeam());
  const gallery = data?.galleries[0]?.images || [];
  return (
    <main className="mainwrapper aboutpage">
      <AboutBanner title={about?.title} />
      <AboutStory data={about} />
      <AboutBenifit benifit={about?.data?.together} />
      <AboutNumbers numbers={about?.data} />
      <AboutStudy study={about?.data?.pictureStudy} />
      <AboutGallery galleries={gallery} />
      <AbouteTeachers teachers={listTeacher?.teams} />
      <Register />
    </main>
  );
};

export default AboutPage;
