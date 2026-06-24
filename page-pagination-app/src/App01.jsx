import React, { useEffect, useState } from "react"; // React, useState aur useEffect import kiye

// API URL jahan se images ka data aayega
const url = "https://jsonplaceholder.typicode.com/photos";

export default function App() {

    // Saari images store karne ke liye state
    const [allImages, setAllImages] = useState([]);

    // Current page track karne ke liye state
    const [currentPage, setCurrentPage] = useState(1);

    // Ek page par kitni images dikhani hain
    const imagesPerPage = 20;

    // Ek group mein kitne page numbers dikhane hain
    const pagesPerGroup = 10;

    // API se data fetch karne wala function
    const fetchData = async () => {

        // API ko request bheji
        const res = await fetch(url);

        // Response ko JSON mein convert kiya
        const data = await res.json();

        // Data ko state mein store kar diya
        setAllImages(data);
    };

    // Component mount hote hi data fetch hoga
    useEffect(() => {
        fetchData();
    }, []);

    
    // TOTAL PAGES CALCULATION
    

    // Example:
    // 5000 images / 20 images per page = 250 pages
    const totalPages = Math.ceil(
        allImages.length / imagesPerPage
    );

    
    // CURRENT PAGE IMAGES
    

    // Current page ka starting index

    // Page 1 => 0
    // Page 2 => 20
    // Page 3 => 40

    const startImage =
        (currentPage - 1) * imagesPerPage;

    // Current page ka ending index

    // Page 1 => 20
    // Page 2 => 40
    // Page 3 => 60

    const endImage =
        startImage + imagesPerPage;

    // Sirf current page ki images nikalna
    const currentImages = allImages.slice(
        startImage,
        endImage
    );


    // GOOGLE STYLE PAGINATION


    /*
    
    Page 1-10  => Group 1
    Page 11-20 => Group 2
    Page 21-30 => Group 3
  
    */

    const startPage =
        Math.floor(
            (currentPage - 1) / pagesPerGroup
        ) *
        pagesPerGroup +
        1;

    /*
    
    Examples
  
    currentPage = 1
  
    Math.floor((1-1)/10)
    = 0
  
    0 * 10 + 1
    = 1
  
    startPage = 1
  
    ----------------------
  
    currentPage = 15
  
    Math.floor((15-1)/10)
    = 1
  
    1 * 10 + 1
    = 11
  
    startPage = 11
  
    */

    // Group ka last page

    const endPage = Math.min(
        startPage + pagesPerGroup - 1,
        totalPages
    );

    /*
    
    Example
  
    startPage = 11
  
    11 + 10 - 1
    = 20
  
    endPage = 20
  
    */

    // Page numbers store karne ke liye array
    const pages = [];

    // Pages array generate karna

    for (
        let i = startPage;
        i <= endPage;
        i++
    ) {
        pages.push(i);
    }

    /*
    
    Example
  
    startPage = 1
    endPage = 10
  
    pages = [
      1,2,3,4,5,
      6,7,8,9,10
    ]
  
    */

    return (
        <div
            style={{
                width: "90%",
                margin: "20px auto",
            }}
        >
            <h1>Google Style Pagination</h1>

            {/* 
          IMAGES SECTION
       */}

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

                        <p>Image Id : {image.id}</p>
                    </div>
                ))}
            </div>

            {/*
          PAGINATION SECTION
      */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "40px",
                    flexWrap: "wrap",
                }}
            >

                {/* PREVIOUS GROUP BUTTON */}

                {startPage > 1 && (
                    <button
                        onClick={() =>
                            setCurrentPage(
                                startPage - pagesPerGroup
                            )
                        }
                    >
                        Prev
                    </button>
                )}

                {/* PAGE NUMBER BUTTONS */}

                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() =>
                            setCurrentPage(page)
                        }
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

                {/* NEXT GROUP BUTTON */}

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