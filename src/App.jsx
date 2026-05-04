import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(d => setData(d.products));
  }, []);

  const items = data.slice(page, page + 4);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Products</h2>

      <button onClick={() => setPage(p => Math.max(p - 4, 0))}>
        Prev
      </button>

      <button onClick={() => setPage(p => p + 4)}>
        Next
      </button>

      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        {items.map(p => (
          <img key={p.id} src={p.thumbnail} width={120} />
        ))}
      </div>
    </div>
  );
}