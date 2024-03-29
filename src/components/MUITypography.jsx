import { Typography } from "@mui/material";

export default function MUITypography() {
  return (
    <>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>

      {/* Subtitle in MUI  */}

      <Typography variant="subtitle1">Subtitle-1</Typography>
      <Typography variant="subtitle2">Subtitle-2</Typography>

      {/* Body in MUI  */}

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, amet.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, ea?
      </Typography>
    </>
  );
}
