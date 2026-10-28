// Flat, ink-outlined stickers of the things a sales day is made of.
// Pure SVG, same colours in light and dark mode.

const INK = "var(--on-color)";
const W = 4; // outline weight in viewBox units

type StickerProps = { className?: string };

// Points of a star / scalloped badge, rounded so server and client agree.
function starPath(points: number, outer: number, inner: number, cx = 60, cy = 60) {
  const d: string[] = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI * i) / points - Math.PI / 2;
    d.push(`${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return `M${d.join(" L")}Z`;
}

const badge = starPath(14, 54, 46);
const burst = starPath(10, 56, 38);

export function EnvelopeSticker({ className }: StickerProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <rect x="8" y="26" width="104" height="72" rx="12" fill="var(--sun)" stroke={INK} strokeWidth={W} />
      <path d="M12 32 L60 70 L108 32" fill="none" stroke={INK} strokeWidth={W} strokeLinejoin="round" strokeLinecap="round" />
      <path d="M60 52 c-6-8-18-4-14 6 c2 5 14 12 14 12 s12-7 14-12 c4-10-8-14-14-6Z" fill="var(--bubble)" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

export function WonSticker({ className }: StickerProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <path d={badge} fill="var(--mint)" stroke={INK} strokeWidth={W} strokeLinejoin="round" />
      <path d="M38 62 L54 78 L84 44" fill="none" stroke={INK} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BubbleSticker({ className }: StickerProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <path
        d="M30 18 H90 a22 22 0 0 1 22 22 V66 a22 22 0 0 1 -22 22 H52 L28 106 L32 88 H30 a22 22 0 0 1 -22 -22 V40 a22 22 0 0 1 22 -22Z"
        fill="var(--bubble)"
        stroke={INK}
        strokeWidth={W}
        strokeLinejoin="round"
      />
      <circle cx="38" cy="53" r="7" fill={INK} />
      <circle cx="60" cy="53" r="7" fill={INK} />
      <circle cx="82" cy="53" r="7" fill={INK} />
    </svg>
  );
}

export function CalendarSticker({ className }: StickerProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <rect x="14" y="20" width="92" height="86" rx="14" fill="#ffffff" stroke={INK} strokeWidth={W} />
      <path d="M14 34 a14 14 0 0 1 14 -14 H92 a14 14 0 0 1 14 14 V46 H14Z" fill="var(--blue)" stroke={INK} strokeWidth={W} strokeLinejoin="round" />
      <rect x="34" y="10" width="10" height="22" rx="5" fill="#ffffff" stroke={INK} strokeWidth="3" />
      <rect x="76" y="10" width="10" height="22" rx="5" fill="#ffffff" stroke={INK} strokeWidth="3" />
      <text x="60" y="94" textAnchor="middle" fontSize="42" fontWeight="800" fill={INK} fontFamily="var(--font-bricolage), sans-serif">
        28
      </text>
    </svg>
  );
}

export function DealSticker({ className }: StickerProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <path d={burst} fill="var(--blue)" stroke={INK} strokeWidth={W} strokeLinejoin="round" />
      <text x="60" y="78" textAnchor="middle" fontSize="50" fontWeight="800" fill="#ffffff" fontFamily="var(--font-bricolage), sans-serif">
        $
      </text>
    </svg>
  );
}

export function SparkleSticker({ className }: StickerProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <path d="M54 8 C59 40 68 50 100 56 C68 62 59 72 54 104 C49 72 40 62 8 56 C40 50 49 40 54 8Z" fill="var(--lilac)" stroke={INK} strokeWidth={W} strokeLinejoin="round" />
      <path d="M96 76 C98 88 101 91 112 93 C101 95 98 98 96 110 C94 98 91 95 80 93 C91 91 94 88 96 76Z" fill="var(--sun)" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

export function SmileySticker({ className }: StickerProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <path
        d="M60 8 C88 6 112 30 112 58 C114 88 90 112 60 112 C30 114 8 90 8 60 C6 30 32 10 60 8Z"
        fill="var(--sky)"
        stroke={INK}
        strokeWidth={W}
      />
      <path d="M38 50 q6 -8 12 0" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <path d="M70 50 q6 -8 12 0" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <path d="M38 70 q22 22 44 0" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <circle cx="32" cy="66" r="5" fill="var(--bubble)" />
      <circle cx="88" cy="66" r="5" fill="var(--bubble)" />
    </svg>
  );
}
