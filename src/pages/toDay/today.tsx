import { useEffect, useState } from "react";
import { data } from "react-router";

export function ToDay() {
  const [data, setData] = useState<any>();
  const url = "https://history.muffinlabs.com/date";
  useEffect(() => {
    async function doFetchOnMount3() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    doFetchOnMount3();
  }, []);
  return (
    <div>
      {data.data?.Events?.map((item: any) => (
        <p>{item.text}</p>
      ))}
    </div>
  );
}
