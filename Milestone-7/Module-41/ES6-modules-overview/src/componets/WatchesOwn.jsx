import { useEffect, useState } from "react";

const WatchesOwn = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  return (
    <div>
        {
            watches.map(watch => <WatchesShow 
                key={watch.id} watches={watch}
                ></WatchesShow>)
        }
    </div>
  )
};

export default WatchesOwn;
