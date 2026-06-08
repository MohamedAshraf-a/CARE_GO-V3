export default function Spinner({ loading = false }) {
  if (!loading) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm z-10">
      <div className="w-10 h-10 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
    </div>
  );
}