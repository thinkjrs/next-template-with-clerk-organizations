import Image from "next/image";

type ImageCardProps = {
  href: string;
  src: string;
  alt: string;
  label: string;
  span?: boolean;
};

export default function ImageCard(props: ImageCardProps) {
  const { href, src, alt, label, span } = props;
  return (
    <a
      href={href}
      className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${
        span ? "md:col-span-2 md:h-80" : "md:h-80"
      }`}
    >
      <Image
        src={src}
        loading="lazy"
        alt={alt}
        fill
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
      <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
        {label}
      </span>
    </a>
  );
}
