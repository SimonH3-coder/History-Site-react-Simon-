import { useEffect, useState } from "react";

import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/header/header";
import { Sign } from "../../components/sign/sign";
import type { HistoryData } from "../../types/Historytypes";

export function ByDate() {
  const [data, setData] = useState<HistoryData>();
  const [month, setMonth] = useState<number>(2);
  const [day, setDay] = useState<number>(14);
  const handleSearch = (q: string) => {};
  const url = `https://history.muffinlabs.com/date/${month}/${day}`;
  useEffect(() => {
    async function doFetchOnMount() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      console.log(data);
    }
    doFetchOnMount();
  }, [month, day]);

  return (
    <div>
      <Header />
      <Sign title={`On ${day}/${month}`} description="What happened on this day - Here you can enter a spexific date to only get events that happened on this date" showSearch={true} onSearch={(query) => handleSearch(query)} />
      <Navbar />

      <div>
        <input type="number" min="1" max="12" value={month} onChange={(e) => setMonth(Number(e.target.value))} placeholder="Måned (1-12)" />
        <input type="number" min="1" max="31" value={day} onChange={(e) => setDay(Number(e.target.value))} placeholder="Dag (1-31)" />
      </div>
      {data?.data?.Events?.map((item: any) => (
        <p key={item.text}>{item.text}</p>
      ))}
    </div>
  );
}
