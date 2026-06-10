export function LevelDots({ level }: { level: number }) {
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} class={`level-dot${i < level ? ' filled' : ''}`} />
      ))}
    </>
  );
}
