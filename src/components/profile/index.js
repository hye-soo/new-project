export default function Profile() {
  return (
    <div
      style={{
        backgroundColor: "grey",
        padding: "20px",
        width: "250px",
        height: "250px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Project Start</h1>
      <div>
        <p style={{ textAlign: "center" }}>Profile</p>
        <div
          style={{
            backgroundColor: "blue",
            width: "100px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="http://placehold.co/60x60" alt="profile" />
        </div>
        <div>
          {" "}
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              width: "100px",
            }}
          >
            DM
          </button>
        </div>
        <div>@Username</div>
        <div>Bio: Feb 2nd</div>
      </div>
    </div>
  );
}
