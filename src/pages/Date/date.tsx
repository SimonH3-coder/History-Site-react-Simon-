import { useEffect, useState } from "react";
import { data } from "react-router";
import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/header/header";

export function ByDate() {
  const [data, setData] = useState<any>();
  const [month, setMonth] = useState<number>(2);
  const [day, setDay] = useState<number>(14);
  const url = `https://history.muffinlabs.com/date/2/14/${month}/${day}`;
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
