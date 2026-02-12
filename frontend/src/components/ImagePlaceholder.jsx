export default function ImagePlaceholder({ label = 'Image Here', className = '', height = 'h-48' }) {
  return (
    <div
      className={`image-placeholder ${height} ${className}`}
    >
      {label}
    </div>
  );
}
