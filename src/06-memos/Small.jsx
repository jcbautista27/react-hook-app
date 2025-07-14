import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("reload");
  return <small>{value}</small>;
});
