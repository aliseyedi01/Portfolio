"use client";
// components
import { BackPage } from "@/components";
// next
import Image from "next/image";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation, Autoplay, Zoom } from "swiper/modules";
import { ProjectDataType, projectsData } from "@/data/projectData";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  Data: ProjectDataType;
};

const ProjectPreview: React.FC<Props> = ({ children, Data }) => {
  const coverImages = Data.image;

  return (
    <div className="flex w-full flex-col gap-3 pt-16">
      {/* header */}
      <div className="flex items-center ">
        <BackPage />
        <p className="text-md translate-y-[2px] font-alkatra">Project / Admin Panel 1</p>
      </div>
      {/* Project */}
      <div className="grid h-full w-full grid-cols-1 place-content-center place-items-center max-md:gap-6 max-md:pb-16 max-md:pt-12 md:h-[80vh] md:grid-cols-2">
        {/* Preview */}
        <div className="flex h-52 w-[85%] flex-row rounded-lg md:h-96">
          <Swiper
            effect={"flip"}
            grabCursor={true}
            pagination={{ dynamicBullets: true }}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
            }}
            navigation={true}
            loop={true}
            zoom={true}
            modules={[Zoom, EffectFlip, Pagination, Navigation, Autoplay]}
            className="mySwiper rounded-lg "
          >
            {coverImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container">
                  <Image
                    src={image}
                    width="400"
                    height="400"
                    loading="eager"
                    alt="singleProject"
                    className="h-full  w-full !rounded-lg  "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Information */}
        {children}
      </div>
    </div>
  );
};

export default ProjectPreview;