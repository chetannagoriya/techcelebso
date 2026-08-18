function OrganizationItem({ organization, index }) {
  const name = typeof organization === "string" ? organization : organization.name;
  const source = typeof organization === "string" ? null : organization.src;

  return (
    <div className="trusted-organizations-marquee__item">
      {source && (
        <span
          aria-hidden="true"
          className="trusted-organizations-marquee__logo"
          style={{ backgroundImage: `url("${source}")` }}
        />
      )}
      <span className={index % 3 === 0 ? "text-[#008d7a]" : "text-slate-700"}>{name}</span>
    </div>
  );
}

export default function TrustedOrganizationsMarquee({ organizations }) {
  const items = [...organizations, ...organizations];

  return (
    <div className="trusted-organizations-marquee" aria-label="Trusted organizations">
      <div className="trusted-organizations-marquee__track">
        {items.map((organization, index) => {
          const name = typeof organization === "string" ? organization : organization.name;
          return <OrganizationItem key={`${name}-${index}`} organization={organization} index={index} />;
        })}
      </div>
    </div>
  );
}
