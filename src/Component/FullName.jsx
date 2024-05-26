import "./FullName.scss";
const FullName = () => {
  const info = {
    name: "Van Phu Tin",
    address: "Quang Nam",
    student: "Duy Tan University",
    position: "software developer",
  };
  console.log("info", info);
  return (
    <div className="info">
      Hi there! My name is <p>{info.name}</p>. I am currently studying at{" "}
      <p>{info.student}</p> and pursuing a career as a <p>{info.position}</p>.
      With a passion for coding and problem-solving, I have experience in
      various programming languages and technologies. I enjoy working on
      projects that challenge me to think creatively and innovatively. I am
      always eager to learn new technologies and improve my skills to deliver
      high-quality solutions. Thank you for taking the time to learn a bit about
      me. I look forward to connecting and collaborating with you!
    </div>
  );
};

export default FullName;
