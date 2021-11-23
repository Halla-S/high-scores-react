import React from "react";

const HighScore = (props) => {
  return (
    <div>
      <h1>High Scores Per Country</h1>
      {props.data.map((item) => {
        let newItem = item.scores;
        newItem = newItem.sort((item1, item2) => item1.s - item2.s);

        return (
          <div className="myDiv">
            <section>
              <h2>{`HIGH SCORES: ${item.name}`}</h2>
              <table className="table">
                <tbody>
                  {newItem.map((element) => (
                    <tr>
                      <td key={0}>{element.n}</td>
                      <td key={1}>{element.s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        );
      })}
    </div>
  );
};
export default HighScore;
