interface LogoIconProps {
  size: number;
  /** Translucent disc behind the mark (header variant). */
  halo?: boolean;
}

export default function LogoIcon({ size, halo = false }: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      {halo && (
        <path
          d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4z"
          fill="white"
          fillOpacity="0.15"
        />
      )}
      <path
        d="M20 8c-1.5 0-2.8.6-3.8 1.5L13 13h5l2-3 2 3h5l-3.2-3.5C22.8 8.6 21.5 8 20 8z"
        fill="white"
      />
      <path d="M25 14H15l-2 3h14l-2-3z" fill="white" fillOpacity="0.8" />
      <circle cx="20" cy="22" r="4" fill="white" />
      <circle cx="20" cy="22" r="2" fill="#FF5200" />
    </svg>
  );
}
