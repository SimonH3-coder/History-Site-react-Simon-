import { useEffect, useState } from "react";
import { data } from "react-router";
import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/header/header";

export function ToDay() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function doFetchOnMount3() {
      const today = new Date();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      const url = `https://history.muffinlabs.com/date/${month}/${day}`;

      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    doFetchOnMount3();
  }, []);
  return (
    <div>
      <Header />
      <Navbar />
      {data.data?.Events?.map((item: any) => (
        <p>{item.text}</p>
      ))}
    </div>
  );
}
