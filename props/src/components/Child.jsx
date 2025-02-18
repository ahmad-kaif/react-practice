import Grandchild from "./grandchild";


const Child = (props) => {
    // console.log(props)
  return (
    <div>
      {/* Child */}
        Hello i am child

      <Grandchild props = {props}/>
    </div>
  )
}

export default Child
