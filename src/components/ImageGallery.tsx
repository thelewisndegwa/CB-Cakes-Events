import type { WorkPiece } from "../data/site";
import { useLightbox } from "./Lightbox";
import { Shot } from "./Shot";

type ImageGalleryProps = {
  pieces: WorkPiece[];
  /**
   * Flow photographs down two tight columns instead of the lead-image grid.
   * Use for sets that mix portrait and landscape photographs.
   */
  flow?: boolean;
};

export function ImageGallery({ pieces, flow = false }: ImageGalleryProps) {
  const { open } = useLightbox();

  if (pieces.length === 0) return null;

  return (
    <div className={flow ? "folio folio-flow" : "folio"}>
      {pieces.map((piece, index) => (
        <Shot
          key={piece.id}
          piece={piece}
          className={!flow && index === 0 ? "folio-lead" : undefined}
          onOpen={() => open(pieces, index)}
        />
      ))}
    </div>
  );
}
