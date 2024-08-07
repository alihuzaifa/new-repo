import CaseStudies from "@/app/components/caseStudies";
import Client from "@/app/components/client";
import FaqCards from "@/app/components/faqCard";
import Heading from "@/app/components/heading";
import Industries from "@/app/components/industries";
import MaxWidthWrapper from "@/app/components/maxWidthWrapper";
import About from "@/app/components/serviceDetail/about";
import Cta from "@/app/components/serviceDetail/cta";
import Growth from "@/app/components/serviceDetail/growth";
import Hero from "@/app/components/serviceDetail/hero";
import Service from "@/app/components/serviceDetail/service";
import Stacks from "@/app/components/serviceDetail/stacks";
import Stats from "@/app/components/serviceDetail/stats";
import Support from "@/app/components/serviceDetail/support";
import { serviceDetail } from "@/data";
import { metadataJson } from "@/metadata";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { service: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = params.service;
  const pageMetadata = metadataJson[service];
  return {
    ...pageMetadata,
    openGraph: {
      ...pageMetadata.openGraph,
      images: [...(pageMetadata.openGraph?.images || [])],
    },
  };
}
function getServiceDetail(key: string): any {
  return serviceDetail[key] || null;
}

function page({ params: { service } }: any) {
  const detail = getServiceDetail(service);
  if (!detail) return notFound();
  const {
    hero,
    about,
    banner,
    cta,
    services,
    faq,
    isDiagram,
    isStack,
    isClient,
    isIndustries,
    isCaseStudy,
    stats,
    stacks,
  } = detail;
  return (
    <>
      <Hero
        page={service}
        title={hero?.title || ""}
        description={hero?.description || ""}
      />
      <MaxWidthWrapper>
        <About
          title={about?.title || ""}
          description={about?.description || ""}
        />
      </MaxWidthWrapper>
      <Stats title={stats} />
      <MaxWidthWrapper>
        <Service title={banner?.title || ""} content={banner?.content || []} />
      </MaxWidthWrapper>
      <div className="text-white my-20">
        <Cta title={cta?.title || ""} description={cta?.description || ""} />
      </div>
      <MaxWidthWrapper>
        {isDiagram && (
          <>
            <Growth />
            <div className="mb-20" />
          </>
        )}
        {services && (
          <Support
            title={services?.title || ""}
            description={services?.description || ""}
            content={services?.content || []}
          />
        )}
        <div className="mb-20" />
        {isCaseStudy && (
          <>
            <CaseStudies />
            <div className="mb-20" />
          </>
        )}
        {isIndustries && <Industries />}
      </MaxWidthWrapper>
      <div className="mb-20" />
      {isStack && (
        <>
          <Stacks
            title={stacks?.title || ""}
            description={stacks?.subtitle || ""}
            images1={
              stacks?.images1 || [
                "/service-detail/stacks/1.png",
                "/service-detail/stacks/2.png",
                "/service-detail/stacks/3.png",
                "/service-detail/stacks/4.png",
                "/service-detail/stacks/5.png",
                "/service-detail/stacks/6.png",
                "/service-detail/stacks/7.png",
                "/service-detail/stacks/8.png",
                "/service-detail/stacks/1.png",
                "/service-detail/stacks/2.png",
                "/service-detail/stacks/3.png",
                "/service-detail/stacks/4.png",
                "/service-detail/stacks/5.png",
                "/service-detail/stacks/6.png",
                "/service-detail/stacks/7.png",
                "/service-detail/stacks/8.png",
              ]
            }
            images2={
              stacks?.images2 || [
                "/service-detail/stacks/9.png",
                "/service-detail/stacks/10.png",
                "/service-detail/stacks/11.png",
                "/service-detail/stacks/12.png",
                "/service-detail/stacks/13.png",
                "/service-detail/stacks/14.png",
                "/service-detail/stacks/15.png",
                "/service-detail/stacks/9.png",
                "/service-detail/stacks/10.png",
                "/service-detail/stacks/11.png",
                "/service-detail/stacks/12.png",
                "/service-detail/stacks/13.png",
                "/service-detail/stacks/14.png",
                "/service-detail/stacks/15.png",
              ]
            }
          />
          <div className="mb-20" />
        </>
      )}
      {isClient && <Client />}
      <MaxWidthWrapper>
        <div className="mb-20">
          <Heading
            isCenter={false}
            title={faq?.title || ""}
            subtitle={faq?.description || ""}
          />
          <FaqCards faqArray={faq?.content || []} />
        </div>
      </MaxWidthWrapper>
    </>
  );
}

export default page;
