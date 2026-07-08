import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

function Card({
  rotate,
  scale,
  reduce,
  children,
}: {
  rotate: MotionValue<number>
  scale: MotionValue<number>
  reduce: boolean
  children: ReactNode
}) {
  return (
    <motion.div
      style={{
        rotateX: reduce ? 0 : rotate,
        scale: reduce ? 1 : scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a',
      }}
      className="mx-auto w-full max-w-5xl rounded-[26px] border-4 border-ink/80 bg-ink p-2 shadow-2xl md:p-4"
    >
      <div className="flex items-center gap-1.5 px-2 pb-2 pt-1 md:px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e2664b]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e8a33d]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3ddc84]" />
        <span className="font-mono-tag ml-3 hidden truncate text-[11px] text-paper/50 sm:block">
          jobhai.com/recruiter/candidates
        </span>
      </div>
      <div className="h-full w-full overflow-hidden rounded-xl bg-paper">{children}</div>
    </motion.div>
  )
}

export default function ContainerScroll({
  title,
  children,
}: {
  title: ReactNode
  children: ReactNode
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const rmq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setIsMobile(mq.matches)
    const updateReduce = () => setReduce(rmq.matches)
    update()
    updateReduce()
    mq.addEventListener('change', update)
    rmq.addEventListener('change', updateReduce)
    return () => {
      mq.removeEventListener('change', update)
      rmq.removeEventListener('change', updateReduce)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: containerRef })
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [0.82, 0.92] : [1.05, 1])
  const translate = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <div ref={containerRef} className="relative flex flex-col items-center py-16 sm:py-24">
      <motion.div
        style={{ translateY: reduce ? 0 : translate }}
        className="mx-auto mb-2 max-w-2xl px-6 text-center"
      >
        {title}
      </motion.div>
      <div className="w-full px-4" style={{ perspective: '1200px' }}>
        <Card rotate={rotate} scale={scale} reduce={reduce}>
          {children}
        </Card>
      </div>
    </div>
  )
}
