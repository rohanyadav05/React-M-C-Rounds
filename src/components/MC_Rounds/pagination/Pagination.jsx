import React, { useEffect, useState } from "react";
import "./PaginationStyle.css";

const Pagination = () => {
  const [arrList, setArrList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchApi = async () => {
    try {
      setLoading(true);
      const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await resp.json();
      console.log("result", result);
      setArrList(result);
      setLoading(false);
    } catch (error) {
      console.error("Error in Fetching API");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const ITMES_PER_PAGE_NUMBER = 20;
  const TOTAL_PAGE = Math.ceil(arrList.length / ITMES_PER_PAGE_NUMBER); //200 / 20 10
  const start = currentPage * ITMES_PER_PAGE_NUMBER;
  const end = start + ITMES_PER_PAGE_NUMBER - 1;

  const handleSelection = (currIndex) => {
    setCurrentPage(currIndex);
    console.log(currIndex)
  };

  const handleLeftClick = () => {
currentPage >= 0 ? setCurrentPage((prev) => prev - 1) : setCurrentPage(currentPage)
  }

  const handleRightClick = () => {
    currentPage <= TOTAL_PAGE ? setCurrentPage((prev) => prev + 1) : setCurrentPage(currentPage)

  }

  return (
    <>
      <div>Pagination</div>
      <div className="container-list">
        {arrList.slice(start, end).map((item, index) => {
          return (
            <div key={item.id} className="container-item">
              {" "}
              {item.title}{" "}{item.id}
            </div>
          );
        })}
      </div>
      <div className="container-pagination">
        <button
        disabled={currentPage === 0}
        onClick={handleLeftClick}>◀️</button>
        {[...Array(TOTAL_PAGE)].map((_, i) => {
          return (
            
            <button 
            onClick={() => handleSelection(i)}
            className={`container-button ${i === currentPage ? "active" : "" }`} 
            key={i}>
              {i+1}
            </button>
          );
        })}
        <button
        
        disabled={currentPage >= TOTAL_PAGE-1}
        onClick={handleRightClick}>▶️</button>
      </div>
    </>
  );
};

export default Pagination;
