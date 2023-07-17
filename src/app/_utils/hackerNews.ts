/**
 * Hacker News の人気・最新の記事500件の記事IDを取得する
 */
export async function getTopStories() {
  return fetch("https://hacker-news.firebaseio.com/v0/topstories.json", {
    next: { revalidate: 60 }, // キャッシュを60秒
  }).then((res) => res.json());
}

/**
 * 記事の詳細データを取得する
 * @param id
 * @returns
 */
export async function getItem(id: string) {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
    (res) => res.json()
  );
}
