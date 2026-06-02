import './BorderBeam.css'

export function BorderBeam({
  lightWidth = 180,
  duration = 10,
  lightColor = '#818cf8',
  borderRadius = '12px',
}) {
  return (
    <div className="border-beam-wrap" style={{ borderRadius }}>
      <div
        className="border-beam-light"
        style={{
          width: `${lightWidth}px`,
          height: `${lightWidth}px`,
          background: `radial-gradient(ellipse at center, ${lightColor} 0%, transparent 65%)`,
          animationDuration: `${duration}s`,
          offsetPath: `inset(0 round ${borderRadius})`,
        }}
      />
    </div>
  )
}
