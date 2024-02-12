import { Button, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function MUIButton() {
  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Click Me</Button>
          <Button variant="contained">Click Me</Button>
          <Button variant="outlined">Click Me</Button>
        </Stack>

        {/* color button */}

        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Stack>

        {/* Button with Sizes  */}

        <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>

        {/* Button with Icons  */}

        <Stack spacing={2} direction="row">
          <Button variant="contained" color="success">
            <SendIcon />
            Send
          </Button>
          <Button variant="contained">
            Send
            <SendIcon />
          </Button>

          <Button aria-label="send" color="success" size="large">
            <SendIcon />
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
