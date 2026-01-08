
export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  skills: string[];
  image: string;
}

export interface Application {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  courseId: string;
  courseTitle: string;
  message: string;
  status: 'Pending' | 'Contacted' | 'Enrolled';
  appliedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  receivedAt: string;
}
