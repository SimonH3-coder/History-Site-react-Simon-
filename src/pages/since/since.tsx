import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/header/header";
import { Sign } from "../../components/sign/sign";
import type { Birth } from "../../types/Historytypes";

export function Since() {
  const [data, setData] = useState<Array<Birth>>([]);
  const [sinceYear, setSinceYear] = useState<number>(1917);
  const url = "https://history.muffinlabs.com/date";

  function checkYear(item: Birth) {
    const sinceYear = Number(item.year);
    return Number.isFinite(sinceYear) && sinceYear >= sinceYear;
  }
  const handleSearch = (q: string) => {
    setSinceYear(Number(q));
  };

  useEffect(() => {
    async function doFetchOnMount2() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    doFetchOnMount2();
  }, [sinceYear]);

  const filteredEvents = (data?.data?.Events ?? []).filter((item: Birth) => {
    const year = Number(item?.year);
    return Number.isFinite(year) && year >= sinceYear;
  });

  return (
    <div>
      <Header />
      <Sign title={`Since: ${sinceYear}`} description="What happened on this day - Here you can enter a specific year and see all the events that have happened since then on this day - Here you can enter a specific year to get all events that happened on this day since that year" showSearch={true} onSearch={(query) => handleSearch(query)} />

      <Navbar />

      <label>
        Vælg et år: <input type="number" value={sinceYear} onChange={(e) => setSinceYear(Number(e.target.value || 0))} min={0} />
      </label>

      {filteredEvents.map((item: Birth) => (
        <p key={`${item?.year}-${item?.text}`}>{item.text}</p>
      ))}
    </div>
  );
}
