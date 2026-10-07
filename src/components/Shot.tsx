import type { WorkPiece } from "../data/site";

type ShotProps = {
  piece: WorkPiece;
  onOpen: () => void;
  className?: string;
  eager?: boolean;
};

export function Shot({ piece, onOpen, className, eager = false }: ShotProps) {
  return (
    <button type="button" className={className ? `shot ${className}` : "shot"} onClick={onOpen}>
      <span className="shot-frame">
        <img
          src={piece.src}
          alt={piece.alt}
          width={piece.width}
          height={piece.height}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
      </span>
      <span className="shot-label">{piece.label}</span>
    </button>
  );
}
