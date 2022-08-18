import { Detail, TableElement, SectionContainer, SectionTitle, PageTitle, ProjectCard } from '../Utils/Utils'
import { NavBar } from '../NavBar/NavBar'
import { ProjectData } from '../../data/ProjectInfo'

export default function Projects(){
    return (
        <>
            <NavBar />
            <Detail.Container>
                <Detail.ContentContainer>
                    <div className="space-y-4">
                    <PageTitle title="Projects" />
                    {ProjectData.map((proj, index) => (
                        <div className="" key={index}>
                            <SectionContainer>
                                <ProjectCard project={proj} />
                            </SectionContainer>
                        </div>
                    ))}
                    </div>
                </Detail.ContentContainer>
            </Detail.Container>
        </>
        
    )
}