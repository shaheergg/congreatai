import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckIcon } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form submitted");
  };
  if (submitted) {
    return (
      <div className="space-y-8 h-full py-8">
        <div className="space-y-2">
          <h2 className="font-[700] text-[18px]">Thank You!</h2>
          <p>Check your email!</p>
        </div>
        <div className="p-4 text-green-500 flex items-center justify-center">
          <CheckIcon size={50} />
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-8 flex items-center justify-center flex-col h-full py-8">
      <div className="space-y-2">
        <h2 className="font-[700] text-[18px]">Nice to meet you!</h2>
        <p>Drop your best e-mail and we will get back to you ASAP!</p>
      </div>
      <div className="max-w-sm mx-auto">
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
          className="space-y-4"
        >
          <Input
            required
            className="px-4 py-2"
            type="text"
            placeholder="Full Name"
          />
          <Input required type="text" placeholder="Email" />
          <p className="text-[14px] text-[#92909599]">
            By submitting you agree to receive marketing communications from
            Congreat. Check our<span> Privacy Policy</span>.
          </p>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
