import React,{useMemo} from "react";

const DemoOutput = (props) => {
  console.log("inside demo applicatin");
  const {items} = props.items
  const sortedList = useMemo(() => {
    console.log(" sorting array", items)
    return items.sort((a, b) => a - b);
  }, [items]);
  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoOutput);
