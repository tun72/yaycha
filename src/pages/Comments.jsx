import { Box, Button, TextField } from "@mui/material";
import Item from "../components/Item";

function Comments() {
  return (
    <Box sx={{marginBottom: "20px"}}>
      <Item
        primary
        key={1}
        remove={() => {}}
        item={{
          id: 1,
          content: "A post content from Alice",
          name: "Alice",
        }}
      ></Item>
      <Item
        key={2}
        remove={() => {}}
        item={{
          id: 1,
          content: "A post content from Alice",
          name: "Alice",
        }}
      ></Item>
      <Item
        key={3}
        remove={() => {}}
        item={{
          id: 1,
          content: "A post content from Alice",
          name: "Alice",
        }}
      ></Item>
      <form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 3 }}>
          <TextField multiline placeholder="Your Comment" />
          <Button type="submit" variant="contained">
            Reply
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Comments;
