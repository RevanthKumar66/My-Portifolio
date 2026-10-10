import type { Certification } from "@/types/portfolio";

export const certifications: Certification[] = [
  {
    name: "AWS Cloud Foundations",
    issuer: "AWS Academy",
    image: {
      src: "/My-Certificates/AWS-Cloud-Foundations-certificate.png",
      alt: "AWS Academy Cloud Foundations certificate",
      width: 1032,
      height: 801,
    },
  },
  {
    name: "AWS Data Engineering",
    issuer: "AWS Academy",
    image: {
      src: "/My-Certificates/AWS=Data-Engineering-Certificate.png",
      alt: "AWS Academy Data Engineering certificate",
      width: 1006,
      height: 770,
    },
  },
  {
    name: "Machine Learning with Python",
    issuer: "IBM",
    image: {
      src: "/My-Certificates/machine-learning-with-python.1.png",
      alt: "IBM Skills Network graphic for Machine Learning with Python",
      width: 1080,
      height: 1080,
    },
  },
  {
    name: "Next.js Certification",
    issuer: "Udemy",
    technology: "Next.js",
  },
];
