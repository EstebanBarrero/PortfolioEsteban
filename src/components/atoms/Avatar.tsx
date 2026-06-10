interface AvatarProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function Avatar({ src, alt, width = 160, height = 160 }: AvatarProps) {
  return (
    <div class="avatar-container">
      <img
        src={src}
        alt={alt}
        class="avatar-img"
        loading="eager"
        width={width}
        height={height}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 160 160%22%3E%3Crect width=%22160%22 height=%22160%22 fill=%22%230f0f1a%22/%3E%3Ctext x=%2280%22 y=%2295%22 font-family=%22monospace%22 font-size=%2248%22 fill=%22%2300f5ff%22 text-anchor=%22middle%22%3EE%3C/text%3E%3C/svg%3E";
        }}
      />
      <div class="avatar-glow" aria-hidden="true" />
    </div>
  );
}
