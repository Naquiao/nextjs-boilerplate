export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-foreground/20 border-t-foreground"></div>
        <p className="text-foreground/60">Loading...</p>
      </div>
    </div>
  )
} 