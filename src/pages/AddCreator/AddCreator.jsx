import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { supabase } from "../../client";

const AddCreator = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (d) => {
    console.log(d);
    await supabase.from("creator").insert({
      name: d.name,
      url: d.url,
      imageURL: d.imageURL,
      description: d.description,
    });
    window.location.href = "/";
  };

  return (
    <div className="flex justify-center my-[5rem]">
      <form
        className="w-[30%] flex flex-col p-[3rem] gap-[2rem] bg-gray-200 rounded-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>NEW CREATOR</h2>
        <label>
          Name
          <br />
          <input className="w-[70%] ml-[1rem]" required {...register("name")} />
        </label>
        <label>
          Linkedin URL
          <br />
          <input className="w-[70%] ml-[1rem]" required {...register("url")} />
        </label>
        <label>
          Image URL
          <br />
          <input className="w-[70%] ml-[1rem]" {...register("imageURL")} />
        </label>
        <label>
          Description
          <br />
          <input className="w-[70%] ml-[1rem]" {...register("description")} />
        </label>
        <Button className="mt-[1rem]" variant="dark" type="submit">
          Add Creator
        </Button>
      </form>
    </div>
  );
};

export default AddCreator;
