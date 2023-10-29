interface User {
  email: string;
  id: number;
  username: string;
  first_name: string;
  last_name: string;
}

interface ContactInfo {
  phone_number: string;
  alternate_email: string;
  telegram_login: string;
}

interface AcademicStatus {
  id: number;
  name: string;
}

interface EmploymentStatus {
  id: number;
  name: string;
}

interface Grade {
  id: number;
  name: string;
}

interface WorkExperience {
  id: number;
  name: string;
  start_date: string;
  end_date: string | null;
  description: string;
  total_experience_months: number;
}

interface Location {
  id: number;
  name: string;
}

interface PortfolioItem {
  id: number;
  url: string;
}

interface Language {
  id: number;
  name: string;
}

interface Education {
  institution: string;
  specialization: string;
  education_level: string;
}

interface Project {
  title: string;
  description: string;
}

interface Course {
  id: number;
  specialization: {
    id: number;
    name: string;
  };
  skills: {
    id: number;
    name: string;
  }[];
}

interface Specialization {
  id: number;
  name: string;
}

interface ResumeDataType {
  user: User;
  age: number;
  photo: string;
  contact_info: ContactInfo;
  academic_status: AcademicStatus;
  employment_status: EmploymentStatus;
  grade: Grade;
  work_experience: WorkExperience[];
  location: Location;
  portfolio: PortfolioItem[];
  languages: Language[];
  educations: Education[];
  description: string;
  specialization: Specialization;
  projects: Project[];
  courses: Course[];
  has_higher_education: boolean;
  has_participated_in_hackathons: boolean;
  has_personal_projects: boolean;
  skills_verified: boolean;
  has_video_presentation: boolean;
  percentage_match: number;
  viewed: boolean;
  is_favorited: boolean;
}

export default ResumeDataType;
