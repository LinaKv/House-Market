import React from "react";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

function Concat() {
  const [message, setMessage] = useState("");
  const [landlord, setLandLord] = useState(null);
  const [searchParams, setSearchParams] = useState();

  const params = useParams();

  useEffect(() => {
    const getLandLord = async () => {
      const docRef = doc(db, "users", params.landlordId);
      console.log(docRef);
      const docSnap = await getDoc(docRef);
      console.log(docSnap);

      if (docSnap.exists()) {
        setLandLord(docSnap.data());
      } else {
        console.log(docSnap.data());
        toast.error("Could not get landlord data");
      }
    };

    getLandLord();
  }, [params.lanLordId]);

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Concat Landlord</p>
      </header>

      {landlord !== null && (
        <main>
          <div className="contactLandlord">
            <p className="landlordName">Concat {landlord?.name}</p>
          </div>
        </main>
      )}
    </div>
  );
}

export default Concat;
