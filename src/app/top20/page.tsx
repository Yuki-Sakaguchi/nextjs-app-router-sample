import Link from "next/link";
import { getItem, getTopStories } from "../_utils/hackerNews";

export default async function Top20Page() {
  const top500Ids = await getTopStories();
  const top20Ids = top500Ids.slice(0, 20);
  const top20 = await Promise.all(top20Ids.map((id: any) => getItem(id)));
  const top20Summary = top20.map((item) => {
    return {
      id: item.id,
      title: item.title,
    };
  });

  return (
    <div>
      <header>
        <h1>Hack News Viewer</h1>
        <div>
          <div>
            <h2>Top 20</h2>
            <nav>
              <ul>
                {top20Summary.map((item) => (
                  <li key={item.id}>
                    <Link href={`/top20/${item.id}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <main>
            <div>ここに本文</div>
          </main>
        </div>
      </header>
    </div>
  );
}
