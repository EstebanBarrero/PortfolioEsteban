export function Divider({ center }: { center?: boolean }) {
  return <div class={`divider${center ? ' divider-center' : ''}`} />;
}
