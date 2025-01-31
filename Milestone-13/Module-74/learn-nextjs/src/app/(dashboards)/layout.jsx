export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-12 ">
        {/* side Nav */}
        <div className="col-span-3">
          <li>User </li>
          <li>User List</li>
          <li>User dashboard</li>
        </div>
        {/* Dashboard Content */}
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
}
