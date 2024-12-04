import TeamMember from "@/components/team-member";

const Team = () => {
  return (
    <div className="space-y-4 px-4 md:px-0 h-full py-8">
      <div>
        <h2 className="font-[700] text-[18px]">Our Team</h2>
        <p>When hi-tech and low-tech people come together...</p>
      </div>
      <TeamMember />
      <TeamMember />
      <TeamMember />
    </div>
  );
};

export default Team;
