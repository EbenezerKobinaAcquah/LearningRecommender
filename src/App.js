// import React, {useState, useEffect} from "react"

// function App(){
//   const [data, setData] = useState([{}])

//   useEffect(() => {
//     console.log("useEffect is running...");
//     fetch("http://localhost:5000/Resources")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((jsonData) => {
//         setData(jsonData);
//         console.log(jsonData);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return(
//     <div>
//       {(typeof data.Resources === 'undefined') ? (
//         <p>Loading....</p>
//       ) : (
//           data.Resources.map((Resource, i) => (
//             <p key ={i}>{Resource}</p>
//           ))
//       )}
//     </div>
//   )
// }

// export default App




import React, { useState, useEffect } from "react";
import "./styles.css"; // Import your CSS file

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("useEffect is running...");
    fetch("http://localhost:5000/Resources?topic=python")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((jsonData) => {
        setData(jsonData.Udemy); // Update the state with Udemy courses
        console.log("Received Data:", jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
  <h1>Your Learning Resources</h1>
  {data.length === 0 ? (
    <p className="loading">Loading...</p>
  ) : (
    data.map((course, i) => (
      <div className="course-card" key={i}>
        <h2 className="course-title">{course.Title}</h2>
        <p className="course-author">Author: {course.Author}</p>
        <img className="course-image" src={course["Course Picture"]} alt={course.Title} />
        <p className="course-description">Description: {course.Description}</p>
        <a href = "www.udemy.com" className="course-price">Link to Course</a>
      </div>
    ))
  )}
  <p style={{ textAlign: 'center', backgroundColor: '#f0f0f0', padding: '10px', marginTop: '20px' }}>
  All rights reserved | This website is made with love by Ebenezer Kobina Acquah
</p>


</div>

  );
}

export default App;
