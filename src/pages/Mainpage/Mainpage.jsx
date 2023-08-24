import Button from "react-bootstrap/Button";
import { Outlet } from "react-router-dom";
const Mainpage = () => {
  console.log("Mainpage");
  return (
    <div className="App">
      <header>
        <div className="h-[50vh] flex flex-col justify-center bg-[url('https://images.pexels.com/photos/983200/pexels-photo-983200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover">
          <h1 className="text-[5rem] mb-[1rem] text-gray-50">CREATORVERSE</h1>
          <div className="flex gap-[1rem] justify-center">
            <Button href="/" variant="light">
              VIEW ALL CREATORS
            </Button>
            <Button href="/add" variant="dark">
              ADD A CREATOR
            </Button>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Mainpage;
