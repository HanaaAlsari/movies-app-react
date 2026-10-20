import { NavLink } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div>
      {/* قائمة التنقل (Navbar) */}
      <nav
        style={{
          width: "100%",
          backgroundColor: "#2068c5ae", // اللون الأخضر الخاص بك
          padding: "15px 20px", // مسافات داخلية مناسبة
          boxSizing: "border-box",
          display: "flex",
          direction: "rtl",
          justifyContent: "space-between", // هذا السطر يدفع كلمة Movies لليسار والروابط لليمين
          alignItems: "center",
          gap: "15px",
        }}
      >
        {/* المجموعة الأولى: الروابط ستبقى في جهة اليمين */}
        <div  className={"navbar-links"}    style={{ display: "flex", gap: "20px" }}>
          <NavLink  className={'nav-btn"'}to="/">WatchList</NavLink>
          <NavLink className={'nav-btn"'} to="/watched">Watched</NavLink>
          <NavLink className={"add-button"} to="/ADD">
            ADD
          </NavLink>
        </div>

        {/* المجموعة الثانية: كلمة Movies ستندفع تلقائياً إلى أقصى اليسار */}
        <h1 style={{ margin: 0, fontSize: "24px" }}>Movies</h1>
      </nav>
    </div>
  );
}
