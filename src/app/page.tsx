import Image from "next/image";
import styles from "./page.module.css";

import Homepage from "@/components/home";
export default async function Home() {
  const baseUrl = "http://localhost:3001";
  const response = await fetch(`${baseUrl}/api/list`);

  const crptoList = await response.json();
  // console.log("greetings",greetings);
  // const [selecteditem,setselecteditems]= useState(null)

  return <>{crptoList.length > 1 && <Homepage crptoList={crptoList} />}</>;
}
