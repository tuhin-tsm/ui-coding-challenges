import Popover from "@/challenges/popover/react/Popover";

export default function Page() {
  return (
    <div style={{ padding: "150px" }}>
      <h1>React Popover Example</h1>
      <Popover
        content={
          <div>
            Additional information goes here. <a href="#">More info</a>
          </div>
        }
      >
        <button
          style={{
            background: "none",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          i
        </button>
      </Popover>
    </div>
  );
}
