import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { supabase } from "../../client";
import { useEffect, useState } from "react";

const EditCreator = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  let counter = 0;
  const defaultCreator = {
    name: "",
    url: "",
    imageURL: "",
    description: "",
  };
  const [creator, setCreator] = useState(defaultCreator);

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

  const onSubmit = async (d) => {
    console.log(d);
    await supabase
      .from("creator")
      .update({
        name: creator.name,
        url: creator.url,
        imageURL: creator.imageURL,
        description: creator.description,
      })
      .match({ id: id });
    window.location.href = "/";
  };

  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center my-[5rem]">
      <form
        className="w-[30%] flex flex-col p-[3rem] gap-[2rem] bg-gray-200 rounded-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>CREATOR INFO {counter++}</h2>
        <label>
          Name
          <br />
          <input
            type="text"
            name="name"
            value={creator.name || ""}
            className="w-[70%] h-[2rem] ml-[1rem] rounded-md px-[0.5rem]"
            required
            {...register("name")}
            onChange={handleChange}
          />
        </label>
        <label>
          Linkedin URL
          <br />
          <input
            type="text"
            name="url"
            value={creator.url || ""}
            className="w-[70%] h-[2rem] ml-[1rem] rounded-md px-[0.5rem]"
            required
            {...register("url")}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL
          <br />
          <input
            type="text"
            name="imageURL"
            value={creator.imageURL || ""}
            className="w-[70%] h-[2rem] ml-[1rem] rounded-md px-[0.5rem]"
            {...register("imageURL")}
            onChange={handleChange}
          />
        </label>
        <label>
          Description
          <br />
          <input
            type="text"
            name="description"
            value={creator.description || ""}
            className="w-[70%] h-[2rem] ml-[1rem] rounded-md px-[0.5rem]"
            {...register("description")}
            onChange={handleChange}
          />
        </label>
        <Button className="mt-[1rem]" variant="dark" type="submit">
          Update Creator
        </Button>
      </form>
    </div>
  );
};

export default EditCreator;
