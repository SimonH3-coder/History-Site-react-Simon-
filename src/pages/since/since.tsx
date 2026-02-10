import { useState, useEffect } from "react";
import { data } from "react-router";

export function Since() {
  const [data, setData] = useState<any>();
  const url = "https://history.muffinlabs.com/date";

  useEffect(() => {
    async function doFetchOnMount2() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    doFetchOnMount2();
  }, []);

  return (
    <div>
      {data?.data?.Events?.map((item: any) => (
        <p>{item.text}</p>
      ))}
    </div>
  );
}
