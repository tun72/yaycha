import { useEffect, useState } from "react";

import { Alert, Box } from "@mui/material";

import Item from "../components/Item";
import { useApp } from "../ThemedApp";
import Form from "../components/Form";

export default function Home() {
  const { showForm, setGlobalMsg } = useApp();

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(true);

  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
    setGlobalMsg("An item deleted");
  };

  const add = (content, name) => {
    const id = data[data.length - 1]?.id + 1;
    setData([...data, { id, content, name }]);
    setGlobalMsg("An item added");
  };

  useEffect(() => {
    const api = import.meta.env.VITE_API;

    fetch(api + "/content/posts")
      .then(async (res) => {
        if (res.ok) {
          setData(await res.json());
          setloading(false);
        } else {
          setloading(false);
        }
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <Box>
        <Alert severity="warning">Cannot fetch data</Alert>
      </Box>
    );
  }

  if (loading) {
    return <Box sx={{ textAlign: "center" }}>Loading...</Box>;
  }
  return (
    <Box>
      {showForm && <Form add={add} />}
      {data.map((item) => (
        <Item key={item.id} item={item} remove={remove} />
      ))}
    </Box>
  );
}
