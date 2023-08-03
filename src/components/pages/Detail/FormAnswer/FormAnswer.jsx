import { Button, Label, Textarea } from "flowbite-react";
import React from "react";

const FormAnswer = ({ answerSet, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <Label
            htmlFor="answer"
            value="Jawab Pertanyaan :"
            className="text-base"
          />
          <Textarea
            id="answer"
            name="answer"
            placeholder="Tulis jawaban disini..."
            required
            rows={6}
            onChange={(e) => answerSet(e.target.value)}
          />
        </div>
        <Button type="submit" className="text-5xl">
          Kirim Jawaban
        </Button>
      </div>
    </form>
  );
};

export default FormAnswer;
