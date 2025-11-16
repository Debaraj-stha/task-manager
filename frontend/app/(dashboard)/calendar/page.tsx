


import { Metadata } from "next";
import CalendarView from "./CalendarView";

export const metadata:Metadata={
    title:"Calendar"
}

export default function page() {
  return (
    

      <CalendarView />


  );
}
