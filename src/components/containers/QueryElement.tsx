const QueryElement = ({data, onChange}:IQueryElement) => {
  return (
    <li>
      <input readOnly
              value = {data}
              disabled
      />
      <input placeholder = {`Input ${data}`}
              name = {data}
              onChange = {onChange}
      />
    </li>
  )
}

interface IQueryElement {
  data : string;
  onChange : (e:any) => void;
}

export default QueryElement;