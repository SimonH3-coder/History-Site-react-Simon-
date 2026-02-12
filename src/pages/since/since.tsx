import { useState, useEffect } from "react";
import { data } from "react-router";
import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/header/header";

export function Since() {
  const [data, setData] = useState<any>();
  const [sinceYear, setSinceYear] = useState<number>(1917);
  const url = "https://history.muffinlabs.com/date";

  useEffect(() => {
    async function doFetchOnMount2() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    doFetchOnMount2();
  }, []);

  const filteredEvents = (data?.data?.Events ?? []).filter((item: any) => {
    const year = Number(item?.year);
    return Number.isFinite(year) && year >= sinceYear;
  });

  return (
    <div>
      <Header />
      <Navbar />
      <label>
        Vælg et år: <input type="number" value={sinceYear} onChange={(e) => setSinceYear(Number(e.target.value || 0))} min={0} />
      </label>

      {filteredEvents.map((item: any) => (
        <p key={`${item?.year}-${item?.text}`}>{item.text}</p>
      ))}
    </div>
  );
}
