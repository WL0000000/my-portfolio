import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export function BorderBeam({
  lightWidth = 200,
  duration = 8,
  lightColor = "#818cf8",
  borderWidth = 2,
  delay = 0,
  className,
  ...props
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const updatePath = () => {
      el.style.setProperty(
        "--path",
        `path("M 0 0 H ${el.offsetWidth} V ${el.offsetHeight} H 0 V 0")`
      )
    }

    updatePath()
    window.addEventListener("resize", updatePath)
    return () => window.removeEventListener("resize", updatePath)
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 rounded-[inherit] pointer-events-none z-10", className)}
      style={{
        border: `${borderWidth}px solid transparent`,
        /* Show ONLY the border strip — exclude = show where exactly one layer is opaque */
        WebkitMask:
          "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
        maskComposite: "exclude",
      }}
      {...props}
    >
      <div
        style={{
          position: "absolute",
          width: lightWidth,
          height: lightWidth,
          background: `radial-gradient(ellipse at center, ${lightColor} 0%, transparent 65%)`,
          offsetPath: "var(--path)",
          animationName: "border-beam-travel",
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  )
}
