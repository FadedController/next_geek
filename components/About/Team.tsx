const Team = (): JSX.Element => {
  return (
    <div className="flex justify-center pb-12" id="team">
      <div className="flex flex-col justify-center max-w-7xl space-y-12 w-full">
        <h1 className="text-5xl w-full text-center font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-900 pb-3">
          Our Team
        </h1>
        <div className="grid gap-5 text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col space-y-8 items-center">
            <img src="svg/programmingBlue.svg" className="h-64" />
            <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-900">
              The Developer
            </h2>
            <p className="font-semibold">
              Being in software security field, we don't like to expose much
              about us. Hence no photo. I take care of all the software
              development work from planning, architecture and delivery.
            </p>
          </div>
          <div className="flex flex-col space-y-8 items-center">
            <img src="svg/securityOnBlue.svg" className="h-64" />
            <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-900">
              The Security Consultant
            </h2>
            <p className="font-semibold">
              We have Audited numerous web-applications in the areas of Internet
              Banking, Insurance, Core Banking, Finance, Payment Gateways, and
              E-Commerce. · Conducted External and Internal Vulnerability
              assessment Penetration testing · PKI and Server Hardening.
            </p>
          </div>
          <div className="flex flex-col space-y-8 items-center">
            <img src="svg/businessManBlue.svg" className="h-64" />
            <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-900">
              The Business Guy
            </h2>
            <p className="font-semibold">
              I look into business part of the organization. Look for emerging
              markets. Get more business and get it delivered on time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
