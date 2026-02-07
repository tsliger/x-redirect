import { useState, useEffect } from "react";
import websites from "../configs/websites";

export function Dropdown() {
  const [target, setTarget] = useState("xcancel.com");

  useEffect(() => {
    browser.storage.local.get("targetUrl").then((res) => {
      if (res.targetUrl) setTarget(res.targetUrl);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setTarget(val);
    browser.storage.local.set({ targetUrl: val });
  };

  return (
    <div className="w-64 gap-3 flex flex-col">
      <select className="dropdown" onChange={handleChange} value={target}>
        {websites.map((item, index) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <div className="text-xs text-slate-500 select-none">
        Changes are saved automatically and applied instantly.
      </div>
    </div>
  );
}
