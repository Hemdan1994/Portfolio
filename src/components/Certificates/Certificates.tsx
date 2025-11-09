import React from 'react';
import PageTransition from '@/components/Layout/PageTransition';
import { Card, CardContent } from '@/components/ui/card';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  pdfPath: string;
  credentialId?: string;
}

const certificates: Certificate[] = [
  {
    title: "Hackathon 2.0 – powered by HCLTech",
    issuer: "HCLTech",
    date: "June 28, 2025",
    description: `This initiative brought together top technology talent to compete, collaborate, and showcase real-world problem-solving skills in a high-impact, real-time environment. We appreciate your enthusiasm, dedication, and innovative spirit`,
    pdfPath: "/hackathon.pdf",
  },
  {
    title: "Certified UI Developer",
    issuer: "NTI Egypt",
    date: "March 2022",
    description: "Certified UI Developer with Score test 98%",
    pdfPath: "/certificate-ui.pdf",
    
  },
  {
    title: "Top Tech performance award",
    issuer: "Drjobs",
    date: "August 2022",
    description: "Delivered a Project before the deadline with unit tests ",
    pdfPath: "/top-tech.pdf"

  }
];

const CertificateCard = ({ certificate }: { certificate: Certificate }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/40 h-full">
      <CardContent className="pt-6">
        <div className="flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-highlight/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-foreground mb-2">{certificate.title}</h3>
          <p className="text-highlight font-medium mb-1">{certificate.issuer}</p>
          <p className="text-slate-light text-sm mb-4">{certificate.date}</p>
          <p className="text-slate mb-6 flex-grow">{certificate.description}</p>
          
          {certificate.credentialId && (
            <p className="text-sm text-muted-foreground mb-4">
              Credential ID: <span className="font-mono">{certificate.credentialId}</span>
            </p>
          )}
          
          <a
            href={certificate.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-navy-light text-highlight border border-highlight rounded hover:bg-highlight/10 transition-colors duration-300 w-fit"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Certificate
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const CertificateSection = () => {
  return (
    <PageTransition className="section-container py-16">
      <h2 className="section-title mb-12">
        <span className="text-highlight mr-2">03.</span>
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
    </PageTransition>
  );
};

export default CertificateSection;
