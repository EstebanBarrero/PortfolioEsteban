export function ProgressBar({ percent, name }: { percent: number; name: string }) {
  return (
    <div
      class="progress-bar"
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${name}: ${percent}%`}
    >
      <div
        class="progress-fill"
        data-percent={percent}
        style="transition: width 1.2s cubic-bezier(0.4,0,0.2,1);"
      />
    </div>
  );
}
