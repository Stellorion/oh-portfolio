import { ArrowUpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScrollToTopProps {
  showScrollTop: boolean
  scrollToTop: () => void
}

export default function ScrollToTop({ showScrollTop, scrollToTop }: ScrollToTopProps) {
  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center z-50 transition-all duration-300",
        showScrollTop
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ArrowUpCircle className="w-6 h-6" />
    </button>
  )
}