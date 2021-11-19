import React from "react";

const HighScore = (props) => {
  return (
    <div>
     <h1>High Scores Per Country</h1>
      {props.data.map((item) => {
        return (
          <div className="myDiv">
            <section>
              <h2>{`HIGH SCORES: ${item.name}`}</h2>
              <table className="table">
                <tbody>
                  {item.scores.map((element, index) => (
                    <tr>
                      <td key={index}>{element.n}</td>
                      <td key={index + 1}>{element.s}</td>
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
