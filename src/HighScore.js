import React, { useState } from "react";

const HighScore = ({ data }) => {
  console.log(data);
  const [clicked, setClicked] = useState(false);
  const handler = () => {
    setClicked(!clicked);
    if (clicked === true) {
      return data =data.map((item) =>
        item.scores.sort((item1, item2) => item1.s - item2.s));
    } else{
      data=data.map((item) => item.scores.sort((item1, item2) => item2.s - item1.s));
    }
  };
  console.log(data);

  //   const [myarray,setMyarray]= useState(data);
  //   const clickHandler=()=>{
  //    setMyarray((array) => {
  //      array.map((item) => item.scores.sort((item1, item2) => item1.s - item2.s));
  //     });
  //   };

  // data.map((item) => item.scores.sort((item1, item2) => item1.s - item2.s));
  console.log(data);
  //console.log(myarray);
  return (
    <div>
      <button onClick={handler}> sort the scores</button>
      <h1>High Scores Per Country</h1>
      {data.map((item) => {
        return (
          <div className="myDiv">
            <section>
              <h2>{`HIGH SCORES: ${item.name}`}</h2>
              <table className="table">
                <tbody>
                  {item.scores.map((element) => (
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
