export function Menubar({ flags, time, difficulty, changeDifficulty }) {
  return (
    <div>
      <select
        value={difficulty}
        name="difficulty"
        id="difficultypulldown"
        onChange={changeDifficulty}
      >
        <option value="EASY">Easy</option>
        <option value="MEDIUM">Medium</option>
        <option value="HARD">Hard</option>
      </select>{" "}
      Flags: {flags} Time: {time}
    </div>
  );
}
