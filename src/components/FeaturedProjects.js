import React from 'react'
import styled from 'styled-components'
import { SectionContainerGray, Headings, Text, ProjectTittle, ProjectWrapper } from 'GlobalStyles';
import projects from './data.json'

// Groups the projects by their "category" in data.json, keeping the order of the file.
const groupByCategory = (list) => {
  const groups = []
  list.forEach((project) => {
    const found = groups.find((group) => group.name === project.category)
    if (found) {
      found.items.push(project)
    } else {
      groups.push({ name: project.category, items: [project] })
    }
  })
  return groups
}

const groups = groupByCategory(projects)

const FeaturedProjects = () => {
  return (
    <SectionContainerGray>
      <Headings><span> MY PROJECTS </span></Headings>
      <Count>{projects.length} websites in {groups.length} industries</Count>
      {groups.map((group) => (
        <div key={group.name}>
          <CategoryTitle>{group.name} ({group.items.length})</CategoryTitle>
          <Grid>
            {group.items.map((project) => (
              <ProjectWrapper key={project.id}>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={project.title} />
                  <ProjectTittle>{project.title}</ProjectTittle>
                  <Text>{project.description}</Text>
                </a>
              </ProjectWrapper>
            ))}
          </Grid>
        </div>
      ))}
    </SectionContainerGray>
  )
}

const Count = styled.p`
  font-family: 'Karla', sans-serif;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`

const CategoryTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  color: #f567a7;
  border-bottom: 2px solid #f567a7;
  padding-bottom: 8px;
  margin: 40px 0 20px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  article img {
    @media (min-width: 1024px) {
      height: 14vw;
    }
  }
`

export default FeaturedProjects;
