"use client";
import React from "react";
import style from "./style/card.module.css";
import Link from "next/link"; 
import {
  FaUserPlus,
  FaUserEdit,
  FaUserTag,
  FaLevelUpAlt,
  FaIdCard,
} from "react-icons/fa";
import { BiBookOpen } from "react-icons/bi";
import { IoMdPaper } from "react-icons/io";
import { AiOutlineDatabase } from "react-icons/ai";

const page = () => {
  return (
    <div>
      <div className={style.head}>
        <h2>Student Module</h2>
        <small>Manage your basic details....</small>
      </div>

      <div className={style.cardContainer}>
        <Link href="/student/addnewstudent" method="GET" title="Add New Student">
          <div className={`${style.card} ${style.card1}`}>
            <FaUserPlus className={style.icon} />
            <h3>New Student</h3>
            <p>Add Basic Details Of <br />New Student</p>
          </div>
        </Link>
        <Link href="/student/updatestudentdata" method="GET" title="Update Student Detail">
          <div className={`${style.card} ${style.card2}`}>
            <FaUserEdit className={style.icon} />
            <h3>Update Student</h3>
            <p>Update Basic Details Of <br />Student</p>
          </div>
        </Link>
        <Link href="/student/assignrollno" method="GET" title="Assign Roll No">
          <div className={`${style.card} ${style.card3}`}>
            <FaUserTag className={style.icon} />
            <h3>Assign RollNo</h3>
            <p>Assign Roll No To <br />Student</p>
          </div>
        </Link>
        <Link href="/student/promotestudent" method="GET" title="Promote Student">
          <div className={`${style.card} ${style.card4}`}>
            <FaLevelUpAlt className={style.icon} />
            <h3>Promote Student</h3>
            <p>Promote Student To <br />Next Session</p>
          </div>
        </Link>
      </div>

      <div className={style.cardContainer}>
        <Link href="/student/studentbulkstudent" method="GET" title="Bulk Update Data">
          <div className={`${style.card} ${style.card5}`}>
            <AiOutlineDatabase className={style.icon} />
            <h3>Student Bulk Data</h3>
            <p>Bulk Update Of Student <br />Details</p>
          </div>
        </Link>
        <Link href="/student/transfercertificate" method="GET" title="Transfer Certificate">
          <div className={`${style.card} ${style.card6}`}>
            <IoMdPaper className={style.icon} />
            <h3>Transfer Certificate</h3>
            <p>Generate TC Of <br />Student</p>
          </div>
        </Link>
        <Link href="/student/generateidcard" method="GET" title="ID Card">
          <div className={`${style.card} ${style.card7}`}>
            <FaIdCard className={style.icon} />
            <h3>ID Card</h3>
            <p>Generate ID Card Of <br />Student</p>
          </div>
        </Link>
        <Link href="/student/studentreports" method="GET" title="All Reports">
          <div className={`${style.card} ${style.card8}`}>
            <BiBookOpen className={style.icon} />
            <h3>Reports</h3>
            <p>Check All Report Of <br />Student</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;

// "use client";
// import React from "react";
// import style from "@/app/Styles/allmodule.module.css";
// import Link from "next/link"; // Importing Link component
// import {
//   FaUserPlus,
//   FaUserEdit,
//   FaUserTag,
//   FaLevelUpAlt,
//   FaIdCard,
// } from "react-icons/fa";
// import { BiBookOpen } from "react-icons/bi";
// import { IoMdPaper } from "react-icons/io";
// import { AiOutlineDatabase } from "react-icons/ai";

// const cardsData = [
//   {
//     href: "/student/addnewstudent",
//     icon: <FaUserPlus className={style.icon} />,
//     title: "New Student",
//     description: "Add Basic Details Of <br />New Student",
//     style: style.card1,
//   },
//   {
//     href: "/student/updatestudentdata",
//     icon: <FaUserEdit className={style.icon} />,
//     title: "Update Student",
//     description: "Update Basic Details Of <br />Student",
//     style: style.card2,
//   },
//   {
//     href: "/student/assignrollno",
//     icon: <FaUserTag className={style.icon} />,
//     title: "Assign RollNo",
//     description: "Assign Roll No To <br />Student",
//     style: style.card3,
//   },
//   {
//     href: "/student/promotestudent",
//     icon: <FaLevelUpAlt className={style.icon} />,
//     title: "Promote Student",
//     description: "Promote Student To <br />Next Session",
//     style: style.card4,
//   },
//   {
//     href: "/student/studentbulkstudent",
//     icon: <AiOutlineDatabase className={style.icon} />,
//     title: "Student Bulk Data",
//     description: "Bulk Update Of Student <br />Details",
//     style: style.card5,
//   },
//   {
//     href: "/student/transfercertificate",
//     icon: <IoMdPaper className={style.icon} />,
//     title: "Transfer Certificate",
//     description: "Generate TC Of <br />Student",
//     style: style.card6,
//   },
//   {
//     href: "#",
//     icon: <FaIdCard className={style.icon} />,
//     title: "ID Card",
//     description: "Generate ID Card Of <br />Student",
//     style: style.card7,
//   },
//   {
//     href: "#",
//     icon: <BiBookOpen className={style.icon} />,
//     title: "Reports",
//     description: "Check All Report Of <br />Student",
//     style: style.card8,
//   },
// ];

// const Page = () => {
//   return (
//     <div>
//       <div className={style.head}>
//         <h2>Student Module</h2>
//         <small>Manage your basic details....</small>
//       </div>

//       <div className={style.cardContainer}>
//         {cardsData.map((card, index) => (
//           <Link key={index} href={card.href}>
//             <div className={`${style.card} ${card.style}`}>
//               {card.icon}
//               <h3>{card.title}</h3>
//               <p dangerouslySetInnerHTML={{ __html: card.description }} />
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Page;
