export function paginate<T>(items: T[], page: number = 1, limit: number = 10) {
  const pageNum = Math.max(page, 1);
  const limitNum = Math.min(Math.max(limit, 1), 100);

  const start = (pageNum - 1) * limitNum;
  const end = start + limitNum;

  return {
    data: items.slice(start, end),
    total: items.length,
    page: pageNum,
    lastPage: Math.ceil(items.length / limitNum),
    limit: limitNum,
  };
}
