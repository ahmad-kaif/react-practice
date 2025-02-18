

const Grandchild = (props) => {
    console.log(props.props.data)

    const {name, age} = props.props.data





  return (
    <div>
        hello i am grandchild
        name ; {name}
      
    </div>
  )
}

export default Grandchild
