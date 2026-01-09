import React from "react";

export default function Alert({ alert }) {

  const capitalize = (word) => {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const getIcon = (type) => {
    switch (type) {
      case "success": return "✅";
      case "danger": return "❌";
      case "warning": return "⚠️";
      case "info": return "ℹ️";
      default: return "🔔";
    }
  };

  return (
    <div style={{ minHeight: "60px" }}>
      {alert && (
        <div
          className={`alert alert-${alert.type} shadow-sm d-flex align-items-center fade show`}
          role="alert"
          style={{
            borderRadius: "10px",
            fontSize: "15px",
            padding: "12px 16px"
          }}
        >
          <span style={{ fontSize: "18px", marginRight: "10px" }}>
            {getIcon(alert.type)}
          </span>

          <div>
            <strong>{capitalize(alert.type)}</strong> — {alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}
