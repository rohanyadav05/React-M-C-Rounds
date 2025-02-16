import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { debounce } from "lodash";
import "./SearchBarStyles.css";

const cache_clear_time = 60 * 1000 * 5; // after 5 min clear session

const SearchBar = () => {
  const [listArr, setListArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const cache = useRef({});

  const fetchApi = useCallback(async (text) => {
    const now = Date.now();
    if (
      cache.current[text] &&
      now - cache.current[text].timestamp < cache_clear_time
    ) {
      setListArr(cache.current[text].data);
      return;
    }
    setLoading(true);
    const res = await fetch(`https://dummyjson.com/recipes/search?q=${text}`);
    const result = await res.json();
    cache.current[text] = { data: result, timestamp: now };
    setListArr(result);
    console.log("result", result);
    setLoading(false);
  }, []);

  const debouncedFetch = useMemo(
    () => debounce((text) => fetchApi(text), 300),
    [fetchApi]
  );

  useEffect(() => {
    const now = Date.now();
    let interval = setInterval(() => {
      Object.keys(cache.current).forEach((item) => {
        if (now - cache.current[item].timestamp >= cache_clear_time) {
          delete cache.current[item];
        }
      });
    }, 60 * 1000);
    return () => {
      debouncedFetch.cancel();
      clearInterval(interval);
    };
  }, [debouncedFetch]);

  const handleChange = (e) => {
    let text = e.target.value;
    setSearch(text);
    if (text.length > 1) {
      debouncedFetch(text);
    }
  };

  const handleSelection = (name) => {
    setListArr([]);
    setSearch(name);
  };

  const handleKeyDown = (e) => {
    if (!listArr.recipes || listArr.recipes.length === 0) return;
    console.log(e.key)
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev < listArr.recipes?.length - 1 ? prev + 1 : 0));
    }

    if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : listArr.recipes?.length - 1));
    } 

    if (e.key === "Enter" && selectedIndex >= 0) {
      
        setSearch(listArr.recipes[selectedIndex].name);
        setListArr([]);
        setSelectedIndex(-1);
      };
    
  };

  const listRef = useRef(null); // Ref for dropdown list

  useEffect(() => {
    if (listRef.current && listArr.recipes?.length > 0 && selectedIndex >= 0) {
      listRef.current.children[selectedIndex]?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [selectedIndex, listArr.recipes]);
  



  return (
    <div className="main-container">
      <div>User Search Form</div>
      <div className="div-container">
        <label className="label-container"> Name </label>
        <input type="text" />
      </div>

      <div className="div-container">
        <label className="label-container"> Search </label>
        <div className="div-container-search">
          <input
            type="text"
            onChange={handleChange}
            value={search}
            onKeyDown={handleKeyDown}
          />

          {listArr.recipes?.length > 0 && (
            <ul className="dropdown-list" ref={listRef}>
              {listArr.recipes.map((item, index) => {
                return (
                  <li
                    onClick={() => handleSelection(item.name)}
                  className={`list-container ${index === selectedIndex ? "active" : ""}`}
                  key={item.id}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          )}
          {loading && <span>Loading...</span>}
        </div>
      </div>

      {/* <div className="div-container">
      <label className="label-container"> Search </label>
      <div className="div-container-search">
        <input type="text" onChange={handleChange} className="search-input" />

        {listArr.recipes?.length > 0 && (
          <ul className="dropdown-list">
            {listArr.recipes.map((item, index) => (
              <li className="list-container" key={item.id || index}>
                {item.name}
              </li>
            ))}
          </ul>
        )}

        {loading && <span>Loading...</span>}
      </div>
    </div> */}
      <div className="div-container">
        <label className="label-container"> Age </label>
        <input type="number" />
      </div>
      <div className="div-container">
        <label className="label-container"> Address </label>
        <input type="text" />
      </div>
    </div>
  );
};

export default SearchBar;
