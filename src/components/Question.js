import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import QuestionContext from "../context/questions-context";
import { ArrowRight } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "block",
    marginTop: "1rem",
  },
  button: {
    background: "white",
  },
}));

export function Question(props) {
  const classes = useStyles();
  let { questionAnswer , handleChangeInput, nextQuestion} = useContext(QuestionContext); 

  return (
    <div>
      <form noValidate autoComplete="on" onSubmit={nextQuestion}>
        <TextField
          id="standard-basic"
          label={questionAnswer.question}
          name={questionAnswer.resumeFieldId}
          value={questionAnswer.answer ? questionAnswer.answer : ""}
          onChange={handleChangeInput}
        />
        <div className={classes.buttonContainer}>
          <Button
            type="submit"
            variant="contained"
            color="default"
            className={classes.button}
            endIcon={<ArrowRight />}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
