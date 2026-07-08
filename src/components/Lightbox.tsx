import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X, MagnifyingGlassPlus, MagnifyingGlassMinus } from '@phosphor-icons/react'

export default function Lightbox({
  src,
  alt,
  width,
  onClose,
}: {
  src: string
  alt: string
  width?: number
  onClose: () => void
}) {
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  // Cap the zoomed size to the image's own native resolution (never upscale,
  // which is what made things look blurry) and to a moderate ceiling (so
  // zooming in doesn't overshoot into a page-wide, disorienting size).
  const zoomCap = width ? Math.min(width, 1280) : 1280

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-[100] overflow-auto bg-ink/85 p-4 backdrop-blur-sm sm:p-10"
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center">
        <img
          src={src}
          alt={alt}
          onClick={(e) => {
            e.stopPropagation()
            setZoomed((z) => !z)
          }}
          className={`rounded-lg shadow-2xl transition-[max-width] duration-200 ${
            zoomed ? 'cursor-zoom-out' : 'max-w-[92vw] cursor-zoom-in sm:max-w-[80vw]'
          }`}
          style={zoomed ? { maxWidth: `${zoomCap}px`, width: '100%' } : undefined}
        />
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close full size view"
        className="fixed right-4 top-4 z-[101] inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface text-ink shadow-lg transition-transform hover:scale-105 sm:right-8 sm:top-8"
      >
        <X size={20} weight="bold" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          setZoomed((z) => !z)
        }}
        aria-label={zoomed ? 'Zoom out' : 'Zoom in'}
        className="fixed bottom-4 left-1/2 z-[101] inline-flex h-11 items-center gap-2 -translate-x-1/2 rounded-full bg-surface px-4 text-sm text-ink shadow-lg transition-transform hover:scale-105 sm:bottom-8"
      >
        {zoomed ? <MagnifyingGlassMinus size={18} /> : <MagnifyingGlassPlus size={18} />}
        {zoomed ? 'Zoom out' : 'Zoom in'}
      </button>
    </div>,
    document.body,
  )
}
