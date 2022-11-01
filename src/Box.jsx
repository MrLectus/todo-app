let Box = (props) => {
  const styles = {
    backgroundColor: props.show ? 'red' : 'green',
  };
  return (
    <div
      className="w- w-20 h-20 p-5"
      style={styles}
      onClick={() => props.toggle(props.id)}
    ></div>
  );
};

export default Box;