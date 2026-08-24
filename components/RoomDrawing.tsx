/**
 * The five rooms do not exist in a photograph yet, so they are drawn:
 * schematic elevations in the same hand as the icons, one stroke weight,
 * one wash. Nothing here claims to be a picture of the finished room.
 */
const frame = {
  viewBox: '0 0 300 400',
  preserveAspectRatio: 'xMidYMax meet',
  'aria-hidden': true,
  focusable: 'false',
} as const;

export function RoomDrawing({ kind, className }: { kind: number; className?: string }) {
  switch (kind) {
    /* the first hall — the long room */
    case 0:
      return (
        <svg {...frame} className={className}>
          <path data-wash d="M86 320 L214 320 L190 254 L110 254 Z" />
          <path data-ink d="M26 340 H274" />
          <path data-ink d="M60 340 V196 M240 340 V196" />
          <path data-ink d="M48 196 H72 M228 196 H252" />
          <path data-ink d="M42 172 H258 M60 150 H240" />
          <path data-ink d="M120 300 V222 C120 192 133 176 150 176 C167 176 180 192 180 222 V300" />
          <path data-ink d="M150 176 V300 M120 244 H180" />
          <path data-ink d="M86 320 L214 320 L190 254 L110 254 Z" />
          <path data-ink d="M104 254 V236 M126 254 V236 M174 254 V236 M196 254 V236" />
          <path data-ink d="M96 320 V342 M124 320 V342 M176 320 V342 M204 320 V342" />
        </svg>
      );

    /* the second hall — vaulted, quieter, further from the door */
    case 1:
      return (
        <svg {...frame} className={className}>
          <path data-wash d="M60 340 V196 C60 140 100 106 150 106 C200 106 240 140 240 196 V340 Z" />
          <path data-ink d="M26 340 H274" />
          <path data-ink d="M60 340 V196 C60 140 100 106 150 106 C200 106 240 140 240 196 V340" />
          <path data-ink d="M150 106 V196 M60 196 C100 214 200 214 240 196" />
          <path data-ink d="M86 138 C110 168 190 168 214 138" />
          <ellipse data-ink cx="112" cy="292" rx="40" ry="15" />
          <ellipse data-ink cx="198" cy="248" rx="31" ry="12" />
          <path data-ink d="M112 307 V318 M198 260 V270" />
          <circle data-ink cx="64" cy="288" r="9" />
          <circle data-ink cx="160" cy="296" r="9" />
          <circle data-ink cx="236" cy="246" r="8" />
        </svg>
      );

    /* the private room — a door that closes */
    case 2:
      return (
        <svg {...frame} className={className}>
          <path data-wash d="M94 340 V152 C94 108 119 82 150 82 C181 82 206 108 206 152 V340 Z" />
          <path data-ink d="M52 340 H248" />
          <path data-ink d="M94 340 V152 C94 108 119 82 150 82 C181 82 206 108 206 152 V340" />
          <path data-ink d="M150 82 V340" />
          <path data-ink d="M108 176 H142 V300 H108 Z M158 176 H192 V300 H158 Z" />
          <path data-ink d="M108 156 C108 132 126 118 142 118 M192 156 C192 132 174 118 158 118" />
          <circle data-ink cx="139" cy="232" r="4.5" />
          <circle data-ink cx="161" cy="232" r="4.5" />
          <path data-ink strokeDasharray="9 11" d="M70 352 H230" />
        </svg>
      );

    /* the terrace — open sky, Brussels weather */
    case 3:
      return (
        <svg {...frame} className={className}>
          <circle data-wash cx="150" cy="158" r="34" />
          <path data-ink d="M70 340 V172 C70 122 106 90 150 90 C194 90 230 122 230 172 V340" />
          <circle data-ink cx="150" cy="158" r="34" />
          <path data-ink d="M26 340 H274" />
          <path data-ink d="M62 306 H238 M78 306 V340 M110 306 V340 M142 306 V340 M174 306 V340 M206 306 V340 M222 306 V340" />
          <path data-ink d="M70 172 C86 148 104 176 122 152 C140 128 158 156 176 132 C194 108 212 136 230 116" />
          <path data-ink d="M92 162 l-10 -9 M128 140 l-10 -9 M164 120 l-10 -9 M200 124 l10 -9" />
          <ellipse data-ink cx="150" cy="272" rx="30" ry="11" />
          <path data-ink d="M150 283 V300" />
          <path data-ink d="M104 258 V286 M196 258 V286 M96 272 H112 M188 272 H204" />
        </svg>
      );

    /* the veranda — glazed and warm when the terrace is not */
    default:
      return (
        <svg {...frame} className={className}>
          <path data-wash d="M150 206 H194 V266 H150 Z" />
          <path data-ink d="M26 340 H274" />
          <path data-ink d="M64 340 V168 C64 118 102 84 150 84 C198 84 236 118 236 168 V340" />
          <path data-ink d="M107 340 V112 M150 340 V84 M193 340 V112" />
          <path data-ink d="M64 206 H236 M64 266 H236 M70 140 H230" />
          <path data-ink d="M96 306 H204 M96 306 V336 M204 306 V336 M96 292 H204" />
        </svg>
      );
  }
}
