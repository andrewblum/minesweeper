
export function Menubar({ flags, time, changeDifficulty }) {
    return (
      <div>    
          <select name="difficulty" id="difficultypulldown" onChange={changeDifficulty}>
              <option value="EASY">Easy</option>
              <option value="MEDIUM">Medium</option>
              <option value="HARD">Hard</option>
          </select>
          {flags}
          {time}
      </div>
    );
}
