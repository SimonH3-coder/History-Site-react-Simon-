import { useEffect, useState } from "react";
import { data } from "react-router";

export function ByDate() {
  const [data, setData] = useState<any>();
  const url = "https://history.muffinlabs.com/date/2/14";
  useEffect(() => {
    async function doFetchOnMount() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      console.log(data);
    }
    doFetchOnMount();
  }, []);

  return (
    <div>
      {data?.data?.Events?.map((item: any) => (
        <p>{item.text}</p>
      ))}
    </div>
  );
}
