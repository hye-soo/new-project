export default function Login() {
  return (
    <>
      <div style={{ textAlign: "left", background: "grey", width: "30%" }}>
        <p>@username</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <p style={{ width: "100%" }}>
            comment 1 lorem ipsum yadda yadda so...........................
          </p>
          <p>02/02/2026 - 03:10:00</p>
          <button
            type="button"
            style={{
              backgroundColor: "green",
              width: "30%",
              height: "20px",
              margin: "10px",
            }}
          >
            Reply
          </button>
        </div>
      </div>
    </>
  );
}
