import { SectionBox } from './Section.styled';


export const Section = ({title, children }) => {
  return (
  <SectionBox>
    <h2>{title}</h2>
    {children}
    </SectionBox>
  )
}