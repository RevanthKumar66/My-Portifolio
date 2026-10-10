export function SocialCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#FAFAF8",
        color: "#171717",
        padding: "72px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 22,
          letterSpacing: 3,
          color: "#4F46E5",
          textTransform: "uppercase",
        }}
      >
        Software Engineer
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            width: 48,
            height: 4,
            background: "#4F46E5",
            marginBottom: 28,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 600,
            letterSpacing: -1.5,
            lineHeight: 1.05,
          }}
        >
          Revanth Kumar
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 30,
            color: "#525252",
            lineHeight: 1.35,
          }}
        >
          Full-stack development and enterprise software
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#737373" }}>
        revanthkumar.co.in · Hyderabad, India
      </div>
    </div>
  );
}
