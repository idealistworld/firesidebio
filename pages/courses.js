import Header from '../components/header/header';
import Footer from '../components/footer/footer'
import CoursesFold from '../components/coursesFold/couresesFold';
import CoursesSection from '../components/coursesSection/coursesSection';
import { Navbar } from "reactstrap";



export default function Coureses() {
  return (
    <div className="Courses">
      <Header></Header>
      <CoursesFold></CoursesFold>
      <CoursesSection courseSectionTitle = "The VC Basics"></CoursesSection>
      <CoursesSection courseSectionTitle = "Coming Soon..."></CoursesSection>
      <Footer></Footer>
    </div>
  )
}