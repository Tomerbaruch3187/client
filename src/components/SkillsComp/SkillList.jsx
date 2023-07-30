import Skill from "./Skill";
import skillsData from "./SkillsData";

export default function SkillList() {
  return (
    <div className="skill-list">
      {skillsData.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
