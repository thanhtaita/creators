import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../client";
import { FaLinkedin } from "react-icons/fa";

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("creator").select("*").eq("id", id);
      setCreator(data[0]);
    };
    try {
      fetchData();
    } catch (error) {
      console.error("Something bad happened");
    }
  }, [id]);

  return (
    <div className="flex justify-center my-[5rem] ">
      <div className="w-[50%] h-[20rem] flex flex-row justify-center align-items-center round-md border-[5px] rounded-xl">
        <div
          className="w-[50%] bg-center bg-cover h-full rounded-md"
          style={{
            backgroundImage: `${
              creator.imageURL ? `url(${creator.imageURL})` : "bg-gray-200"
            }`,
          }}
        ></div>
        <div className="w-[50%] flex flex-col align-items-center justify-center px-[1rem]">
          <div className="flex flex-row gap-[0.5rem] align-items-center justify-center">
            <h2>{creator.name}</h2>
            <FaLinkedin
              size={28}
              className="hover:cursor-pointer"
              onClick={() => window.open(`${creator.url}`, "_blank")}
            />
          </div>
          <p>{creator.description}</p>
        </div>
      </div>
    </div>
  );
};
export default ViewCreator;
