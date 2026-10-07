import type { WorkPiece } from "../data/site";
import { useLightbox } from "./Lightbox";
import { Shot } from "./Shot";

export function ImageGallery({ pieces }: { pieces: WorkPiece[] }) {
  const { open } = useLightbox();

  if (pieces.length === 0) return null;

  return (
    <div className="folio">
      {pieces.map((piece, index) => (
        <Shot
          key={piece.id}
          piece={piece}
          className={index === 0 ? "folio-lead" : undefined}
          onOpen={() => open(pieces, index)}
        />
      ))}
    </div>
  );
}
