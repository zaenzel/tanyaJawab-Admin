const DetailText = ({ question = true, text = "", name = "", city = "" }) => {
  return (
    <div className="flex flex-col gap-8 w-full ">
      <h5 className="font-semibold">
        {question ? "Pertanyaan :" : "Jawaban :"}
      </h5>
      <p>
        <span className="text-2xl text-primary">"</span>
        {text}
        <span className="text-2xl text-primary">"</span>
      </p>
      <p>- {name + ", " + city}</p>
    </div>
  );
};

export default DetailText;
