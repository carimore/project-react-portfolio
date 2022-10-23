import React from 'react'
import { SectionContainer, Headings, Text, ProjectsGrid, ProjectTittle, ProjectWrapper } from 'GlobalStyles';
import projects from './data.json'

const FeaturedProjects = () => {
  return (
    <SectionContainer>
      <Headings><span> MY PROJECTS </span></Headings>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectWrapper key={project.id}>
            <a href={project.url} target="_blank" rel="noreferrer">
              <img src={project.image} alt={project.tittle} />
              <ProjectTittle>{project.title}</ProjectTittle>
              <Text>{project.description}</Text>
            </a>
          </ProjectWrapper>
        ))}
      </ProjectsGrid>
    </SectionContainer>
  )
}

export default FeaturedProjects;
