import { useEffect, useState } from "react";

import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/header/header";
import type { HistoryData } from "../../types/Historytypes";
import { Sign } from "../../components/sign/sign";

export function ToDay() {
  const [data, setData] = useState<Array<HistoryData>>([]);

  useEffect(() => {
    async function doFetchOnMount3() {
      const today = new Date();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      const url = `https://history.muffinlabs.com/date/${month}/${day}`;

      const res = await fetch(url);
      const data = await res.json();
      setData([data]);
      console.log(data);
    }
    doFetchOnMount3();
  }, []);
  return (
    <div>
      <Header />
      <Sign title={`ON THIS DAY`} description="What happened on this day - historical events, deaths and briths thoughout time" />

      <Navbar />
      {data[0]?.data?.Events?.map((item) => (
        <p>{item.text}</p>
      ))}
    </div>
  );
}
