const CategoryCardSkeleton = () => {
  return (
    <div
      role="status"
      className="flex h-24 animate-pulse flex-col justify-end border border-gray-200 bg-gray-300 p-3 shadow dark:border-gray-700"
    >
      <div className="mb-2.5 h-2 w-1/3 bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-700"></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default CategoryCardSkeleton
