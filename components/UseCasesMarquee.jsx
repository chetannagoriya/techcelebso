import Image from "next/image";

export default function UseCasesMarquee({ useCases, label = "Industry use cases" }) {
  const items = [...useCases, ...useCases];

  return (
    <div className="use-cases-marquee" aria-label={label}>
      <div className="use-cases-marquee__track">
        {items.map(([name, image], index) => (
          <article
            key={`${name}-${index}`}
            className="use-cases-marquee__card"
            aria-hidden={index >= useCases.length}
          >
            <div className="use-cases-marquee__image">
              <Image src={image} alt={index < useCases.length ? `${name} use case` : ""} fill className="object-cover" />
            </div>
            <p>{name}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
