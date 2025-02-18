
import Child from './Child'

const Parent = () => {

    const data = {
        name: "ahmad",
        age: "23",
    }

  return (
    <div>
      Parent

      <Child data={data} />

    </div>
  )
}

export default Parent
