import React, { useEffect, useState } from "react"; // yahaa par ham react maise useState or useEffect ko import kar rahe hai !

const url = "https://jsonplaceholder.typicode.com/photos";  // const kar ke ham ne url naaam ka ek variable banaayaa or use ke adhar images ki url ko storgr kiyaa


export default function App() { // yahha par hamne ek app naam kaa function declure ki yaa hai
  const [allImages, setAllImages] = useState([]);  // const kar ke all images kaa ek State banaayaa hai
  const [currentPage, setCurrentPage] = useState(1);  // const kar ke currentPage kar ke ek State banaaya hai

  const imagesPerPage = 20; // const kar ke maine ek imageParPage naame ek localy variable banaaya hai use ke adhar parPage ki value 20 storge ki hai
  const pagesPerGroup = 10; // const kar ke maine paPage ki value 10 storge ki hai

  const fetchData = async () => { // yaahaa par fetch function kaa use kar ke images url maise data ko fetch karvaanyaa hai
    const res = await fetch(url);  // const res varible ke adhar fetch function use kar url maise data ko fetch karvaa ki res ke adhar bhej diyaa
    const data = await res.json(); // par res string formate mai hai iseliye hamnw res ko string maise json function kaa use kar ke object banaake array ke adhar storge karke data mai storge kiyaa

    // Optional: sirf first 500 images
    setAllImages(data.slice(0, 500));  // setAllImage naam ke method se maine data ki value maine allImages ko diyaa
  };

  useEffect(() => { // useEffect kaa use jab hoogaa tab aappnaa page rerender hogaa or tab fetchData naam kaa function call hooga
    fetchData();
  }, []);

  // Total Pages
  const totalPages = Math.ceil(
    allImages.length / imagesPerPage
  );

  // Current Images
  const startImage = (currentPage - 1) * imagesPerPage;
  const endImage = startImage + imagesPerPage;

  const currentImages = allImages.slice(
    startImage,
    endImage
  );

  // Pagination Group Logic
  const startPage =
    Math.floor((currentPage - 1) / pagesPerGroup) *
    pagesPerGroup +
    1;

  const endPage = Math.min(
    startPage + pagesPerGroup - 1,
    totalPages
  );

  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div
      style={{
        width: "90%",
        margin: "20px auto",
      }}
    >
      <h1>Google Style Pagination</h1>

      {/* Images */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(200px,1fr))",
          gap: "20px",
        }}
      >
        {currentImages.map((image) => (
          <div key={image.id}>
            <img
              src={image.thumbnailUrl}
              alt={image.title}
              width="100%"
            />
            <p>{image.id}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Previous */}
        {startPage > 1 && (
          <button
            onClick={() =>
              setCurrentPage(startPage - pagesPerGroup)
            }
          >
            Prev
          </button>
        )}

        {/* Page Numbers */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            style={{
              padding: "8px 12px",
              background:
                currentPage === page
                  ? "blue"
                  : "white",
              color:
                currentPage === page
                  ? "white"
                  : "black",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        {endPage < totalPages && (
          <button
            onClick={() =>
              setCurrentPage(endPage + 1)
            }
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}