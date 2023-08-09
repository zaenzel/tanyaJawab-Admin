import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { handleInput } from "../../../../utils/handleInput";

const FormAuth = ({ userSet, handleSubmit }) => {
  return (
    <div className="p-10 rounded-md bg-white/30 backdrop-blur-sm">
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" />
          </div>
          <TextInput
            id="email1"
            required
            name="email"
            type="email"
            onChange={(e) => handleInput(e, userSet)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Password" />
          </div>
          <TextInput
            id="password1"
            required
            name="password"
            type="password"
            onChange={(e) => handleInput(e, userSet)}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default FormAuth;
