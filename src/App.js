import { Typography } from "@material-ui/core";
import { Questions } from "./components/Questions";
import questionsArray from "./constants/QuestionsArray";

function App() {  
  return (
    <Typography
      variant="h6"
      style={{
        textAlign: "center",
        margin: "2rem",
      }}
    >
      Resume Builder
      <Questions />
    </Typography>
  );
}

export default App;
