export default function ProductSkeleton() {
  return (
    <section className="flex flex-col gap-6 p-6 max-w-3xl w-full mt-5 animate-pulse">
      <div className="w-full h-[400px] bg-gray-200 rounded-xl" />
      <div className="w-full bg-white border border-gray-200 shadow-md rounded-lg p-6 flex flex-col gap-4 text-center">
        <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto" />
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto" />
        <div className="flex gap-2">
          <div className="h-10 bg-gray-200 rounded w-1/2" />
          <div className="h-10 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
    </section>
  );
}
