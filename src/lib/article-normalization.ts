function compactWhitespace(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

function uniqueValues(values: string[]): string[] {
  return [...new Set(values.filter((value) => value.length > 0))];
}

// Нормализация нужна для поиска, но не является доказательством взаимозаменяемости товаров.
export function normalizeArticle(value: string): string {
  return compactWhitespace(value).toUpperCase().replace(/[\s-]+/g, "");
}

export function getArticleSearchVariants(value: string): string[] {
  const base = compactWhitespace(value).toUpperCase();
  const withoutSpaces = base.replace(/\s+/g, "");
  const withoutHyphens = base.replace(/-+/g, "");
  const compact = base.replace(/[\s-]+/g, "");

  return uniqueValues([base, withoutSpaces, withoutHyphens, compact]);
}
