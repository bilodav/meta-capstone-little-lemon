import React, { useState, useEffect, useRef } from "react";
import restauranFood from "../assets/restauranfood.jpg";
import restaurant from "../assets/restaurant.jpg";
import restaurantB from "../assets/restaurantchef- B.jpg";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAY_HEADERS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function Calendar({ onSelect, selected }) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const firstDay = new Date(year, month, 1).getDay();
  const offset = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const changeMonth = (dir) => {
    let m = month + dir;
    let y = year;
    if (m > 11) {
      m = 0;
      y++;
    }
    if (m < 0) {
      m = 11;
      y--;
    }
    setMonth(m);
    setYear(y);
  };

  const cells = [];
  for (let i = 0; i < offset; i++)
    cells.push({ day: prevMonthDays - offset + 1 + i, type: "prev" });
  for (let d = 1; d <= daysInMonth; d++)
    cells.push({ day: d, type: "current" });
  while (cells.length < 42)
    cells.push({ day: cells.length - offset - daysInMonth + 1, type: "next" });

  return (
    <div style={styles.calWrap}>
      <div style={styles.calHeader}>
        <button style={styles.calNav} onClick={() => changeMonth(-1)}>
          ←
        </button>
        <span style={{ fontWeight: 600, fontSize: 15 }}>
          {MONTHS[month]} {year}
        </span>
        <button style={styles.calNav} onClick={() => changeMonth(1)}>
          →
        </button>
      </div>
      <div style={styles.calGrid}>
        {DAY_HEADERS.map((d) => (
          <div key={d} style={styles.calDayHdr}>
            {d}
          </div>
        ))}
        {cells.map((cell, i) => {
          const isCurrent = cell.type === "current";
          const isSelected =
            selected &&
            selected.day === cell.day &&
            selected.month === month &&
            selected.year === year &&
            isCurrent;
          return (
            <div
              key={i}
              onClick={() =>
                isCurrent && onSelect({ day: cell.day, month, year })
              }
              style={{
                ...styles.calDay,
                color: isCurrent ? "#333" : "#ccc",
                cursor: isCurrent ? "pointer" : "default",
                background: isSelected ? "#495e57" : "transparent",
                color: isSelected ? "#fff" : isCurrent ? "#333" : "#ccc",
                borderRadius: 4,
              }}
            >
              {cell.day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CustomSelect({ icon, label, value, children, isOpen, onToggle }) {
  return (
    <div style={{ position: "relative" }}>
      <button style={styles.selBtn} onClick={onToggle}>
        <span style={{ fontSize: 18 }}>{icon}</span>
        <span
          style={{ flex: 1, textAlign: "left", color: value ? "#333" : "#555" }}
        >
          {value || label}
        </span>
        <span
          style={{
            fontSize: 12,
            transform: isOpen ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
          }}
        >
          ▼
        </span>
      </button>
      {isOpen && children}
    </div>
  );
}

function BookingPage() {
  const [seating, setSeating] = useState("outdoor");
  const [openDrop, setOpenDrop] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [diners, setDiners] = useState("");
  const [occasion, setOccasion] = useState("");
  const [time, setTime] = useState("");
  const wrapRef = useRef(null);

  const toggle = (name) => setOpenDrop((prev) => (prev === name ? null : name));

  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target))
        setOpenDrop(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const dateLabel = selectedDate
    ? `${selectedDate.day} ${MONTHS[selectedDate.month].slice(0, 3)} ${selectedDate.year}`
    : null;

  const dinerOptions = Array.from({ length: 10 }, (_, i) =>
    i === 0 ? "1 Diner" : `${i + 1} Diners`,
  );
  const timeOptions = [
    "5:00 pm",
    "6:00 pm",
    "7:00 pm",
    "8:00 pm",
    "9:00 pm",
    "10:00 pm",
  ];
  const occasionOptions = ["Birthday", "Engagement", "Anniversary"];

  return (
    <>
      {/* ---- HERO / RESERVATIONS SECTION ---- */}
      <section style={styles.heroRes}>
        <div style={styles.heroInner} ref={wrapRef}>
          <h1 style={styles.heroTitle}>Reservations</h1>

          {/* Seating radio */}
          <div style={styles.seatingRow}>
            {["indoor", "outdoor"].map((s) => (
              <label key={s} style={styles.seatingLabel}>
                <input
                  type="radio"
                  name="seating"
                  value={s}
                  checked={seating === s}
                  onChange={() => setSeating(s)}
                  style={{
                    accentColor: "#f4ce14",
                    width: 18,
                    height: 18,
                    cursor: "pointer",
                  }}
                />
                {s.charAt(0).toUpperCase() + s.slice(1)} seating
              </label>
            ))}
          </div>

          <div style={styles.formGrid}>
            {/* Date */}
            <div style={styles.fieldGroup}>
              <span style={styles.fieldLabel}>Date</span>
              <CustomSelect
                icon="📅"
                label="Select Date"
                value={dateLabel}
                isOpen={openDrop === "date"}
                onToggle={() => toggle("date")}
              >
                <Calendar
                  selected={selectedDate}
                  onSelect={(d) => {
                    setSelectedDate(d);
                    setOpenDrop(null);
                  }}
                />
              </CustomSelect>
            </div>

            {/* No. of Diners */}
            <div style={styles.fieldGroup}>
              <span style={styles.fieldLabel}>Number of Diners</span>
              <CustomSelect
                icon="👤"
                label="No. of Diners"
                value={diners}
                isOpen={openDrop === "diners"}
                onToggle={() => toggle("diners")}
              >
                <div
                  style={{
                    ...styles.dropdown,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                  }}
                >
                  {dinerOptions.map((d) => (
                    <div
                      key={d}
                      style={styles.dropItem}
                      onMouseEnter={(e) =>
                        (e.target.style.background = "#f4ce14")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.background = "transparent")
                      }
                      onClick={() => {
                        setDiners(d);
                        setOpenDrop(null);
                      }}
                    >
                      {d}
                    </div>
                  ))}
                </div>
              </CustomSelect>
            </div>

            {/* Occasion */}
            <div style={styles.fieldGroup}>
              <span style={styles.fieldLabel}>Occasion</span>
              <CustomSelect
                icon="🥂"
                label="Occasion"
                value={occasion}
                isOpen={openDrop === "occasion"}
                onToggle={() => toggle("occasion")}
              >
                <div style={styles.dropdown}>
                  {occasionOptions.map((o) => (
                    <div
                      key={o}
                      style={styles.dropItem}
                      onMouseEnter={(e) =>
                        (e.target.style.background = "#f4ce14")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.background = "transparent")
                      }
                      onClick={() => {
                        setOccasion(o);
                        setOpenDrop(null);
                      }}
                    >
                      {o}
                    </div>
                  ))}
                </div>
              </CustomSelect>
            </div>

            {/* Time */}
            <div style={styles.fieldGroup}>
              <span style={styles.fieldLabel}>Time</span>
              <CustomSelect
                icon="🕐"
                label="Select time"
                value={time}
                isOpen={openDrop === "time"}
                onToggle={() => toggle("time")}
              >
                <div
                  style={{
                    ...styles.dropdown,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                  }}
                >
                  {timeOptions.map((t) => (
                    <div
                      key={t}
                      style={styles.dropItem}
                      onMouseEnter={(e) =>
                        (e.target.style.background = "#f4ce14")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.background = "transparent")
                      }
                      onClick={() => {
                        setTime(t);
                        setOpenDrop(null);
                      }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </CustomSelect>
            </div>
          </div>
        </div>
      </section>

      {/* ---- PHOTOS SECTION ---- */}
      <section className="photos">
        <div className="specials-cards">
          <div className="card">
            <img src={restauranFood} alt="Restaurant food" />
          </div>
          <div className="card">
            <img src={restaurant} alt="Restaurant interior" />
          </div>
          <div className="card">
            <img src={restaurantB} alt="Chef at work" />
          </div>
        </div>
        <div className="photos-header">
          <button>Reserve A Table</button>
        </div>
      </section>
    </>
  );
}

const styles = {
  heroRes: {
    backgroundColor: "#495e57",
    padding: "40px 0 50px",
  },
  heroInner: {
    width: "75%",
    margin: "0 auto",
    padding: "0 40px",
  },
  heroTitle: {
    color: "#f4ce14",
    fontSize: 40,
    fontWeight: 600,
    marginBottom: 24,
  },
  seatingRow: {
    display: "flex",
    gap: 40,
    marginBottom: 24,
  },
  seatingLabel: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: "#fff",
    fontSize: 16,
    cursor: "pointer",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px 40px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  fieldLabel: {
    color: "#edefee",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: 0.3,
  },
  selBtn: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "12px 16px",
    fontSize: 15,
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
    color: "#333",
  },
  dropdown: {
    position: "absolute",
    top: "calc(100% + 4px)",
    left: 0,
    background: "#fff",
    borderRadius: 8,
    boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
    zIndex: 100,
    minWidth: "100%",
    overflow: "hidden",
  },
  dropItem: {
    padding: "11px 18px",
    fontSize: 14,
    color: "#333",
    cursor: "pointer",
    borderBottom: "0.5px solid #f0f0f0",
    background: "transparent",
    transition: "background 0.1s",
  },
  calWrap: {
    position: "absolute",
    top: "calc(100% + 4px)",
    left: 0,
    background: "#fff",
    borderRadius: 8,
    boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
    padding: 16,
    minWidth: 260,
    zIndex: 100,
  },
  calHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  calNav: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    color: "#333",
    padding: "4px 8px",
  },
  calGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: 2,
  },
  calDayHdr: {
    textAlign: "center",
    fontSize: 11,
    color: "#888",
    padding: "4px 0",
    fontWeight: 600,
  },
  calDay: {
    textAlign: "center",
    padding: "6px 2px",
    fontSize: 13,
  },
};

export default BookingPage;
