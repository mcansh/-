import { Link, Outlet } from "remix";

export default function Something() {
  return (
    <div>
      <h1>Something</h1>
      <div style={{ color: "pink" }}>
        <Link to="/">Home</Link>
        <Outlet />
      </div>
    </div>
  );
}
