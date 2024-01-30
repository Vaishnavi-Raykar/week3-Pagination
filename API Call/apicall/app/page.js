import Image from "next/image";
import Link from "next/link";
import PaginationControls from "./Components/PaginationControls";
import styles from "./page.module.css"


const data = [
  "Vaishnavi Raykar",
  "Vrushali More",
  "Sanket Shinde",
   "Rahul Gawade",
   "Purva Nidan",
   "Arti Jagtap",
   "Arushi Latwl",
   "Devansh Musale",
   "Ranuka Jadhav",
   "Gaurav Gujar",
   "Sejal Patil",
   "Anisha Rai",
   "Sakshi Thorat",
   "Aditya Tajane",
   "Kedar Nirhali",
   "Pratiksha Biranje",
   "Amit More",
   "Vaishnavi Jadhav",
   "Rohit Badhekar",
   "Chakradhar Malge",
   "Tejal Gund",
   "Supriya Madwai",
   "Anjali Wabale",
   "Devdatta Khillari",
   "Akash Totre",
   "Sanika Totre",
   "Vaishnavi Gunjal",
   "Sarthak Doke",
   "Aditya Bankhele",
   "Pooja Shinde",
   "Sakshi Pawale",
   "Shital Waghmare",
   "Vipul Korpad",
   "Pratiksha Borate",
   "Pragti Kale",
   "Sarang Doke",
   "Sanika Daine"
]

function Home({
  searchParams
}){
  const page = searchParams ['page'] ?? '1';

  const per_page = searchParams['per_page'] || '5';

  const totalItems = data.length;

  const start = (Number(page) - 1)* Number(per_page);

  const end = start + Number(per_page);

  const entries = data.slice(start,end);

  return (
    <div className={styles.items}>
      {entries.map((entry) =>(
        <p key={entry}>{entry}</p>
      ))}

      <br /> <br />

      <PaginationControls
      hasNextPage ={end< data.length}
      hasPrevPage = {start >0}
      totalItems = {totalItems}/>
      
    </div>
  )
}

export default Home


// export default function Home() {
//   return (
//     <main >
//       <h1>Fetch Data with API in Server Component</h1>
//       <Link href="/productlist">Go to Product Page</Link>
//     </main>
//   );
// }
