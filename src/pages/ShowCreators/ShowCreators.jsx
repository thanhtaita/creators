import { useEffect, useState } from "react";
import { supabase } from "../../client";
import { FaLinkedin, FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "react-bootstrap";
const ShowCreators = () => {
  const [listCreators, setListCreator] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("creator")
        .select("*")
        .order("created_at", { ascending: false });
      if (data) {
        console.log(data);
      }
      setListCreator(data);
    };
    try {
      fetchData();
    } catch (error) {
      console.error("Something bad happened");
    }
  }, []);

  const handleDelete = async (id) => {
    console.log("delete");
    const { data } = await supabase.from("creator").delete().match(id);
    window.location.reload();
  };

  const deleteHandle = (id) => {
    toast((t) => (
      <span className="flex flex-col">
        Do you want to delete this creator?
        <div className="flex gap-[0.5rem] mt-[0.5rem] justify-center">
          <Button
            size="sm"
            variant="warning"
            onClick={() => {
              handleDelete({ id: id });
              toast.dismiss(t.id);
            }}
          >
            Yes
          </Button>
          <Button
            size="sm"
            variant="outline-dark"
            onClick={() => toast.dismiss(t.id)}
          >
            No
          </Button>
        </div>
      </span>
    ));
  };

  return (
    <div className="h-screen grid grid-cols-1 gap-[5rem] my-[5rem] mx-[4rem] sm:grid-cols-2 xl:grid-cols-3 bg-gray-1S00">
      {listCreators &&
        listCreators.map((ele) => (
          <div
            key={ele.id}
            className={`relative flex flex-col pt-[25%] items-center h-[20rem] bg-no-repeat bg-cover bg-center rounded-2xl z-0`}
            style={{
              backgroundImage: `${
                ele.imageURL ? `url(${ele.imageURL})` : "bg-gray-200"
              }`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40 -z-50 rounded-2xl"></div>
            <a
              href={`creator/${ele.id}`}
              className="no-underline flex flex-col"
            >
              <div className="text-[2rem] text-gray-50">{ele.name}</div>
              <div className="text-[#eceff1] px-[1rem]">{ele.description}</div>
            </a>
            <div className="absolute right-[1.5rem] top-[1.5rem] flex flex-row gap-[1rem] z-10">
              <div
                className="hover:cursor-pointer"
                onClick={() => window.open(`${ele.url}`, "_blank")}
              >
                <FaLinkedin size={18} color={"eceff1"} />
              </div>
              <div
                className="hover:cursor-pointer"
                onClick={() => deleteHandle(ele.id)}
              >
                <FaTrash size={18} color={"eceff1"} />
              </div>
              <div className="hover:cursor-pointer">
                <AiFillEdit
                  size={18}
                  color={"eceff1"}
                  onClick={() => {
                    window.location.href = `/edit/${ele.id}`;
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      <Toaster />
    </div>
  );
};

export default ShowCreators;
