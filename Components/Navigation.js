import React from "react";
import Image from 'next/image' 
import Link from 'next/link'

const Navigation = () => {
  return (
    <div class="navigation">
      <div className="avatar">
        <Image src="" alt="" />
      </div>
      <ul className="nav-items">
          <li className="nav-item">
             <Link href="/home">Home</Link>
          </li>
      </ul>
    </div>
  );
};

export default Navigation;
