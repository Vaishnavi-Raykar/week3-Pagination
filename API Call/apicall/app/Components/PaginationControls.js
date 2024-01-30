"use client"

// import { useRouter } from 'next/router';
import React from 'react';
import { useSearchParams,useRouter } from "next/navigation";
import styles from "../styles/paginationControl.module.css"

const PaginationControls = ({totalItems,hasNextPage,hasPrevPage}) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const page = searchParams.get("page") || "1"; 
    const per_page = searchParams.get("per_page") || "5";

    const handlePrevPageClick =()=>{
        const prevPage = Number(page) -1
        if(prevPage >=1){
            router.push(`/?page=${prevPage}&per_page=${per_page}`)
        }
    }
    const handleNextPageClick=()=>{
         const nextPage = Number(page) +1
         router.push(`/?page=${nextPage}&per_page=${per_page}`)
    }
  return (
    <div className={styles.PaginationControls}>
      <button className={styles.paginationButton} onClick={handlePrevPageClick} disabled={!hasPrevPage}> Previous</button>
      <div className={styles.paginationNumbers}>
        {page}/{Math.ceil(totalItems / Number(per_page))}
      </div>
      <button className={styles.paginationButton} onClick={handleNextPageClick} disabled={!hasNextPage}> Next</button>
    </div>
  )
}

export default PaginationControls
