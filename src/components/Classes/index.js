import { Detail, TableElement, SectionContainer, SectionTitle, PageTitle, ClassCard} from '../Utils/Utils'
import { NavBar } from '../NavBar/NavBar'
import { ClassInfo } from '../../data/ClassInfo'

export default function Classes(){
    return (
        <>
            <NavBar />
            <Detail.Container>
                <Detail.ContentContainer>
                    <div className="space-y-4">
                        <PageTitle title="Classes I've Enjoyed" />
                        {ClassInfo.map((course, index) => (
                            <div className="" key={index}>
                                <ClassCard course={course} />
                            </div>
                        ))}
                    </div>
                </Detail.ContentContainer>
            </Detail.Container>
        </>
    )
}