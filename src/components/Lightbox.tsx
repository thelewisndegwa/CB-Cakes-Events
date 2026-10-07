import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import type { WorkPiece } from "../data/site";

type LightboxState = {
  pieces: WorkPiece[];
  index: number;
};

type LightboxContextValue = {
  open: (pieces: WorkPiece[], index: number) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  const value = useContext(LightboxContext);
  if (!value) {
    throw new Error("useLightbox must be used within LightboxProvider");
  }
  return value;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  const open = useCallback((pieces: WorkPiece[], index: number) => {
    setState({ pieces, index });
  }, []);

  const close = useCallback(() => setState(null), []);

  const step = useCallback((direction: -1 | 1) => {
    setState((current) => {
      if (!current) return current;
      const next = (current.index + direction + current.pieces.length) % current.pieces.length;
      return { ...current, index: next };
    });
  }, []);

  useEffect(() => {
    if (!state) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [state, close, step]);

  const piece = state ? state.pieces[state.index] : null;

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {state && piece
        ? createPortal(
            <div className="lightbox" role="presentation" onClick={close}>
              <div
                className="lightbox-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="lightbox-bar">
                  <p id={titleId}>
                    {piece.label}
                    <span>
                      {state.index + 1} / {state.pieces.length}
                    </span>
                  </p>
                  <button ref={closeRef} type="button" className="lightbox-close" onClick={close}>
                    Close
                  </button>
                </div>
                <img src={piece.src} alt={piece.alt} />
                {state.pieces.length > 1 ? (
                  <div className="lightbox-nav">
                    <button type="button" onClick={() => step(-1)}>
                      Previous
                    </button>
                    <button type="button" onClick={() => step(1)}>
                      Next
                    </button>
                  </div>
                ) : null}
              </div>
            </div>,
            document.body,
          )
        : null}
    </LightboxContext.Provider>
  );
}
