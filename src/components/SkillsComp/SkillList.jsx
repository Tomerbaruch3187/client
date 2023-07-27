import Skill from "./Skill";

export default function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="REACT" emoji="😐" color="red" />
      <Skill skill="HTML" emoji="🥱" color="orange" />
      <Skill skill="CSS" emoji="😁" color="yellow" />
      <Skill skill="JS" emoji="🤑" color="orangered" />
    </div>
  );
}
