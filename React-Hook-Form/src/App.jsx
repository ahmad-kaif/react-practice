import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    //api call simulate 
    await new Promise((resolve)=> setTimeout(resolve,5000)); // 5 sec delay
    console.log("Submitting the form");
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label>First Name: </label>
            <input
              type="text"
              placeholder="your name"
              {...register("firstName", {
                required: true,
                minLength: {
                  value: 3,
                  message: "first name should contain minimum 3 charcter",
                },
              })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </div>

          <div>
            <label>Middle Name: </label>
            <input
              type="text"
              placeholder="your name"
              {...register("middleName", {
                required: false,
                maxLength: 20,
                minLength: 3,
              })}
            />
          </div>

          <div>
            <label>Last Name: </label>
            <input
              type="text"
              placeholder="your name"
              {...register("lastName", { required: false, minLength: 3 })}
            />
          </div>
          <br />
          <button 
          disabled={isSubmitting}
          type="submit"
          value={isSubmitting ? "Submitting" : "Submit"}
          >Submit</button>
        </div>
      </form>
    </>
  );
}

export default App;
















