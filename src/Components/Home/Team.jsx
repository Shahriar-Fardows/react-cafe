import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="section">
      <div className="text-center">
        <h3 className="font-ptserif text-xl text-primaryColor1 font-bold">
          Our Team
        </h3>
        <h2 className="font-lobster text-4xl md:text-5xl mt-2">
          Meet Our Team
        </h2>
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <TeamCard
          name="Ferdous Himel"
          image="https://i.ibb.co/RN3xjpN/team1.jpg"
          profession="Chief Executive"
        />
        <TeamCard
          name="Mike Dooley"
          image="https://i.ibb.co/0JhDXqG/team2.jpg"
          profession="Executive"
        />
        <TeamCard
          name="Himibaba"
          image="https://i.ibb.co/tLNjYHX/team3.jpg"
          profession="Chief Executive"
        />
      </div>
    </div>
  );
};

export default Team;
