import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { specialty } = useParams();

  const [filterDoc, setFilterDoc] = useState([]);

  const navigate = useNavigate();

  console.log(specialty);

  const { doctors } = useContext(AppContext);

  // const applyFilter = () => {
  //   if (specialty) {
  //     setFilterDoc(doctors.filter((doc) => (doc.specialty = specialty)));
  //   } else {
  //     setFilterDoc(doctors);
  //   }
  // };

  const applyFilter = () => {
    if (specialty) {
      setFilterDoc(doctors.filter((doc) => doc.specialty === specialty));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, specialty]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-gray-600 text-sm">
          <p
            onClick={() =>
              specialty === "General Physician"
                ? navigate("/doctors")
                : navigate("/doctors/General Physician")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
          >
            General Physician
          </p>
          <p
            onClick={() =>
              specialty === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              specialty === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              specialty === "Pediatrician"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatrician")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
          >
            Pediatrician
          </p>
          <p
            onClick={() =>
              specialty === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              specialty === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, id) => (
            <div
              key={id}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500"
            >
              <img src={item.image} alt="" className="bg-blue-50" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-md font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
