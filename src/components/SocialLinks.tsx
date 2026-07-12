import { socialLinks } from "@/data/socialLinks";

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M248.047 989.867h-198.144v-638.089h198.144zM148.855 264.704c-0.162 0.001-0.353 0.001-0.545 0.001-63.68 0-115.302-51.623-115.302-115.302s51.623-115.302 115.302-115.302c63.499 0 115.010 51.331 115.301 114.761l0 0.028c0 0.032 0 0.069 0 0.106 0 63.57-51.263 115.167-114.705 115.708l-0.052 0zM989.662 989.867h-197.769v-310.613c0-74.035-1.502-168.994-103.049-168.994-103.014 0-118.784 80.452-118.784 163.635v315.972h-198.007v-638.089h190.020v87.040h2.799c36.79-62.161 103.496-103.19 179.786-103.19 2.699 0 5.386 0.051 8.060 0.153l-0.386-0.012c200.567 0 237.431 132.062 237.431 303.582v350.515z" />
    </svg>
  );
}

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M786.773 80.043h146.603l-320.239 365.909 376.73 498.005h-294.912l-231.151-301.943-264.158 301.943h-146.773l342.426-391.475-361.165-472.439h302.387l208.691 276.002zM735.266 856.337h81.203l-524.186-693.248h-87.245z" />
    </svg>
  );
}

function YouTubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M969.899 281.156c-11.267-41.476-43.142-73.531-83.669-84.859l-0.845-0.202c-74.513-20.105-373.385-20.105-373.385-20.105s-298.871 0-373.385 20.105c-41.372 11.529-73.247 43.585-84.319 84.218l-0.195 0.842c-12.718 67.212-19.993 144.529-19.993 223.545 0 2.806 0.009 5.61 0.027 8.412l-0.002-0.43c-0.016 2.336-0.025 5.099-0.025 7.865 0 79.020 7.275 156.342 21.191 231.331l-1.198-7.772c11.344 41.102 43.258 72.746 83.688 83.508l0.826 0.187c74.513 20.105 373.385 20.105 373.385 20.105s298.871 0 373.385-20.105c41.256-10.949 73.171-42.592 84.318-82.864l0.196-0.831c12.718-67.216 19.993-144.538 19.993-223.559 0-2.765-0.009-5.528-0.027-8.288l0.002 0.423c0.016-2.371 0.025-5.175 0.025-7.981 0-79.016-7.275-156.333-21.192-231.317l1.198 7.772zM414.242 654.78v-284.194l249.788 142.097-249.788 142.097z" />
    </svg>
  );
}

const icons = {
  LinkedIn: LinkedInIcon,
  X: XIcon,
  YouTube: YouTubeIcon,
} as const;

type Props = {
  variant?: "header" | "footer";
  headerTone?: "on-dark" | "on-light";
  className?: string;
};

export function SocialLinks({
  variant = "header",
  headerTone = "on-dark",
  className = "",
}: Props) {
  const isHeader = variant === "header";
  const isLightHeader = isHeader && headerTone === "on-light";

  return (
    <ul
      className={`flex items-center gap-3 ${className}`}
      aria-label="Social media"
    >
      {socialLinks.map((link) => {
        const Icon = icons[link.label];
        return (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`inline-flex items-center justify-center rounded-full border transition-colors duration-300 ${
                isHeader
                  ? isLightHeader
                    ? "h-9 w-9 border-[#121e37]/15 text-[#121e37]/75 hover:border-red-500 hover:bg-red-600 hover:text-white"
                    : "h-9 w-9 border-white/20 text-white/80 hover:border-red-500 hover:bg-red-600 hover:text-white"
                  : "h-10 w-10 border-white/15 text-white/70 hover:border-red-600 hover:bg-red-600 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
