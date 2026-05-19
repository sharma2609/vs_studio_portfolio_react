export const handleListKeyDown = (e, onActivate) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onActivate();
  }
};
